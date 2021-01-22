import jwt, { SignOptions } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '@/entity/user'
import * as T from '@/types/user'

const secret = 'this_is_secret_key'

/**
 * Tokenを生成した際のpayloadを復元
 * 2回目以降に使用(ブラウザに保存したtokenと'secret'が必要)
 * @param authorization_token authorization in request headers
 */
export const authenticate = async (authToken: T.InputToken): Promise<T.FindPayload> => {
  const res: T.FindPayload = { user: undefined }
  //
  if (authToken) {
    const decoded: any = jwt.verify(authToken, secret)
    const params = { email: decoded.email }
    const user: User | undefined = await User.findOne(params)
    // 存在した場合passwordチェック
    res.user = user && user.password === decoded.password ? user : undefined
  }
  return res
}
/**
 * @param User
 * @return token
 */
export const createToken = (user: User): string => {
  const payload = { email: user.email, password: user.password }
  const options: SignOptions = { algorithm: 'HS256', expiresIn: '3days' }
  const token = jwt.sign(payload, secret, options)
  return token
}
/**
 * @param password input password
 * @return Hashed passwored
 */
export const encrypt = (password: string): string => {
  const hashedPassword = bcrypt.hashSync(password, 10)
  return hashedPassword
}
