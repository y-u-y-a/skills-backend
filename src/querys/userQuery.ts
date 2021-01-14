import User from '@/entity/user'

class UserQuery {
  // 全件取得
  async all(_: any) {
    const users = await User.find()
    return users
  }
  // 1件取得
  async find(_: any, req: any) {
    const user = await User.findOne(req.id)
    return user
  }
}
export default new UserQuery()
