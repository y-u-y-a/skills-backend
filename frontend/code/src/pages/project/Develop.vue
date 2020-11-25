<template>
  <div>
    <PageNav />
    <Form form_title="開発環境を入力">
      <template v-slot:content>
        <div class="box">
          <InputGroup
            v-model="tmp_os"
            label="OS"
            @keydownEnter="add"
            class="input-group" />
          <div>
            <Tag v-for="v in $store.state.project.os"
            :key="v"
            @click="remove"
            :value="v"
            class="tag" />
          </div>
        </div>
        <InputGroup
          v-model="tmp_db"
          label="DB"
          class="input-group" />
        <InputGroup
          v-model="tmp_lang"
          label="言語"
          class="input-group" />
        <InputGroup
          v-model="tmp_fw"
          label="FW"
          class="input-group" />
        <InputGroup
          v-model="tmp_tool"
          label="ツール"
          class="input-group" />
        <FormFooter pre_link="/project/Work" next_link="/" />
      </template>
    </Form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      tmp_os: null,
      tmp_db: null,
      tmp_lang: null,
      tmp_fw: null,
      tmp_tool: null,
    }
  },
  methods: {
    ...mapMutations('project', ['setDev', 'unsetDev']),
    add() {
      this.setDev({os: this.tmp_os});
      this.tmp_os = null;
    },
    remove(val) {
      this.unsetDev({os: val});
    },
  }
}
</script>

<style lang="scss" scoped>
.box {
  @include row;
}
.input-group {
  min-width: 300px;
  max-width: 300px;
  padding-bottom: 1rem;
  margin-right: 1rem;
}
.tag {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
@media screen and (max-width: $bp) {
  .box {
    @include column;
    padding-bottom: 0.5rem;
  }
}
</style>
