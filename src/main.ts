import { initConfig } from './config'
import { initLogger, logger } from './logger'

export const main = (): void => {
	initConfig()

	initLogger({
		name: 'create-nodejs-project',
	})

	logger.info('Hello World!')
}

main()
