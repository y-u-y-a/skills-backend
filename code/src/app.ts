import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from '@/graphql'
import taskRoutes from '@/routes/tasks'
import errorsController from '@/controllers/errorsController'

const err = new errorsController()
const app = express()
app.use(bodyParser.json())

// set graphql
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// set routes
app.use('/tasks', taskRoutes)
app.use(err.serverError)

app.listen(4000, () => {
  console.log('start Server...')
})
