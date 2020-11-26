<template>
  <AuthForm title="新規登録">
    <template v-slot:sns>
      <SnsButtonList class="pb-2" />
    </template>
    <template v-slot:form>
      <InputGroup placeholder="メールアドレス" />
      <InputGroup placeholder="パスワード" />
      <InputGroup placeholder="パスワード確認" />
      <BigButton button_name="新規登録する" class="mb-2" />
    </template>
  </AuthForm>
</template>
