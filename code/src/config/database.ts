import { createConnection } from 'promise-mysql'

export const config = {
  host: 'localhost',
  port: 4306,
  user: 'test',
  password: 'test',
  database: 'skills',
  multipleStatements: true, // 複数の命令文実行
}

const dbConnect = async () => {
  // 接続処理
  await createConnection(config)
    .then((conn) => {
      const result = conn.query('SELECT * FROM users')
      conn.end()
      return result
    })
    // クエリ結果取得
    .then((rows) => {
      console.log(rows)
    })
}
export default dbConnect
