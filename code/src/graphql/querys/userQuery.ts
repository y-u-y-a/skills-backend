import fakeDatabase from '@/config/fakeDatabase'

export default {
  users: async (_: any) => {
    return fakeDatabase
  },
  user: async (_: any, req: any) => {
    return fakeDatabase[req.id]
  },
}
