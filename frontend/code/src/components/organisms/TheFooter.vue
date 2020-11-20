<template>
  <footer>
    <div class="footer-wrapper contents">
      <ul class="row justify-content-between">
        <li>
          <a href="#">利用規約</a>
        </li>
        <li>
          <a href="#">プライバシーポリシー</a>
        </li>
        <li>
          <a href="#">お問い合わせ</a>
        </li>
      </ul>
      <div class="copy-right">
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
    padding: 1rem 0;
    a {
      margin-right: 1rem;
      font-size: 14px;
      color: $white;
    }
  }
  .copy-right {
    font-size: 12px;
    color: $white;
  }
}
</style>
