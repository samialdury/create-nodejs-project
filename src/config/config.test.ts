import { ConfigError } from '../errors'

import { config, initConfig, destroyConfig } from '.'

describe('Config', () => {
	beforeEach(() => {
		expect(config).toBeUndefined()
	})

	afterEach(() => {
		destroyConfig()
	})

	it('Should initialize config', () => {
		initConfig()

		expect(config).toBeDefined()
	})

	it('Should do nothing if initialized twice', () => {
		initConfig()
		initConfig()

		expect(config).toBeDefined()
	})

	it('Should throw validation error', () => {
		vi.stubEnv('LOG_LEVEL', '')
		const mockErrorFn = vi.fn().mockReturnValue(() => null)

		const mockConsole = {
			error: mockErrorFn,
		}

		vi.stubGlobal('console', mockConsole)

		try {
			initConfig()

			assert(false, 'Should throw error by now')
		} catch (err) {
			if (err instanceof ConfigError) {
				expect(mockErrorFn).toHaveBeenCalledOnce()

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
