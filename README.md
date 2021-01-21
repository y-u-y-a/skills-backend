# Skills
ブラウザ上でスキルシートを作成できるアプリのAPI

## 使用技術
- TypeScript
- Node.js
- typeORM
- GraphQL
- Terraform
- Docker
### 補足
- TypeORMを使用しているため、TypeScriptのトランスパイルにはwebpackを使用

## local環境
### VSCodeの設定
- prettierとeslintをインストール
- prettierの設定は`.prettierrc`を参照
- eslintの設定は`.eslintrc`を参照
### DB設定
- .env.sampleに設定を記述してあるので参照
- dockerのmysqlを構築する場合(mysqlサービスのみを指定)
```sh
$ docker-compose up -d mysql
```
### サーバー起動
```sh
$ yarn install
$ yarn dev
```
### マイグレーション
```sh
# 作成
yarn migrate:run
# 実行
$ yarn migrate:up
# リセット
yarn migrate:down
```

## dev環境: Heroku
### 初期デプロイ
```sh
$ cd terraform/heroku
$ teraform plan
$ terraform apply
```
#### 初期デプロイ時に実行されること
- package.json内の`build`->`start`を自動実行
- distディレクトリをnodeで起動
- migrate:runをts-nodeで実行

### 削除
```sh
$ cd terraform/heroku
$ terraform destroy
```

## stg/prod環境: AWS
