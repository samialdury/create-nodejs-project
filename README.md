# Create Node.js Project

[![Latest release](https://badgen.net/github/release/samialdury/create-nodejs-project)](https://github.com/samialdury/create-nodejs-project/releases/latest)
[![Latest tag](https://badgen.net/github/tag/samialdury/create-nodejs-project)](https://github.com/samialdury/create-nodejs-project/tags)
[![License](https://badgen.net/github/license/samialdury/create-nodejs-project)](LICENSE)
[![CI status](https://github.com/samialdury/create-nodejs-project/actions/workflows/ci.yaml/badge.svg)](https://github.com/samialdury/create-nodejs-project/actions/workflows/ci.yaml)

This is a template repository for setting up new Node.js project based on my personal preference.

## Quickstart

The easiest way to get started is either by [creating a new Github repository from this template](https://github.com/samialdury/create-nodejs-project/generate) or cloning it with [tiged](https://github.com/tiged/tiged):

```sh
pnpm dlx tiged github:samialdury/create-nodejs-project my-project

cd my-project
git init
pnpm install

make help
```

## Stack

- [Node.js](https://github.com/nodejs/node) & [Typescript](https://github.com/microsoft/TypeScript)
- [pnpm](https://github.com/pnpm/pnpm) package manager
- [Vitest](https://github.com/vitest-dev/vitest) for testing (coverage via [c8](https://github.com/bcoe/c8))
- [Prettier](https://github.com/prettier/prettier) formatter
- [ESLint](https://github.com/eslint/eslint) linter
- [Pino](https://github.com/pinojs/pino) logger
- [Zod](https://github.com/colinhacks/zod) for schema declaration & validation
- [Husky](https://github.com/typicode/husky) Git hooks
- [Docker](https://www.docker.com/) for containerization

## License

[MIT](LICENSE)
