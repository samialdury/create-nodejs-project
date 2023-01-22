import pino from 'pino'

import { config } from '../config'

export let logger: pino.Logger

export const init = ({ name }: { name: string }): void => {
	logger ??= pino({
		name,
		level: config.logLevel,
	})

	logger.useLevelLabels = true

	logger.debug('Logger initialized')
}

export const destroy = (): void => {
	logger.debug('Logger instance destroyed')

	// @ts-expect-error For test teardown
	logger = undefined
}
