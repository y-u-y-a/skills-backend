<template>
  <AuthForm
    title="新規登録"
    toggle_link="/auth/Login"
    toggle_name="ログイン">
    <template v-slot:top>
      <SnsButtonList class="pb-2" />
    </template>
    <template v-slot:form>
      <InputGroup v-model="params.email" placeholder="メールアドレス" />
      <InputGroup v-model="params.password" placeholder="パスワード" />
      <InputGroup placeholder="パスワード確認" />
      <Agreement />
      <BigButton
        @click="$store.dispatch('auth/signIn', params)"
        button_name="新規登録する" />
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
