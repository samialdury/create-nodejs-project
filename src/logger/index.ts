import pino from 'pino'

import { config } from '../config'

export let logger: pino.Logger

export const init = ({ name }: { name: string }): void => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (logger) {
		return
	}

	logger = pino({
		name,
		level: config.logLevel,
	})

	logger.useLevelLabels = true
}

export const destroy = (): void => {
	// @ts-expect-error For test teardown
	logger = undefined
}
