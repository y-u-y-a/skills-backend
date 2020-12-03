<template>
  <footer class="pc">
    <div class="footer-wrapper container">
      <ul>
        <li>
          <NuxtLink to="/common/Rule">利用規約</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/common/Privacy">プライバシーポリシー</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/common/Contact">お問い合わせ</NuxtLink>
        </li>
      </ul>
      <div class="copyright">
        <small>Skills ©︎ 2020</small>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: auto; // Fixed Footer
  background-color: $dark-brown;
  .footer-wrapper {
    @include row(between, center);
  }
  ul {
    @include row(between);
    padding: 1rem 0;
    a {
      margin-right: 1rem;
      font-size: 14px;
      color: $white;
    }
    a:hover {
      opacity: 0.6;
    }
  }
  .copyright {
    font-size: 12px;
    color: $white;
  }
}
</style>
