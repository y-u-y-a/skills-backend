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
    ...mapMutations('project', ['setDev', 'unsetDev']),
    add(type) {
      if (type == 'os') {
        this.setDev({os: this.tmp_os});
        this.tmp_os = null;
      }
      if (type == 'db') {
        this.setDev({db: this.tmp_db});
        this.tmp_db = null;
      }
      if (type == 'lang') {
        this.setDev({lang: this.tmp_lang});
        this.tmp_lang = null;
      }
      if (type == 'fw') {
        this.setDev({fw: this.tmp_fw});
        this.tmp_fw = null;
      }
      if (type == 'tool') {
        this.setDev({tool: this.tmp_tool});
        this.tmp_tool = null;
      }
    },
    remove(val, type) {
      if(type == 'os') this.unsetDev({os: val});
      if(type == 'db') this.unsetDev({db: val});
      if(type == 'lang') this.unsetDev({lang: val});
      if(type == 'fw') this.unsetDev({fw: val});
      if(type == 'tool') this.unsetDev({tool: val});
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
