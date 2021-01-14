import express, { json } from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from '@/graphql'
import dbConnect from '@/config/database'
import Errors from '@/middlewares/errorsHandler'

// setup
const app = express()
app.use(json())
app.use(Errors.serverError)
dbConnect()

// set graphql
app.use('/graphql', graphqlExpress({ schema }))
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }))

// start
app.listen(8000, () => {
  console.log('start Server...')
})
