import User from '@/entity/user'

// querys
export type AllUser = {
  (): Promise<User[]>
}
//
export type FindUser = {
  (_: unknown, req: { id: number }): Promise<User | null>
}
// mutations
export type Login = {
  (_: unknown, req: any, loginUser: User | null): { user: User | null }
}
//
export type CreateUser = {
  (_: unknown, req: { input: User }): Promise<{
    user: User | null
    token: string | null
    errors: any
  }>
}
