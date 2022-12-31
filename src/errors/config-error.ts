import type { z } from 'zod'

import { BaseError } from './base-error'

export class ConfigError extends BaseError {
	public issues: z.ZodIssue[]

	constructor(issues: z.ZodIssue[], message: string, isOperational = false) {
		super(message, isOperational)

		this.issues = issues
	}
}
