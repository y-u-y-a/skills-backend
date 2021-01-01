import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'
import fakeDatabase from './dummyData'

const Arguments = {
  id: { type: GraphQLID },
}
// resolver
const getUser = (_: null, { id }: any) => {
  return fakeDatabase[id]
}

// Type
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'ユーザー情報',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
})

// Query
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // query name
    user: {
      type: UserType,
      args: Arguments,
      resolve: getUser,
    },
  },
})

// schema
const schema = new GraphQLSchema({
  query: queryType,
})
export default schema
