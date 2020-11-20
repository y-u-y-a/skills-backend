<template>
  <div>
    <PageNav />
    <Form
      form_title="業務内容を入力"
      pre_link="/project/Work">
      <template v-slot:content>
        <InputGroup label="OS・DB" class="w-30 pb-3" />
        <InputGroup label="言語" class="w-30 pb-3" />
        <InputGroup label="FW" class="w-30 pb-3" />
        <InputGroup label="ツール" class="w-30 pb-3" />
      </template>
    </Form>
  </div>
</template>
