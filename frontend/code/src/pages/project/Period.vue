<template>
  <div>
    <PageNav />
    <Form form_title="期間を入力">
      <template v-slot:content>
        <div class="form-calender">
          <InputGroup
            v-model="start_period"
            label="開始日"
            placeholder="年/月/日"
            class="input-group" />
          <InputGroup
            v-model="end_period"
            label="終了日"
            placeholder="年/月/日"
            class="input-group" />
        </div>
      </template>
      <template v-slot:bottom-content>
        <PageNation
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

<style lang="scss" scoped>
@include media(md) {
  .form-calender {
    @include row(around);
    .input-group {
      width: 45%;
    }
  }

}
</style>
