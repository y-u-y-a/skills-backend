<template>
  <div>
    <PageNav />
    <Form form_title="案件情報を入力">
      <template v-slot:content>
        <InputGroup label="案件名" placeholder="xxxxのシステム開発" />
        <div class="row">
          <SelectGroup
            label="ポジション"
            :val_list="['PG', 'SE', 'PL', 'PM']"
            class="mr-4" />
          <SelectGroup
            label="チーム人数"
            :val_list="['1〜5', '6〜', '15〜', '20〜']"
            class="mr-4" />
        </div>
        <InputGroup label="案件の業種" placeholder="広告" />
        <FormFooter pre_link="/" next_link="/project/Period" />
      </template>
    </Form>
  </div>
</template>
