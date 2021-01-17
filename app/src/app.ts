// import express, { urlencoded, json } from 'express'
import { createConnection } from 'typeorm'
import ormConfig from '@/database/ormconfig'
import server from '@/graphql'
// import Errors from '@/middlewares/errorsHandler'

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
  await createConnection(ormConfig)
    .then((res) => {
      console.log('DB接続成功！')
      console.log('url', url)
      console.log('start Server...')
    })
    .catch((err) => {
      console.log('DB接続失敗...')
    })
})
