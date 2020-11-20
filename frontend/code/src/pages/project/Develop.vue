<template>
  <div>
    <PageNav />
    <Form form_title="業務内容を入力">
      <template v-slot:content>
        <FormGroup label="OS・DB" type="input" class="w-30" />
        <FormGroup label="言語" type="input" class="w-30" />
        <FormGroup label="FW" type="input" class="w-30" />
        <FormGroup label="ツール" type="input" class="w-30" />
      </template>
    </Form>
  </div>
</template>
