import Task from '@/entity/task'

export default {
  createTask: async (_: any, req: any) => {
    const params = { title: req.title }
    const taskRepo = Task.getRepository()
    return taskRepo.save(params)
    // Task.insert(params)
  },
  updateTask: async (_: any, req: any) => {
    const params = { title: req.title }
    await Task.update(req.id, params)
  },
  deleteTask: async (_: any, req: any) => {
    await Task.delete(req.id)
  },
}
