require('dotenv').config()
import entityList from '@/entity'

let rootDir = process.env.NODE_ENV === 'dev' ? 'src' : 'dist'

let type = process.env.DB_DRIVER || 'mysql'
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
  entities: entityList, // schema時, アプリケーションとして参照(distから分かるもの)
  migrations: [`./${rootDir}/database/migrations/*`], // run時に参照するファイルを指定
  cli: {
    migrationsDir: `./${rootDir}/database/migrations`, // generate, runコマンド時に参照
  },
}
export default ormConfig
