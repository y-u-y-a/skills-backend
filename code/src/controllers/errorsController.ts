import { ErrorRequestHandler } from 'express'

class errorsController {
  // メソッド
  serverError: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message })
  }
}
export default errorsController
