import { ConfigError } from '../errors'

import { config, init as initConfig, destroy as destroyConfig } from '.'

describe('Config', () => {
	beforeEach(() => {
		expect(config).toBeUndefined()
	})

	afterEach(() => {
		destroyConfig()
	})

	it('Should initialize config', () => {
		vi.stubEnv('LOG_LEVEL', 'trace')

		initConfig()

		expect(config).toBeDefined()
	})

	it('Should do nothing if initialized twice', () => {
		vi.stubEnv('LOG_LEVEL', 'trace')

		initConfig()
		initConfig()

		expect(config).toBeDefined()
	})

	it('Should throw validation error', () => {
		try {
			initConfig()

			assert(false, 'Should throw error by now')
		} catch (err) {
			if (err instanceof ConfigError) {
				expect(err.isOperational).toBe(false)
				expect(err.issues.length).toBeGreaterThanOrEqual(1)
				expect(err.issues[0]).toHaveProperty('received')
				expect(err.issues[0]).toHaveProperty('code')
				expect(err.issues[0]).toHaveProperty('message')
				expect(err.issues[0]).toHaveProperty('path')
			} else {
				assert(false, 'Should throw ConfigError')
			}
		}
	})
})
