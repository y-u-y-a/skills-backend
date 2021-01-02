import fakeDatabase from '@/config/fakeDatabase'

const resolvers = {
  users: async (_: any) => {
    return fakeDatabase
  },
  user: async ({ id }: any, context: any) => {
    return fakeDatabase[id]
  },
}

export default resolvers
