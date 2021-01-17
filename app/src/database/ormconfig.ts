require('dotenv').config()
import entityList from '@/entity'

const rootDir = process.env.NODE_ENV === 'dev' ? 'src' : 'dist'

const ormConfig: any = {
  type: process.env.DB_DRIVER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  synchronize: false, // server起動時にmigration:generate
  migrationsRun: true, // server起動時にmigaration:run
  entities: entityList, // schema時, アプリケーションとして参照(distから分かるもの)
  migrations: [`./${rootDir}/database/migrations/*`], // run時に参照するファイルを指定
  cli: {
    migrationsDir: `./${rootDir}/database/migrations`, // generate, runコマンド時に参照
  },
}

export default ormConfig
