import { z } from 'zod'

import { ConfigError } from '../errors'

export const configSchema = z.object({
	nodeEnv: z.enum(['production', 'test', 'development']),
	logLevel: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
})

export let config: z.infer<typeof configSchema>

const validateAndClone = <T extends z.ZodObject<z.ZodRawShape>>(
	schema: T,
	values: Record<keyof z.infer<typeof schema>, unknown>
): z.infer<typeof schema> => {
	const validationResult = schema.safeParse(values)

	if (!validationResult.success) {
		// eslint-disable-next-line no-console
		console.error(validationResult.error.issues)
		throw new ConfigError(validationResult.error.issues, 'Invalid config')
	}

	return validationResult.data
}

export const init = (): void => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (config) {
		return
	}

	config = validateAndClone(configSchema, {
		nodeEnv: process.env['NODE_ENV'],
		logLevel: process.env['LOG_LEVEL'],
	})
}

export const destroy = (): void => {
	// @ts-expect-error For test teardown
	config = undefined
}
