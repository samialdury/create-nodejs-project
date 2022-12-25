import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ['./src/**/*.test.ts', './test/**/*.test.ts'],
		env: {
			NODE_ENV: 'test',
		},
		globals: true,
		restoreMocks: true,
		unstubEnvs: true,
		coverage: {
			provider: 'c8',
			all: true,
			100: true,
			include: ['src/**/*.ts'],
		},
	},
})
