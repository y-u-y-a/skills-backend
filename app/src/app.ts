// import express, { urlencoded, json } from 'express'
import { createConnection } from 'typeorm'
import ormConfig from '@/database/ormconfig'
import server from '@/graphql'
// import {serverError} from '@/middlewares/errorsHandler'

// start(apollo-server-express)
// const app = express()
// app.use(urlencoded({ extended: true }))
// app.use(json())
// app.use(Errors.serverError)
// server.applyMiddleware({ app })
// app.listen(8000, () => {
//   console.log('start Server...')
// })

// start(apollo-server)
server.listen(process.env.PORT || 8000).then(async ({ url }) => {
  console.log('NODE_ENV', process.env.NODE_ENV)
  await createConnection(ormConfig)
    .then(() => {
      console.log('DB接続成功！')
      console.log('start Server...', url)
    })
    .catch((err) => {
      console.log('DB接続失敗...')
      console.log(err)
    })
})
