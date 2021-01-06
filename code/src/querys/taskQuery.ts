import Task from '@/entity/task'

export default {
  // 一覧取得
  tasks: async (_: any) => {
    const tasks = await Task.find()
    return tasks
  },
  // 1件取得
  task: async (_: any, req: any) => {
    const task = await Task.findOne(req.id)
    return task
  },
}
