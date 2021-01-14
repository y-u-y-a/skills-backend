import { getConnectionOptions, createConnection } from 'typeorm'

export const dbConnect = async () => {
  const ormConfig = await getConnectionOptions()
  await createConnection(ormConfig)
}
export default dbConnect
