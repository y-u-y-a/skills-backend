<template>
  <AuthForm
    title="ログイン"
    toggle_link="/auth/Register"
    toggle_name="新規登録">
    <template v-slot:top>
      <SnsButtonList class="pb-2" />
    </template>
    <template v-slot:form>
      <InputGroup v-model="params.email" placeholder="メールアドレス" />
      <InputGroup v-model="params.password" placeholder="パスワード" />
      <HeadsUpLink title="パスワードをお忘れの方はこちら" to="#" />
      <BigButton
        @click="$store.dispatch('auth/signIn', params)"
        button_name="ログインする"
        class="mb-2" />
      <Agreement />
    </template>
  </AuthForm>
</template>

<script>
export default {
  data() {
    return {
      params: {
        email: 'testuser@gmail.com',
        password: 'testuser',
      }
    }
  },
}
</script>
