import { app } from './app'
import { env } from './config/env'

const server = app.listen(env.PORT, () => {
	console.info(`Server running on port ${env.PORT}`)
})

const shutdown = (signal: string) => {
	console.warn({ signal }, 'Shutting down...')
	server.close(() => process.exit(0))
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
