import User from '@/entity/user'

const setParams = (req: any) => {
  return {
    firstname: req.firstname,
    lastname: req.lastname,
    email: req.email,
    password: req.password,
    gender: req.gender,
    birthday: req.birthday,
    nearStation: req.nearStation,
    profile: req.profile,
  }
}
export default {
  async insertUser(_: any, req: any) {
    const params = setParams(req)
    const userRepo = User.getRepository()
    return userRepo.save(params)
    // User.insert(params)
  },
  async updateUser(_: any, req: any) {
    const params = setParams(req)
    await User.update(req.id, params)
  },
  async deleteUser(_: any, req: any) {
    await User.delete(req.id)
  },
}

// class UserMutation {
//   async createUser(_: any, req: any) {
//     const params = setParams(req)
//     const userRepo = User.getRepository()
//     return userRepo.save(params)
//     // User.insert(params)
//   }
//   async updateUser(_: any, req: any) {
//     const params = setParams(req)
//     await User.update(req.id, params)
//   }
//   async deleteUser(_: any, req: any) {
//     await User.delete(req.id)
//   }
// }

// export default UserMutation
