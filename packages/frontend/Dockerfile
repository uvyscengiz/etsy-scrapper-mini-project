FROM nikolaik/python-nodejs:python3.8-nodejs14-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install --no-lockfile

ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build

FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

CMD ["yarn", "start"]
