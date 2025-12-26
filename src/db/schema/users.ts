import {
	pgTable,
	serial,
	text,
	timestamp,
	uniqueIndex
} from 'drizzle-orm/pg-core'

export const users = pgTable(
	'users',
	{
		id: serial().primaryKey(),
		name: text().notNull(),
		email: text().notNull().unique(),
		createdAt: timestamp({ withTimezone: true }).notNull().defaultNow()
	},
	t => [uniqueIndex('users_email_uidx').on(t.email)]
)

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
