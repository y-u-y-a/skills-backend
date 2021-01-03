import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from '@/graphql'
// import taskRoutes from '@/routes/tasks'
import Errors from '@/controllers/errorsController'

const app = express()
app.use(bodyParser.json())
app.use(Errors.serverError)

// set graphql
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// set routes
// app.use('/tasks', taskRoutes)

app.listen(4000, () => {
  console.log('start Server...')
})
