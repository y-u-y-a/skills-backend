import path from 'path'
import { gql } from 'apollo-server'
import { importSchema } from 'graphql-import'
// import { makeExecutableSchema } from 'graphql-tools'
//
import userQuery from '@/querys/userQuery'
import userMutation from '@/mutations/userMutation'

// Import schema files
const schemaPath = path.resolve(__dirname, '../schema/index.gql')
const typeDefs = gql(importSchema(schemaPath))

const resolvers = {
  Query: Object.assign(userQuery),
  Mutation: Object.assign(userMutation),
}

export default {
  typeDefs,
  resolvers,
}
