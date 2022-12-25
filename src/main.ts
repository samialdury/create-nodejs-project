import { init as initConfig } from './config'
import { init as initLogger, logger } from './logger'

export const main = async () => {
	initConfig()

	initLogger({
		name: 'create-nodejs-project',
	})

	logger.info('Hello World!')
}

main()
