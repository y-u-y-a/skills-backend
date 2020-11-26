<template>
  <AuthForm title="ログイン">
    <template v-slot:sns>
      <SnsButtonList class="pb-2" />
    </template>
    <template v-slot:form>
      <InputGroup placeholder="メールアドレス" />
      <InputGroup placeholder="パスワード" />
      <BigButton button_name="ログインする" class="mb-2" />
    </template>
  </AuthForm>
</template>
