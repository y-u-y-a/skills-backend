import { ErrorRequestHandler } from 'express'

export class errorsController {
  // メソッド
  serverError: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message })
  }
}
