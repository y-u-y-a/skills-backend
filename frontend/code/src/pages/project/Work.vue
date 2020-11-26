<template>
  <div>
    <PageNav />
    <Form form_title="業務内容を入力">
      <template v-slot:content>
        <CheckboxGroup
          v-model="process"
          label="作業項目"
          :val_list="['調査', '要件定義', '基本設計', '詳細設計', '製造', 'テスト', '運用保守']" />
        <TextGroup
          v-model="detail"
          label="業務詳細"
          placehokder="業務の詳細について記述してください。" />
      </template>
      <template v-slot:bottom-content>
        <PageNation
          pre_link="/project/Period"
          next_link="/project/Develop" />
      </template>
    </Form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  computed: {
    process: {
      get() { this.$store.state.project.process },
      set(vals) { this.setProcess(vals) }
    },
    detail: {
      get() { this.$store.state.project.detail },
      set(val) { this.setDetail(val) }
    },
  },
  methods: {
    ...mapMutations('project', [
      'setProcess',
      'setDetail',
    ])
  }
}
</script>
