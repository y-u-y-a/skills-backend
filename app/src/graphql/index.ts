import path from 'path'
import { ApolloServer, gql } from 'apollo-server'
import { importSchema } from 'graphql-import'
//
import { authenticate } from '@/middlewares/authentication'
//
import userQuery from '@/querys/userQuery'
import userMutation from '@/mutations/userMutation'

// Import schema files
const schemaPath = path.resolve(__dirname, '../schema/index.gql')
const typeDefs = gql(importSchema(schemaPath))

// Data access
const resolvers = {
  Query: Object.assign(userQuery),
  Mutation: Object.assign(userMutation),
}

// GraphQL Serverの前に実行する処理(戻り値はQuery, Mutationの第3引数)
const context = ({ req }: any) => {
  const user = authenticate(req.headers.authentication)
  return user
}

// apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

export default server
