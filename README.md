# Skills

## DB設定
- .env.sampleに設定を記述してあるので参照
- dockerのmysqlを構築する場合(mysqlサービスのみを指定)
```sh
$ docker-compose up -d mysql
```

## dev環境
### サーバー起動
```sh
$ yarn install
$ yarn dev
```
### マイグレーション実行
```
$ yarn migrate:up
```
