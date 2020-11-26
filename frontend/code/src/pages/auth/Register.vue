<template>
  <AuthForm title="新規登録">
    <template v-slot:sns>
      <SnsButtonList class="pb-2" />
    </template>
    <template v-slot:form>
      <InputGroup v-model="email" placeholder="メールアドレス" />
      <InputGroup v-model="password" placeholder="パスワード" />
      <InputGroup placeholder="パスワード確認" />
      <BigButton
        @click="register"
        button_name="新規登録する" />
    </template>
  </AuthForm>
</template>

<script>
export default {
  data() {
    return {
      email: 'testuser@gmail.com',
      password: 'testuser',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('auth/signUp', {
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>
