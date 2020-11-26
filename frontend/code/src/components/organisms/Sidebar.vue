<template>
  <aside class="sidebar">
    <div class="sidebar-wrapper">
      <header>
        <Icon
          @click="$store.commit('togglePage', {page_name: 'sidebar'})"
          icon="times" />
      </header>
      <ul>
        <li v-for="menu in menu_list" :key="menu.name">
          <Icon :icon="menu.icon" />
          {{ menu.name }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>

export default {
  data() {
    return {
      menu_list: [
        {
          name: 'メール・パスワード',
          icon: 'key'
        },
        {
          name: '通知設定',
          icon: 'bell'
        },
        {
          name: 'ログアウト',
          icon: 'sign-out-alt'
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background: rgba($dark-brown,0.9);
  cursor: auto;
}
.sidebar-wrapper {
  width: 90%;
  margin: 0 auto;
  color: $white;
  header {
    @include row($align: center);
    height: 42px;
    padding: 0.5rem 0 2rem;
    svg {
      color: $gray;
      font-size: 24px;
      cursor: pointer;
    }
    svg:hover {
      opacity: 0.8;
    }
  }
  li {
    padding: 1rem 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    svg {
      margin-right: 0.5rem;
    }
  }
  li:hover {
    background: rgba(0,0,0, 0.9);
    transition: 0.2s;
  }
}
</style>
