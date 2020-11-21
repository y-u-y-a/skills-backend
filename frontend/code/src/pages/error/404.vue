<template>
  <div class="notfound contents">
    <div>
      <h2>Page Not Found.</h2>
      <h3>お探しのページが見つかりません。</h3>
      <p>
        URLに間違いないか確認し、再度アクセスを試してください。<br>
        また、つながらない場合は時間をおいて再度アクセスしてください。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notfound {
  @include row(center, center);
  margin-top: 5rem;
  color: $dark-brown;
  h2 {
    margin-bottom: 3rem;
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 3rem;
    font-size: 24px;
  }
  p {
    line-height: 32px;
  }
}
</style>
