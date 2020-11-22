<template>
  <div class="contents column justify-content-around align-items-center">
    <div class="title">
      <h2>
        ブラウザ上で簡単に<br class="sp">
        スキルシートが作れます！
      </h2>
      <p>
        Skillsは、ブラウザ上でスキルシート作成ができるサービスです。<br>
        作成後は、PDFダウンロード、共有リンク発行ができます。
      </p>
    </div>
    <NuxtLink to="/user/profile">
      プロフィール入力を始める
    </NuxtLink>
    <NuxtLink to="/project/About">
      案件の入力を始める
    </NuxtLink>
    <div class="row">
      <TextButton button_name="使い方を見る" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin: 4rem 0;
  text-align: center;
  h2 {
    margin-bottom: 3rem;
    font-size: 28px;
  }
  p {
    margin-bottom: 1rem;
    line-height: 32px;
  }
}
a {
  @include fontColor;
  width: 20rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background: $white;
  border: 1px solid $gray;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
}
a:hover {
  @include focusStyle;
}
@media screen and (max-width: $bp) {
  h2 {
    line-height: 42px;
  }
}
</style>
