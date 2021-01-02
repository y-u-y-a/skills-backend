import fakeDatabase from '@/config/fakeDatabase'

export default {
  tasks: async (_: any) => {
    return fakeDatabase
  },
  task: async (_: any, req: any) => {
    return 'task'
  },
}
