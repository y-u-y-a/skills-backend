import {
  encrypt,
  createToken,
  authenticate,
} from '@/middlewares/authentication'
import User from '@/entity/user'

class UserMutation {
  // create(signUp)
  async createUser(_: any, req: any) {
    const params = setParams(req.input)
    const user = User.create(params) // create instance
    let errors = await user.validate() // validate
    //
    if (errors) {
      return setErrorPayload(errors)
    }
    //
    user.password = encrypt(params.password) // encrypt password
    const token = createToken(user) // create token
    const createdUser = await user.save() // insert
    return { user: createdUser, token: token }
  }
  // login
  async login(_: any, req: any) {
    const payload = authenticate(req.headers.authentication)
    const user = await User.findOne({ email: payload.email })
    if (user && user.password === payload.password) {
      return { user }
    }
    return { user: null }
  }
}

// FIXME: classに含めたい
const setParams = (input: User) => {
  return {
    email: input.email,
    password: input.password,
    name: input.name,
  }
}
const setErrorPayload = (errors: any) => {
  const result: object[] = []
  errors.forEach((err: any) => {
    result.push({
      property: err.property,
      messages: Object.values(err.constraints),
    })
  })
  return { errors: result }
}

export default new UserMutation()
