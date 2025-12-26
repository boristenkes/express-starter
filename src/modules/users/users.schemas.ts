import { requiredString } from '@/utils/zod'
import { z } from 'zod'

export const createUserSchema = z.object({
	body: z.object({
		name: requiredString
			.min(2, { error: 'Min 2 characters' })
			.max(32, { error: 'Max 32 characters' }),
		email: z.email()
	})
})

export type CreateUserSchema = z.infer<typeof createUserSchema>
