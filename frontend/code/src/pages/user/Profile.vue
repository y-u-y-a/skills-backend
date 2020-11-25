<template>
  <Form form_title="プロフィールを入力" class="mb-2">
    <template v-slot:content>
      <div class="row">
        <InputGroup
          v-model="profile.last_name"
          label="姓"
          placeholder="鈴木"
          class="w-30 mr-2" />
        <InputGroup
          v-model="profile.first_name"
          label="名"
          placeholder="太郎"
          class="w-30" />
      </div>
      <div class="row align-items-end">
        <SelectGroup
          v-model="profile.gender"
          label="性別"
          :val_list="['未入力', '男性', '女性']"
          class="mr-4" />
        <SelectGroup
          v-model="profile.birth.year"
          label="生年月日"
          :val_list="['1990']"
          class="mr-1" />
        <SelectGroup
          v-model="profile.birth.month"
          :val_list="['04']"
          class="mr-1" />
        <SelectGroup
          v-model="profile.birth.day"
          :val_list="['10']" />
          <!-- <InputGroup label="最終学歴" placeholder="例：XXX大学 卒" /> -->
      </div>
      <div class="row">
        <InputGroup
          v-model="profile.email"
          label="メールアドレス"
          placeholder="例：skills@gmail.com"
          class="w-30 mr-2" />
        <InputGroup
          v-model="profile.phone_number"
          label="電話番号"
          placeholder="例：000-1234-5678"
          class="w-30" />
      </div>
      <InputGroup
        v-model="profile.station"
        label="最寄駅"
        placeholder="例：丸ノ内線/東京駅" />
      <InputGroup
        v-model="profile.share_link"
        label="共有リンク"
        placeholder="例：https://github.com/xxxx" />
      <TextGroup
        v-model="profile.pr"
        label="PR"
        placeholder="自己PRを入力してください。" />
      <FormFooter class="row justify-content-center">
        <template v-slot:content>
          <BigButton
            @trigger="registerProfile"
            button_name="登録する" />
        </template>
      </FormFooter>
    </template>
  </Form>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      profile: {
        last_name: null,
        first_name: null,
        gender: null,
        birth: {
          year: null,
          month: null,
          day: null
        },
        email: null,
        phone_number: null,
        station: null,
        share_link: null,
        pr: null
      }
    }
  },
  methods: {
    ...mapActions('user', ['insertProfile']),
    registerProfile() {
      this.insertProfile({profile: this.profile});
    }
  }
}
</script>
