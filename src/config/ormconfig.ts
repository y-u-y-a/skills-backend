require('dotenv').config()

const ormConfig: any = {
  type: process.env.DB_DRIVER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ['./src/entity/*.ts'],
  migrations: ['./src/migration/*.ts'],
  cli: {
    entitiesDir: './src/entity',
    migrationsDir: './src/migration',
  },
}

export default ormConfig
