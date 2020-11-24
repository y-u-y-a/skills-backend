<template>
  <div>
    <PageNav />
    <Form form_title="業務内容を入力">
      <template v-slot:content>
        <CheckboxGroup
          label="作業項目"
          keyname="process"
          :val_list="['調査', '要件定義', '基本設計', '詳細設計', '製造', 'テスト', '運用保守']"
          class="pb-2" />
        <TextGroup
          label="業務詳細"
          placehokder="業務の詳細について記述してください。" />
        <FormFooter pre_link="/project/Period" next_link="/project/Develop" />
      </template>
    </Form>
  </div>
</template>
