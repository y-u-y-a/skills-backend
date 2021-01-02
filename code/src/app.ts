import express from 'express'
import { json } from 'body-parser'
import { graphqlHTTP } from 'express-graphql'
import schema from '@/graphql/schema'
import resolvers from '@/graphql/resolvers'
import taskRoutes from '@/routes/tasks'
import errorsController from '@/controllers/errorsController'
// import { dbConnect } from '@/config/database'

const err = new errorsController()
const app = express()
// set methods
app.use(json())

// set graphql
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: resolvers,
  })
)

// set routes
app.use('/tasks', taskRoutes)
app.use(err.serverError)

// dbConnect()
app.listen(4000)
