<template>
  <div>
    <PageNav />
    <Form form_title="業務内容を入力">
      <template v-slot:content>
        <FormGroup label="OS・DB" type="input" />
        <FormGroup label="言語" type="input" />
        <FormGroup label="FW" type="input" />
        <FormGroup label="ツール" type="input" />
      </template>
    </Form>
  </div>
</template>
