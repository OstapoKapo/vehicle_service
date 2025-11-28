FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_SERVER_URL
ARG INTERNAL_API_URL
ARG INTERNAL_USER_SERVICE_URL
ARG INTERNAL_VEHICLE_SERVICE_URL

ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV INTERNAL_API_URL=$INTERNAL_API_URL
ENV INTERNAL_USER_SERVICE_URL=$INTERNAL_USER_SERVICE_URL
ENV INTERNAL_VEHICLE_SERVICE_URL=$INTERNAL_VEHICLE_SERVICE_URL

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "start"]