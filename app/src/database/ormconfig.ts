import dotenv from 'dotenv'
import entityList from '@/entity'

dotenv.config()
// devはts-nodeでの実行を想定(src), productionはnodeでの実行を想定(dist)
const rootDir = process.env.NODE_ENV === 'production' ? 'dist' : 'src'

const type = process.env.DB_DRIVER || 'mysql'
let host = process.env.DB_HOST || '127.0.0.1'
let port = process.env.DB_PORT || '4306'
let username = process.env.DB_USERNAME || 'test'
let password = process.env.DB_PASSWORD || 'test'
let database = process.env.DB_NAME || 'skills'

// heroku(MySQL >= 5.6.5 が必要なためjawsdb:kitefinを使用)
if (process.env.JAWSDB_URL) {
  const splited = process.env.JAWSDB_URL.split(/\/\/|\?/)
  const params = splited[1].split(/:|@|\//)
  host = params[2]
  port = params[3]
  username = params[0]
  password = params[1]
  database = params[4]
}

const ormConfig: any = {
  type,
  host,
  port,
  username,
  password,
  database,
  logging: false,
  synchronize: false, // server起動時にgenerate
  migrationsRun: true, // server起動時にrun
  entities: entityList, // schema時, アプリケーションとして参照(distのentity参照)
  migrations: [`./${rootDir}/database/migrations/*`], // run時に参照
  cli: {
    migrationsDir: `./${rootDir}/database/migrations`, // gen, run時に参照
  },
}
console.log(process.env.NODE_ENV)
export default ormConfig
