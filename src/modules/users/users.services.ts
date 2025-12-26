import { db } from '@/db'
import { users } from '@/db/schema'
import { CreateUserSchema } from './users.schemas'

export async function createUser(data: CreateUserSchema['body']) {
	const [newUser] = await db.insert(users).values(data).returning()

	return newUser
}
