<template>
  <div>
    <PageNav />
    <Form form_title="開発環境を入力">
      <template v-slot:content>
        <div class="box">
          <InputGroup
            v-model="tmp_os"
            @keydownEnter="add('os')"
            label="OS"
            class="input-group" />
          <TagBox
            :val_list="$store.state.project.os"
            @click="remove($event, 'os')" />
        </div>
        <div class="box">
          <InputGroup
            v-model="tmp_db"
            @keydownEnter="add('db')"
            label="DB"
            class="input-group" />
          <TagBox
            :val_list="$store.state.project.db"
            @click="remove($event, 'db')" />
        </div>
        <div class="box">
          <InputGroup
            v-model="tmp_lang"
            @keydownEnter="add('lang')"
            label="言語"
            class="input-group" />
          <TagBox
            :val_list="$store.state.project.lang"
            @click="remove($event, 'lang')" />
        </div>
        <div class="box">
          <InputGroup
            v-model="tmp_fw"
            @keydownEnter="add('fw')"
            label="FW"
            class="input-group" />
          <TagBox
            :val_list="$store.state.project.fw"
            @click="remove($event, 'fw')" />
        </div>
        <div class="box">
          <InputGroup
            v-model="tmp_tool"
            @keydownEnter="add('tool')"
            label="ツール"
            class="input-group" />
          <TagBox
            :val_list="$store.state.project.tool"
            @click="remove($event, 'tool')" />
        </div>
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
    ...mapMutations('project', [
      'setOS', 'setDB', 'setLang', 'setFW', 'setTool',
      'unsetOS', 'unsetDB', 'unsetLang', 'unsetFW', 'unsetTool',
    ]),
    add(type) {
      if (type == 'os') this.setOS(this.tmp_os);
      if (type == 'db') this.setDB(this.tmp_db);
      if (type == 'lang') this.setLang(this.tmp_lang);
      if (type == 'fw') this.setFW(this.tmp_fw);
      if (type == 'tool') this.setTool(this.tmp_tool);
    },
    remove(val, type) {
      if(type == 'os') this.unsetOS(val);
      if(type == 'db') this.unsetDB(val);
      if(type == 'lang') this.unsetLang(val);
      if(type == 'fw') this.unsetFW(val);
      if(type == 'tool') this.unsetTool(val);
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
