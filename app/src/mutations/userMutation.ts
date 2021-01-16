import { encrypt, createToken } from '@/middlewares/authentication'
import User from '@/entity/user'

const userMutation = {
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
  },
  // login
  async login(_: any, req: any, authUser: any) {
    return { user: authUser }
  },
}

export default userMutation

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
