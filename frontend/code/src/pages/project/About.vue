<template>
  <div>
    <PageNav />
    <Form form_title="案件情報を入力">
      <template v-slot:content>
        <InputGroup
          v-model="title"
          label="案件名"
          placeholder="xxxxのシステム開発"
          class="pb-2" />
        <div class="row">
          <SelectGroup
            v-model="position"
            label="ポジション"
            :val_list="['PG', 'SE', 'PL', 'PM']"
            class="mr-4 pb-2" />
          <SelectGroup
            v-model="member_counts"
            label="チーム人数"
            :val_list="['1〜5', '6〜', '15〜', '20〜']"
            class="mr-4 pb-2" />
        </div>
        <InputGroup
          v-model="industry_type"
          label="案件の業種"
          placeholder="広告" />
      </template>
      <template v-slot:bottom-content>
        <PageNation
          pre_link="/"
          next_link="/project/Period" />
      </template>
    </Form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  computed: {
    title: {
      get() { this.$store.state.project.title },
      set(val) { this.setTitle(val) }
    },
    position: {
      get() { this.$store.state.project.position },
      set(val) { this.setPosition(val) }
    },
    member_counts: {
      get() { this.$store.state.project.member_counts },
      set(val) { this.setMemberCounts(val) }
    },
    industry_type: {
      get() { this.$store.state.project.industry_type },
      set(val) { this.setIndustryType(val) }
    },
  },
  methods: {
    ...mapMutations('project', [
      'setTitle',
      'setPosition',
      'setMemberCounts',
      'setIndustryType',
    ])
  }
}
</script>
