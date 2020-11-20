<template>
  <div>
    <PageNav />
    <Form form_title="案件情報を入力">
      <template v-slot:content>
        <FormGroup label="案件名" type="input" />
        <div class="row">
          <FormGroup
            label="ポジション"
            type="select"
            :val_list="['PG', 'SE', 'PL', 'PM']"
            class="mr-4" />
          <FormGroup
            label="チーム人数"
            type="select"
            :val_list="['1〜5', '6〜', '15〜', '20〜']"
            class="mr-4" />
        </div>
        <FormGroup label="案件の業種" type="input" />
      </template>
    </Form>
  </div>
</template>
