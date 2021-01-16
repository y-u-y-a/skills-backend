import 'graphql-import-node'
import { ApolloServer } from 'apollo-server'
//
import { authenticate } from '@/middlewares/authentication'
//
import typeDefs from '@/schema/index.gql'
import userQuery from '@/querys/userQuery'
import userMutation from '@/mutations/userMutation'

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
  introspection: true, // prod環境でも起動させるため
  playground: true,
})

export default server
