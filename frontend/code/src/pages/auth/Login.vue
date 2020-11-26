<template>
  <AuthForm title="ログイン">
    <template v-slot:sns>
      <SnsButtonList class="pb-2" />
    </template>
    <template v-slot:form>
      <InputGroup v-model="email" placeholder="メールアドレス" />
      <InputGroup v-model="password" placeholder="パスワード" />
      <BigButton @click="login" button_name="ログインする" class="mb-2" />
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
    login() {
      this.$store.dispatch('auth/signIn', {
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>
