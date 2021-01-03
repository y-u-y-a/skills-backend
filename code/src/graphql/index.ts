import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

// Import schema files
const schemaPath = path.resolve(__dirname, './schema/index.gql')
const typeDefs = importSchema(schemaPath)

// Query
import userQuery from '@querys/userQuery'
import taskQuery from '@querys/taskQuery'
// Mutation
import userMutation from '@mutations/userMutation'
import taskMutation from '@mutations/taskMutation'

const resolvers = {
  Query: Object.assign(userQuery, taskQuery),
  Mutation: Object.assign(userMutation, taskMutation),
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
