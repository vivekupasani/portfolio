FROM node:22-alpine as base
WORKDIR /app

FROM base as build
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base as runtime
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]