FROM node:12-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install --no-lockfile

RUN yarn build

FROM node:12-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env.production ./.env.production
COPY --from=builder /app/node_modules ./node_modules
RUN chown nestjs:nodejs /app/

WORKDIR /app

USER nestjs

CMD ["yarn", "start:prod"]
