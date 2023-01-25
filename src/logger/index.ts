import pino from 'pino'

import { config } from '../config'

export let logger: pino.Logger

export const initLogger = ({ name }: { name: string }): void => {
	logger ??= pino({
		name,
		level: config.logLevel,
	})

	logger.useLevelLabels = true

	logger.debug('Logger initialized')
}

export const destroyLogger = (): void => {
	logger.debug('Logger instance destroyed')

	// @ts-expect-error For test teardown
	logger = undefined
}
