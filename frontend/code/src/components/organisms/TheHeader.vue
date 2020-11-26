<template>
  <div>
    <header>
      <div class="container row justify-content-between align-items-center">
        <h1>
          <NuxtLink to="/">
            {{ $store.state.APP_NAME }}
            <span class="pc">ブラウザでスキルシートを作成・共有</span>
          </NuxtLink>
        </h1>
        <NavList class="nav">
          <template v-slot:content>
            <IconButton
              @trigger="$store.dispatch('showPage', {page_name: 'preview'})"
              icon="eye"
              class="sp" />
            <IconButton
              @trigger="$store.dispatch('showPage', {page_name: 'sidebar'})"
              icon="bars"
              class="sp" />
            <TextButton
              @trigger="$store.dispatch('showPage', {page_name: 'preview'})"
              button_name="プレビュー"
              class="pc" />
            <TextButton
              @trigger="$store.dispatch('showPage', {page_name: 'sidebar'})"
              button_name="設定"
              class="pc" />
          </template>
        </NavList>
      </div>
    </header>
  </div>
</template>

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
