# Install all dependencies and build TypeScript
FROM node:18-alpine as build-js

RUN corepack enable && corepack prepare pnpm@7.21.0 --activate

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY tsconfig.base.json tsconfig.base.json
COPY tsconfig.prod.json tsconfig.prod.json
COPY src src

RUN ./node_modules/.bin/tsc --project ./tsconfig.prod.json

# Install only production dependencies
FROM node:18-alpine as install-prod-deps

ENV NODE_ENV production

RUN corepack enable && corepack prepare pnpm@7.21.0 --activate

COPY --from=build-js package.json package.json
COPY --from=build-js pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install --frozen-lockfile --prod

# Copy only necessary data for runtime
FROM gcr.io/distroless/nodejs18-debian11:nonroot as final

ENV NODE_ENV production

COPY --from=build-js --chown=nonroot:nonroot build build
COPY --from=install-prod-deps --chown=nonroot:nonroot node_modules node_modules

CMD ["./build/src/main.js"]
