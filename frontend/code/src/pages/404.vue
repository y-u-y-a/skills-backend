<template>
  <div class="notfound contents">
    <div class="notfound-container">
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem 0;
  background-color: $white;
  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 3rem;
  }
  p {
    line-height: 32px;
  }
}
</style>
