FROM node:18-bullseye as pnpm
RUN npm install -g pnpm

FROM pnpm
COPY ./ /app
WORKDIR /app
RUN pnpm install && pnpm exec tsc
ENTRYPOINT node src
