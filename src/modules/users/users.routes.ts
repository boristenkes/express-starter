import { asyncHandler } from '@/lib/async-handler'
import { Router } from 'express'
import { validate } from '../../middlewares/validate.middleware'
import { createUserHandler } from './users.controllers'
import { createUserSchema } from './users.schemas'

export const usersRouter = Router()

usersRouter.post(
	'/',
	validate(createUserSchema),
	asyncHandler(createUserHandler)
)
