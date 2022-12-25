# Create Node.js Project

This is a template repository for setting up new Node.js project based on my personal preference.

## Quickstart

The easiest way to get started is either by [creating a new Github repository from this template](https://github.com/samialdury/create-nodejs-project/generate) or cloning it with [tiged](https://github.com/tiged/tiged):

```sh
pnpm dlx tiged github:samialdury/create-nodejs-project my-project

cd my-project && git init && pnpm install
```

## Stack

- [Node.js](https://github.com/nodejs/node) & [Typescript](https://github.com/microsoft/TypeScript)
- [pnpm](https://github.com/pnpm/pnpm) package manager
- [Vitest](https://github.com/vitest-dev/vitest) for testing (coverage via [c8](https://github.com/bcoe/c8))
- [Rome](https://github.com/rome/tools) formatter & linter
- [Pino](https://github.com/pinojs/pino) logger
- [Zod](https://github.com/colinhacks/zod) for schema declaration & validation
- [Husky](https://github.com/typicode/husky) Git hooks

## License

[MIT](LICENSE)
