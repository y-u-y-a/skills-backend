// import { RequestHandler } from 'express'
// import Task from '@/entity/task'

// // メモリ上の変数
// const Tasks: Task[] = []

// // get
// export const getTasks: RequestHandler = (req, res, next) => {
//   res.json({ tasks: Tasks })
// }

// // post
// export const createTask: RequestHandler = (req, res, next) => {
//   const text = (req.body as { text: string }).text
//   const newTask = new Task(Math.random().toString(), text)
//   Tasks.push(newTask)
//   res
//     .status(201)
//     .json({ message: 'Taskを作成しました。', createdTask: newTask })
// }

// // patch
// export const updateTask: RequestHandler<{ id: string }> = (req, res, next) => {
//   const taskId = req.params.id
//   const updateText = (req.body as { text: string }).text
//   const index = Tasks.findIndex((task) => task.id === taskId)

//   if (index < 0) {
//     throw new Error('対象のTASKが見つかりませんでした。')
//   }
//   Tasks[index] = new Task(taskId, updateText)
//   res.json({ message: '更新しました。', updatedTask: Tasks[index] })
// }

// // delete
// export const deleteTask: RequestHandler<{ id: string }> = (req, res, next) => {
//   const taskId = req.params.id
//   const index = Tasks.findIndex((task) => task.id === taskId)

//   if (index < 0) {
//     throw new Error('対象のTASKが見つかりませんでした。')
//   }
//   const deletedTask = Tasks.splice(index, 1)
//   res.json({ message: '削除しました。', deletedTask: deletedTask })
// }
