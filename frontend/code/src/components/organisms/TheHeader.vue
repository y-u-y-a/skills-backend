<template>
  <header>
    <div class="contents row justify-content-between align-items-center">
      <h1>
        <NuxtLink to="/">
          {{ project_name }}
          <span class="pc">ブラウザでスキルシートを作成・共有</span>
        </NuxtLink>
      </h1>
      <NavList class="nav">
        <template v-slot:content>
          <IconButton icon="eye" class="sp" />
          <IconButton icon="bars" class="sp" />
          <TextButton button_name="プレビュー" class="pc" />
          <TextButton button_name="設定" class="pc" />
        </template>
      </NavList>
    </div>
  </header>
</template>

<script>

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
  padding: 0.5rem 0 2rem;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  a {
    color: $dark-brown;
  }
  span {
    font-size: 12px;
  }
}
.nav {
  button {
    margin-left: 0.5rem;
    font-size: 16px;
  }
}
</style>
