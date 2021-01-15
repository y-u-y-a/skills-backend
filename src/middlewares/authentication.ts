import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '@/entity/user'

const secret = 'this_is_secret_key'

/**
 * Tokenを生成した際のpayloadを復元
 * 2回目以降に使用(ブラウザに保存したtokenと'secret'が必要)
 * @param authorization_token authorization in request headers
 */
export const authenticate = async (authToken: any) => {
  if (authToken) {
    try {
      const decoded: any = jwt.verify(authToken, secret)
      let user = await User.findOne({ email: decoded.email })
      if (user && user.password !== decoded.password) {
        user = undefined
      }
      return user
    } catch (err) {
      return err
    }
  }
}
/**
 * @param User
 * @return token
 */
export const createToken = (user: User): string => {
  const payload = { email: user.email, password: user.password }
  const options: {} = { algorithm: 'HS256', expiresIn: '3days' }
  const token = jwt.sign(payload, secret, options)
  return token
}
/**
 * @param password input password
 * @return Hashed passwored
 */
export const encrypt = (password: string) => {
  const hashedPassword = bcrypt.hashSync(password, 10)
  return hashedPassword
}
