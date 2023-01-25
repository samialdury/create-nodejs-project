import type { Logger } from 'pino'

import { config, destroyConfig, initConfig } from '../config'

import { logger, initLogger, destroyLogger } from '.'

describe('Logger', () => {
	beforeEach(() => {
		expect(config).toBeUndefined()
		expect(logger).toBeUndefined()

		initConfig()
	})

	afterEach(() => {
		destroyConfig()
		destroyLogger()
	})

	it('Should initialize logger', () => {
		initLogger({ name: 'test-name' })

		expect(logger).toBeDefined()
		expectTypeOf(logger).toEqualTypeOf<Logger>()
	})

	it('Should do nothing if initialized twice', () => {
		initLogger({ name: 'test-name' })
		initLogger({ name: 'test-name' })

		expect(logger).toBeDefined()
		expectTypeOf(logger).toEqualTypeOf<Logger>()
	})
})
