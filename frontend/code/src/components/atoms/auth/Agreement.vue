<template>
  <div class="agreement">
    ※利用開始をもって
    <HeadsUpLink title="利用規約" to="#" />と
    <HeadsUpLink title="プライバシーポリシー" to="#" />に同意したものとみなします。
  </div>
</template>

<style lang="scss" scoped>
.agreement {
  padding-bottom: 1rem;
  font-size: 12px;
  line-height: 1rem;
  a {
    font-size: 12px;
    color: $gray;
    text-decoration: underline;
  }
  a:hover {
    opacity: 0.5;
  }
}
</style>
