import { Request, Response } from 'express'
import { createUser } from './users.services'

export async function createUserHandler(req: Request, res: Response) {
	const user = await createUser(req.body)

	return res.status(201).json(user)
}
