import { encrypt, createToken } from '@/middlewares/authentication'
import User from '@/entity/user'
import * as T from '@/interfaces/user'
import { validateErrorPayload } from '@/middlewares/errorsHandler'

const login: T.Login = (_, req, loginUser) => {
  return { user: loginUser }
}
// TODO: logout
const createUser: T.CreateUser = async (_, req) => {
  //
  const params = setParams(req.input)
  let user = User.create(params) // create instance
  const errors = await user.validate()
  //
  if (errors) {
    return setPayload(null, null, errors)
  } else {
    user.password = encrypt(params.password)
    user = await user.save()
    const token = createToken(user)
    return setPayload(user, token, null)
  }
}
// TODO: update
// TODO: delete

export default {
  login,
  createUser,
}

// #################################
// private
// #################################
const setParams = (input: User) => {
  return {
    email: input.email,
    password: input.password,
    name: input.name,
  }
}
//
const setPayload = (user: User | null, token: string | null, errors: any) => {
  if (errors) {
    errors = validateErrorPayload(errors)
  }
  return {
    user,
    token,
    errors,
  }
}
