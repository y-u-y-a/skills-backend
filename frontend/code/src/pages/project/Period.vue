<template>
  <div>
    <PageNav />
    <Form form_title="期間を入力">
      <template v-slot:content>
        <div class="row justify-content-between">
          <FormGroup
            label="開始日"
            type="input"
            placeholder="年/月/日"
            class="w-45" />
          <FormGroup
            label="終了日"
            type="input"
            placeholder="年/月/日"
            class="w-45" />
        </div>
      </template>
    </Form>
  </div>
</template>
