import jwt, { SignOptions } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '@/entity/user'
import * as T from '@/interfaces/auth'

const secret = 'this_is_secret_key'

/**
 * Tokenを生成した際のpayloadを復元
 * 2回目以降に使用(ブラウザに保存したtokenと'secret'が必要)
 * @param authorization_token authorization in request headers
 */
export const authenticate: T.Authenticate = async (authToken) => {
  const result: { user: User | null } = { user: null }
  //
  if (authToken) {
    const decoded: any = jwt.verify(authToken, secret)
    const params = { email: decoded.email }
    const user = await User.findOne(params)
    // 存在した場合passwordチェック
    result.user = user && user.password === decoded.password ? user : null
  }
  return result
}
/**
 * @param User
 * @return token
 */
export const createToken: T.CreateToken = (user) => {
  const payload = { email: user.email, password: user.password }
  const options: SignOptions = { algorithm: 'HS256', expiresIn: '3days' }
  const token = jwt.sign(payload, secret, options)
  return token
}
/**
 * @param password input password
 * @return Hashed passwored
 */
export const encrypt: T.Encrypt = (password) => {
  const hashedPassword = bcrypt.hashSync(password, 10)
  return hashedPassword
}
