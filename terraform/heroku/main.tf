provider "heroku" {
  email = var.heroku_email
  api_key = var.heroku_api_key
}

// app
resource "heroku_app" "main" {
  region = "us"
  name = var.app_name
}

// build(デプロイ対象のディレクトリを指定)
resource "heroku_build" "main" {
  app = heroku_app.main.id
  source = {
    path = "../../app"
  }
}
