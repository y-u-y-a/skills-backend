<template>
  <footer>
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
    <div style="text-align:center;">
      <small>Skills ©︎ 2020</small>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 0;
  background: $dark-blue;
  ul {
    max-width: 350px;
    margin: 0 auto 0.5rem;
  }
  a {
    font-size: 14px;
    color: $white;
  }
  small {
    font-size: 12px;
    color: $white;
  }
}
</style>
