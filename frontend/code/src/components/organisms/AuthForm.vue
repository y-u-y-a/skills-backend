<template>
  <div class="container row justify-content-center">
    <div class="auth-form">
      <header>
        <h2>{{ title }}</h2>
        <a v-if="title=='ログイン'" href="/auth/Register">新規登録はこちら</a>
        <a v-if="title=='新規登録'" href="/auth/Login">ログインはこちら</a>
      </header>
      <div v-if="title == '新規登録'" class="agreement">
        ※利用開始をもって
        <a href="#">利用規約</a>と
        <a href="#">プライバシーポリシー</a>に同意したものとみなします。
      </div>
      <slot name="sns"></slot><!-- slot -->
      <main class="column">
        <span style="margin-bottom:1rem;text-align:center;font-size:12px;">
          メールアドレスで{{ title }}する場合
        </span>
        <slot name="form"></slot><!-- slot -->
        <a href="#" class="mb-1">パスワードを忘れた方はこちら</a>
      </main>
      <footer v-if="title == 'ログイン'" class="agreement">
        ※利用開始をもって
        <a href="#">利用規約</a>と
        <a href="#">プライバシーポリシー</a>に同意したものとみなします。
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
  ]
}
</script>

<style lang="scss" scoped>
.auth-form {
  width: 320px;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  background: $white;
}
header {
  @include column;
  margin-bottom: 2rem;
  h2 {
    margin-bottom: 0.5rem;
    font-size: 20px;
    font-weight: bold;
  }
}
.agreement {
  padding-bottom: 1rem;
  font-size: 12px;
  line-height: 1rem;
}
a {
  font-size: 12px;
  color: $gray;
  text-decoration: underline;
}
a:hover {
  opacity: 0.5;
}
</style>
