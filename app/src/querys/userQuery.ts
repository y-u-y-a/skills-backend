import User from '@/entity/user'
import * as T from '@/interfaces/user'

const allUser: T.AllUser = async () => {
  const users = await User.find()
  return users
}

const findUser: T.FindUser = async (_, req) => {
  const user = await User.findOne(req.id)
  return user ? user : null
}

export default {
  allUser,
  findUser,
}
