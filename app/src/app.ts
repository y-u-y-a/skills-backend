// import express, { urlencoded, json } from 'express'
import server from '@/graphql'
import DB from '@/config/database'
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
DB.connect()
server.listen(8000).then(({ url }) => {
  console.log(url)
  console.log('start Server...')
})
