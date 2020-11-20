<template>
  <div>
    <PageNav />
    <Form form_title="業務内容を入力">
      <template v-slot:content>
        <FormGroup
          type="checkbox"
          label="作業項目"
          keyname="process"
          :val_list="['調査', '要件定義', '基本設計', '詳細設計', '製造', 'テスト', '運用保守']"
          class="pb-3" />
        <FormGroup label="業務詳細" type="textarea" />
      </template>
    </Form>
  </div>
</template>
