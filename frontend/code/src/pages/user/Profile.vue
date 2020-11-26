<template>
  <Form form_title="プロフィールを入力" class="mb-2">
    <template v-slot:content>
      <div class="row justify-content-between">
        <InputGroup
          v-model="profile.last_name"
          label="姓"
          placeholder="鈴木"
          class="w-48" />
        <InputGroup
          v-model="profile.last_name_kana"
          label="セイ"
          placeholder="スズキ"
          class="w-48" />
      </div>
      <div class="row justify-content-between">
        <InputGroup
          v-model="profile.first_name"
          label="名"
          placeholder="太郎"
          class="w-48" />
        <InputGroup
          v-model="profile.first_name_kana"
          label="メイ"
          placeholder="タロウ"
          class="w-48" />
      </div>
      <div class="row flex-wrap">
        <SelectGroup
          v-model="profile.gender"
          label="性別"
          :val_list="['未入力', '男性', '女性']"
          class="mr-4" />
        <div class="row align-items-end">
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
        </div>
      </div>
      <InputGroup
        v-model="profile.email"
        label="メールアドレス"
        placeholder="例：skills@gmail.com" />
      <InputGroup
        v-model="profile.phone_number"
        label="電話番号"
        placeholder="例：000-1234-5678" />
      <InputGroup
        v-model="profile.station"
        label="最寄駅"
        placeholder="例：丸ノ内線/東京駅" />
      <TextGroup
        v-model="profile.pr_text"
        label="PR"
        placeholder="自己PRを入力してください。" />
    </template>
    <template v-slot:bottom-content>
      <div class="row justify-content-center pb-1">
        <BigButton
          @click="registerProfile"
          button_name="登録する" />
      </div>
    </template>
  </Form>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      profile: {
        last_name: '鈴木',
        first_name: '一郎',
        last_name_kana: 'スズキ',
        first_name_kana: 'タロウ',
        gender: '男性',
        birth: {
          year: '1990',
          month: '12',
          day: '04'
        },
        email: 'hoge@gmail.com',
        phone_number: '000-1111-3333',
        station: '丸ノ内線/竹橋駅',
        pr_text: '自己PRの文章。自己PRの文章。自己PRの文章。自己PRの文章。自己PRの文章。'
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
