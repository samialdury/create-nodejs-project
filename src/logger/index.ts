import pino, { Logger } from 'pino'
import { config } from '../config'

export let logger: Logger

export const init = ({ name }: { name: string }) => {
	if (logger) {
		return
	}

	logger = pino({
		name,
		level: config.logLevel,
	})

	logger.useLevelLabels = true
}

export const destroy = () => {
	// @ts-ignore
	logger = undefined
}
