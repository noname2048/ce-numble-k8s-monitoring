FROM node:18-bullseye as pnpm
RUN curl -fsSL https://get.pnpm.io/install.sh | sh -

FROM pnpm
ENV PATH="/app/node_modeuls/.bin:$PATH"
COPY ./ /app
RUN pnpm install
RUN node src/index.js

