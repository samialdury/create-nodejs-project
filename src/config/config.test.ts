import { ConfigError } from '../errors'
import {
	config,
	configSchema,
	init as initConfig,
	destroy as destroyConfig,
} from '.'

describe('Config', () => {
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

	it('Should throw unexpected error', () => {
		const mockInitConfig = vi
			.fn(configSchema.safeParse)
			.mockImplementation(() => {
				throw new Error('err msg')
			})

		try {
			mockInitConfig({}, {})

			assert(false, 'Should throw error by now')
		} catch (err) {
			if (err instanceof Error) {
				expect(err.message).toBe('err msg')
			} else {
				assert(false, 'Should throw Error')
			}
		}
	})
})
