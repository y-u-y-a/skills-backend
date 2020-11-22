<template>
  <div>
    <PageNav />
    <Form
      form_title="開発環境を入力"
      pre_link="/project/Work"
      next_link="/">
      <template v-slot:content>
        <InputGroup label="OS" class="w-30 pb-1" />
        <InputGroup label="DB" class="w-30 pb-1" />
        <InputGroup label="言語" class="w-30 pb-1" />
        <InputGroup label="FW" class="w-30 pb-1" />
        <InputGroup label="ツール" class="w-30 pb-1" />
      </template>
    </Form>
  </div>
</template>
