import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import querys from '@/graphql/querys'
import mutations from '@/graphql/mutations'

const typeDefs = importSchema(path.resolve(__dirname, './schema.gql'))
const resolvers = {
  Query: querys,
  Mutation: mutations,
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
