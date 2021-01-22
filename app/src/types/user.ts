import User from '@/entity/user'

// input
export type InputUser = User | null
export type InputToken = string | null

// payload
export type FindPayload = {
  user: User | undefined
}
export type CreatePayload = {
  user: InputUser
  token: InputToken
  errors: any
}
export type LoginPayload = {
  user: InputUser
}
