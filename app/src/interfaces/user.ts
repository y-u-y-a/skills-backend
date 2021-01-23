import User from '@/entity/user'

// Query
export type GetUser = {
  (_: unknown, req: { id: number }): Promise<User | null>
}
//
export type GetAllUser = {
  (): Promise<User[]>
}

// Mutation
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
//
export type UpdateUser = {
  (_: unknown, req: { input: User }): Promise<{ beforeUser: User | null; afterUser: User | null }>
}
//
export type DeleteUser = {
  (_: unknown, req: { id: number }): Promise<{ result: boolean }>
}
