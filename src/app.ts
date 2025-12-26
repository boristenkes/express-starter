import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { env } from './config/env'
import { errorMiddleware } from './middlewares/error.middleware'
import { notFoundMiddleware } from './middlewares/not-found.middleware'
import { usersRouter } from './modules/users/users.routes'

export const app = express()

app.use(helmet())
app.use(express.json({ limit: '10kb' }))
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }))

app.use(
	rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 100
	})
)

app.get('/health', (_req, res) => {
	res.json({ status: 'ok' })
})

app.use('/api/users', usersRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)
