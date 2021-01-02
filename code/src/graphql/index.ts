import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
// Query
import userQuery from '@querys/userQuery'
import taskQuery from '@querys/taskQuery'
import todoQuery from '@querys/todoQuery'
// Mutation
import userMutation from '@mutations/userMutation'

const absolutePath = path.resolve(__dirname, './schema.gql')
const typeDefs = importSchema(absolutePath)

const resolvers = {
  Query: Object.assign(userQuery, taskQuery, todoQuery),
  Mutation: Object.assign(userMutation),
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
