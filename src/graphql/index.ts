import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
// Query
import userQuery from '@/querys/userQuery'
// Mutation
import userMutation from '@/mutations/userMutation'

// Import schema files
const schemaPath = path.resolve(__dirname, '../schema/index.gql')
const typeDefs = importSchema(schemaPath)

const resolvers = {
  Query: Object.assign(userQuery),
  Mutation: Object.assign(userMutation)
}

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
