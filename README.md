# Skills

ブラウザ上でスキルシートを作成できるアプリの API

### フロントリポジトリ：https://github.com/y-u-y-a/skills_frontend

## GraphQL playglound: dev 環境

https://skills-api-dev.herokuapp.com/

## 仕様技術

- TypeScript
- Node.js
- typeORM
- GraphQL
- Terraform
- Docker
- MySQL

### 補足

- TypeORM を使用しているため、TypeScript のトランスパイルには webpack を使用

## local 環境

### VSCode の設定

- prettier と eslint をインストール
- prettier の設定は`.prettierrc`を参照
- eslint の設定は`.eslintrc`を参照

### DB 設定

- .env.sample に設定を記述してあるので参照
- docker の mysql を構築する場合(mysql サービスのみを指定)

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
yarn migrate:gen
# 実行
$ yarn migrate:run
# DBリセット
yarn migrate:down
```

## dev 環境: Heroku

### 初期デプロイ

```sh
$ cd terraform/heroku
$ teraform plan
$ terraform apply
```

#### 初期デプロイ時に実行されること

- package.json 内の`build`->`start`を自動実行(heroku の仕様)
- migrate:run を ts-node で実行(ormconfig の migrationsRun)

### 削除

```sh
$ cd terraform/heroku
$ terraform destroy
```

## production 環境: AWS

- node コマンドにおける NODE_ENV のデフォルトは`pruduction`
