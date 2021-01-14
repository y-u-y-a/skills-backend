import User from '@/entity/user'

export default {
  // 一覧取得
  async index(_: any) {
    const users = await User.find()
    return users
  },
  // 1件取得
  async find(_: any, req: any) {
    const user = await User.findOne(req.id)
    return user
  },
}
