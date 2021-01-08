import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from '@/graphql'
import dbConnect from '@/config/database'
import Errors from '@/libs/Errors'

// setup
const app = express()
app.use(bodyParser.json())
app.use(Errors.serverError)
dbConnect()

// set graphql
app.use('/graphql', graphqlExpress({ schema }))
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }))

// start
app.listen(8000, () => {
  console.log('start Server...')
})
