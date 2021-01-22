import { ErrorRequestHandler } from 'express'

export const serverError: ErrorRequestHandler = (err, req, res) => {
  res.status(500).json({ message: err.message })
}
//
export const validateErrorPayload = (errors: any) => {
  const result: any = []
  errors.forEach((err: any) => {
    result.push({
      property: err.property,
      messages: Object.values(err.constraints),
    })
  })
  return result
}
