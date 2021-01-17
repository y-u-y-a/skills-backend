# Skills

## DB設定
- .env.sampleに設定を記述してあるので参照
- dockerのmysqlを構築する場合(mysqlサービスのみを指定)
```sh
$ docker-compose up -d mysql
```

## local環境
### サーバー起動
```sh
$ yarn install
$ yarn dev
```
### マイグレーション実行
```
$ yarn migrate:up
```

## dev環境(heroku)
### 初期デプロイ
```sh
$ cd terraform/heroku
$ teraform plan
$ terraform apply
```
- package.json内の`build`->`start`を自動実行
- distjディレクトリをnodeで起動
- migrate:runはts-nodeで実行？

### 削除
```sh
$ cd terraform/heroku
$ terraform destroy
```
