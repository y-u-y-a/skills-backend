import User from '@/entity/user'

const setParams = (input: any) => {
  return {
    email: input.email,
    password: input.password,
    firstname: input.firstname,
    lastname: input.lastname,
    gender: input.gender,
    birthday: input.birthday,
    nearStation: input.nearStation,
    profile: input.profile,
  }
}

const setPayload = (user: any) => {
  return {
    user,
  }
}

export default {
  async createUser(_: any, req: any) {
    const params = setParams(req.input)
    let user: any = User.getRepository()
    user = user.save(params)
    return setPayload(user)
  },
  async updateUser(_: any, req: any) {
    const params = setParams(req.input)
    await User.update(req.input.id, params)
  },
  async deleteUser(_: any, req: any) {
    await User.delete(req.input.id)
  },
}
