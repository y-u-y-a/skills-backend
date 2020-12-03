<template>
  <aside class="sidebar">
    <div class="sidebar-wrapper">
      <header>
        <Icon
          @click="$store.commit('common/togglePage', 'sidebar')"
          icon="times" />
      </header>
      <ul>
        <li>
          <a href="/user/Privacy">
            <Icon icon="key" />
            メール・パスワード
          </a>
        </li>
        <li>
          <a href="/">
            <Icon icon="bell" />
            通知設定
          </a>
        </li>
        <li @click="$store.dispatch('auth/signOut')">
          <Icon icon="sign-out-alt" />
          ログアウト
        </li>
      </ul>
    </div>
  </aside>
</template>

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
  a {
    color: $white;
  }
}
</style>
