import path from 'path'
import { importSchema } from 'graphql-import'
import { buildSchema } from 'graphql'

const schemaPath = path.resolve(__dirname, '../graphql/schema.graphql')
const graphql = importSchema(schemaPath)

export default buildSchema(graphql)
