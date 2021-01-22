import User from '@/entity/user'
import * as T from '@/types/user'

export default {
  // 全件取得
  async allUser(): Promise<User[]> {
    const users = await User.find()
    return users
  },
  // 1件取得
  async findUser(req: { id: number }): Promise<T.FindPayload> {
    const user = await User.findOne(req.id)
    return { user }
  },
}
