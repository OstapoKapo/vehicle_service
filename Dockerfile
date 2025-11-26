# Етап 1: Встановлення залежностей
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Використовуємо ci для чистої інсталяції
RUN npm ci

# Етап 2: Збірка (Build)
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 👇 ДОДАНО: Приймаємо змінну, яку передав docker-compose
ARG NEXT_PUBLIC_SERVER_URL
# 👇 ДОДАНО: Робимо її доступною для команди npm run build
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL

# Вимикаємо телеметрію Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Створюємо білд. Тепер Next.js "запече" вашу змінну всередину коду
RUN npm run build

# Етап 3: Запуск (Runner)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Створюємо користувача
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Копіюємо згенеровані файли
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "start"]