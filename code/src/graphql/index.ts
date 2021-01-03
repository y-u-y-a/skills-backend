import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

// Import schema files
const schemaPath = path.resolve(__dirname, './schema/index.gql')
const typeDefs = importSchema(schemaPath)

// Query
import userQuery from '@querys/userQuery'
import taskQuery from '@querys/taskQuery'
import todoQuery from '@querys/todoQuery'
// Mutation
import userMutation from '@mutations/userMutation'

const resolvers = {
  Query: Object.assign(userQuery, taskQuery, todoQuery),
  Mutation: Object.assign(userMutation),
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
