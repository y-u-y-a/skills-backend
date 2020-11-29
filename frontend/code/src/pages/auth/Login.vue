<template>
  <AuthForm title="ログイン">
    <template v-slot:sns>
      <SnsButtonList class="pb-2" />
    </template>
    <template v-slot:form>
      <InputGroup v-model="params.email" placeholder="メールアドレス" />
      <InputGroup v-model="params.password" placeholder="パスワード" />
      <BigButton
        @click="$store.dispatch('auth/signIn', params)"
        button_name="ログインする"
        class="mb-2" />
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
