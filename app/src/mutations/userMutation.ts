import { encrypt, createToken } from '@/middlewares/authentication'
import User from '@/entity/user'
import * as T from '@/types/user'
import { validateErrorPayload } from '@/middlewares/errorsHandler'

export default {
  // login
  async login(req: any, loginUser: T.InputUser): Promise<T.LoginPayload> {
    return { user: loginUser }
  },
  // TODO: logout
  // signUp
  async createUser(_: unknown, req: { input: User }): Promise<T.CreatePayload> {
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
  },
  // TODO: update
  // TODO: delete
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
const setPayload = (user: T.InputUser, token: T.InputToken, errors: any) => {
  if (errors) {
    errors = validateErrorPayload(errors)
  }
  return {
    user,
    token,
    errors,
  }
}
