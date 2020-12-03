<template>
  <div class="container column justify-content-around align-items-center">
    <div class="title">
      <h2>
        ブラウザ上で簡単に<br class="sp">
        スキルシートが作れます！
      </h2>
      <p>
        <span class="pc">
          Skillsは、ブラウザ上でスキルシート作成ができるサービスです。<br>
        </span>
        作成後は、PDFダウンロード・共有リンク発行が可能！
      </p>
    </div>
    <BorderLink
      link_name="プロフィール入力を始める"
      link="/user/Profile" />
    <BorderLink
      link_name="案件の入力を始める"
      link="/project/About" />
    <BorderLink
      link_name="使い方をみる"
      link="/common/How" />
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  h2 {
    font-size: 28px;
    font-weight: bold;
  }
  p {
    margin-bottom: 1rem;
  }
}
a {
  @include fontColor;
  width: 20rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background: $white;
  border: 1px solid $white;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
}
a:hover {
  @include focusStyle;
}

@include media() {
  h2 {
    margin-bottom: 3rem;
  }
  p {
    line-height: 32px;
  }
  .title {
    margin: 4rem 0;
  }
}
@include media(sm) {
  h2 {
    margin-bottom: 2rem;
    line-height: 42px;
  }
  .title {
    margin: 2rem 0;
  }
}
</style>
