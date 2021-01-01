import express, { ErrorRequestHandler } from 'express'
import { json } from 'body-parser'
import DBConnect from '@config/database'
import taskRoutes from '@routes/tasks'

// error handling
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ message: err.message })
}

DBConnect()
const app = express()

// to json
app.use(json())
// set routes
app.use('/tasks', taskRoutes)
// set error handler
app.use(errorHandler)
app.listen(4000)
