import User from '@/entity/user'

export default {
  // 一覧取得
  async users(_: any) {
    const users = await User.find()
    return users
  },
  // 1件取得
  async user(_: any, req: any) {
    const user = await User.findOne(req.id)
    return user
  },
}
