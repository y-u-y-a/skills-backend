<template>
  <header class="">
    <div class="contents row justify-content-between align-items-center">
      <h1>
        {{ project_name }}
        <span class="pc">ブラウザでスキルシートを作成・共有</span>
      </h1>
      <nav class="row">
        <Button button_name="プレビュー" />
        <Button button_name="設定" />
      </nav>
    </div>
  </header>
</template>

<script>
import axios from 'axios';

import Button from '@atoms/Button';

export default {
  components: {
    Button
  },
  data() {
    return {
      project_name: process.env.PROJECT_NAME
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  span {
    font-size: 12px;
    font-weight: normal;
  }
}
nav {
  padding: 0.5rem 0;
}
</style>
