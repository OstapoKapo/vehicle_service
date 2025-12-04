# --- Dependencies stage ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- Builder stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time ARGs (для фронтенду)
ARG NEXT_PUBLIC_SERVER_URL
ARG INTERNAL_API_URL
ARG INTERNAL_USER_SERVICE_URL
ARG INTERNAL_VEHICLE_SERVICE_URL
ARG JWT_AT_SECRET

# Передаємо фронтенд змінні у збірку
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV INTERNAL_API_URL=$INTERNAL_API_URL
ENV INTERNAL_USER_SERVICE_URL=$INTERNAL_USER_SERVICE_URL
ENV INTERNAL_VEHICLE_SERVICE_URL=$INTERNAL_VEHICLE_SERVICE_URL
ENV JWT_AT_SECRET=$JWT_AT_SECRET

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# --- Runner stage ---
FROM node:20-alpine AS runner
WORKDIR /app

# Runtime ENV (серверні змінні)
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Тут потрібно передавати реальні runtime ENV у docker-compose
# або через `docker run -e INTERNAL_USER_SERVICE_URL=...`

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
