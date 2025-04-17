FROM node:slim AS builder

WORKDIR /app
COPY portfolio/package*.json ./
RUN npm ci --legacy-peer-deps

COPY portfolio/ ./
RUN npm run build

FROM node:slim AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["npm", "start"]
