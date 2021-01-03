// import { getRepository } from 'typeorm'
import Task from '@/entity/task'

export default {
  createTask: async (_: any, req: any) => {
    const tasks = new Task()
    tasks.title = req.title
    const result = await tasks.save()
    return result
  },
  updateTask: async (_: any, req: any) => {
    const updateColumns = { title: req.title }
    await Task.update(req.id, updateColumns)
  },
  deleteTask: async (_: any, req: any) => {
    await Task.delete(req.id)
    // const task = getRepository(Task)
    // task.delete({ id: req.id })
  },
}
