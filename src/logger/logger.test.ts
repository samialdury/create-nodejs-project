import { Logger } from 'pino'
import { logger, init as initLogger, destroy as destroyLogger } from '.'

describe('Logger', () => {
	afterEach(() => {
		destroyLogger()
	})

	it('Should initialize logger', () => {
		vi.mock('../config', () => {
			return {
				config: {
					logLevel: 'info',
				},
			}
		})

		initLogger({ name: 'test-name' })

		expect(logger).toBeDefined()
		expectTypeOf(logger).toEqualTypeOf<Logger>()
	})

	it('Should do nothing if initialized twice', () => {
		vi.mock('../config', () => {
			return {
				config: {
					logLevel: 'info',
				},
			}
		})

		initLogger({ name: 'test-name' })
		initLogger({ name: 'test-name' })

		expect(logger).toBeDefined()
		expectTypeOf(logger).toEqualTypeOf<Logger>()
	})
})
