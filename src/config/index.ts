import { z } from 'zod'
import { ConfigError } from '../errors'

export const configSchema = z.object({
	nodeEnv: z.enum(['production', 'test', 'development']),
	logLevel: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
})

export let config: z.infer<typeof configSchema>

export const init = () => {
	if (config) {
		return
	}

	const validationResult = configSchema.safeParse({
		nodeEnv: process.env.NODE_ENV,
		logLevel: process.env.LOG_LEVEL,
	})

	if (!validationResult.success) {
		throw new ConfigError(validationResult.error.issues, 'Invalid config')
	}

	config = validationResult.data
}

export const destroy = () => {
	// @ts-ignore
	config = undefined
}
