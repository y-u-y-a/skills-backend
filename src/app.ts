import express, { urlencoded, json } from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from '@/graphql'
import DB from '@/config/database'
import Errors from '@/middlewares/errorsHandler'

// setup
const app = express()
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(Errors.serverError)
DB.connect()

// set graphql
app.use('/graphql', graphqlExpress({ schema }))
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }))

// start
app.listen(8000, () => {
  console.log('start Server...')
})
