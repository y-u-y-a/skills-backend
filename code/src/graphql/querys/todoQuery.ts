import fakeDatabase from '@/config/fakeDatabase'

export default {
  todos: async (_: any) => {
    return fakeDatabase
  },
  todo: async (_: any, req: any) => {
    return 'todo'
  },
}
