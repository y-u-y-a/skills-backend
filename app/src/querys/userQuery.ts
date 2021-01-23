import User from '@/entity/user'
import * as T from '@/interfaces/user'

//
const getUser: T.GetUser = async (_, req) => {
  const user = await User.findOne(req.id)
  return user ? user : null
}
//
const getAllUser: T.GetAllUser = async () => {
  const users = await User.find()
  return users
}

export default {
  getUser,
  getAllUser,
}
