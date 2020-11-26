<template>
  <div>
    <PageNav />
    <Form form_title="期間を入力">
      <template v-slot:content>
        <div class="row justify-content-between">
          <InputGroup
            v-model="start_period"
            label="開始日"
            placeholder="年/月/日"
            class="w-45 pb-2" />
          <InputGroup
            v-model="end_period"
            label="終了日"
            placeholder="年/月/日"
            class="w-45 pb-2" />
        </div>
        <FormFooter
          pre_link="/project/About"
          next_link="/project/Work" />
      </template>
    </Form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  computed: {
    start_period: {
      get() { this.$store.state.project.period.start },
      set(val) { this.setPeriod({start: val}) }
    },
    end_period: {
      get() { this.$store.state.project.period.end },
      set(val) { this.setPeriod({end: val}) }
    },
  },
  methods: {
    ...mapMutations('project', ['setPeriod']),
  }
}
</script>
