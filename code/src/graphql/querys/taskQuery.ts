import Task from '@/entity/task'

export default {
  // 一覧取得
  tasks: async (_: any) => {
    const allTasks = await Task.find()
    return allTasks
  },
  // 1件取得
  task: async (_: any, req: any) => {
    return 'task'
  },
}
