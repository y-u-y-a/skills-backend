<template>
  <header>
    <div class="contents row justify-content-between align-items-center">
      <h1>
        <a href="/">
          {{ project_name }}
          <span class="pc">ブラウザでスキルシートを作成・共有</span>
        </a>
      </h1>
      <nav class="row">
        <IconButton icon="eye" class="sp" />
        <IconButton icon="bars" class="sp ml-05" />
        <TextButton button_name="プレビュー" class="pc" />
        <TextButton button_name="設定" class="pc ml-05" />
      </nav>
    </div>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      project_name: process.env.PROJECT_NAME
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 0.5rem 0;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  a {
    color: $black;
  }
  span {
    font-size: 12px;
  }
}
</style>
