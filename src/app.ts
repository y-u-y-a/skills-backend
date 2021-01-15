import express, { urlencoded, json } from 'express'
import { ApolloServer } from 'apollo-server'

import schema from '@/graphql'
import DB from '@/config/database'
import Errors from '@/middlewares/errorsHandler'

// setup
const server = new ApolloServer(schema)
// const app = express()
// app.use(urlencoded({ extended: true }))
// app.use(json())
// app.use(Errors.serverError)
// server.applyMiddleware({ app })
DB.connect()

// start
server.listen(8000).then(({ url }) => {
  console.log(url)
  console.log('start Server...')
})
