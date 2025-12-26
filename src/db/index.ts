import { env } from '@/config/env'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './schema'

export const db = drizzle({
	connection: {
		connectionString: env.DATABASE_URL,
		ssl: env.NODE_ENV === 'production'
	},
	casing: 'snake_case',
	schema
})
