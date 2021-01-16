// import express, { urlencoded, json } from 'express'
import { createConnection } from 'typeorm'
import ormConfig from '@/config/ormconfig'
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
  console.log(url)
  console.log('start Server...')
})
