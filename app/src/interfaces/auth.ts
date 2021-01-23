import User from '@/entity/user'

export type Authenticate = {
  (authToken: string | null): Promise<{ user: User | null }>
}

export type CreateToken = {
  (user: User): string
}
/**
 * @param password input password
 * @return Hashed passwored
 */
export type Encrypt = {
  (password: string): string
}
