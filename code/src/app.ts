import express from 'express'
import { json } from 'body-parser'
import { graphqlHTTP } from 'express-graphql'
import taskRoutes from '@routes/tasks'
import { errorsController } from '@controllers/errorsController'
import schema from '@config/schema'
// import { dbConnect } from '@config/database'

const err = new errorsController()
const app = express()

// to json
app.use(json())
// set routes
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
app.use('/tasks', taskRoutes)
app.use(err.serverError)

// dbConnect()
app.listen(4000)
