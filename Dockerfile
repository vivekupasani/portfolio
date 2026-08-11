FROM node:22-alpine AS base
WORKDIR /app

FROM base AS build
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base AS runtime
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]