// import fakeDatabase from '@/config/fakeDatabase'
import Task from '@/entity/task'

export default {
  tasks: async (_: any) => {
    const allTasks = await Task.find()
    return allTasks
    // return fakeDatabase
  },
  task: async (_: any, req: any) => {
    return 'task'
  },
}
