import { createConnection } from 'typeorm'
import ormConfig from '@/config/ormconfig'

export class DB {
  connect = async () => {
    await createConnection(ormConfig)
  }
}
export default new DB()
