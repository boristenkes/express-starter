import z from 'zod'

export const envSchema = z.object({
	DATABASE_URL: z.url(),

	NODE_ENV: z
		.enum(['development', 'production', 'test'])
		.default('development'),
	PORT: z.coerce.number().default(3000),
	CORS_ORIGIN: z.url().default('http://localhost:3000')
})

export const env = envSchema.parse(process.env)
