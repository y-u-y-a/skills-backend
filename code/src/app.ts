import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import taskRoutes from '@/routes/tasks'

const app = express()

// to json
app.use(json())

// set routes
app.use('/tasks', taskRoutes)

// error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})
app.listen(4000)
