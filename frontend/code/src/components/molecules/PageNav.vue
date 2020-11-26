<template>
  <div class="page-nav container">
    <ul class="row align-items-end">
      <li v-for="n in 20" :key="n">
        <template v-if="n == 2">
          <span>編集中</span>
          <CircleItem :text="n" :is_active="true" />
        </template>
        <template v-else>
          <CircleItem :text="n" :is_active="false" />
        </template>
      </li>
    </ul>
    <NavList class="font-12">
      <template v-slot:content>
        <BorderButton
          button_name="共有リンク取得"
          after_icon="link"
          sp_icon="link"
          class="ml-05" />
        <BorderButton
          button_name="ダウンロード"
          after_icon="download"
          sp_icon="download"
          class="ml-05" />
      </template>
    </NavList>
  </div>
</template>

<style lang="scss" scoped>
.page-nav {
  @include row(between, center);
}
ul {
  width: 70%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  overflow: scroll;
  li {
    margin-right: 2rem;
    span {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 12px;
      color: $pink;
      text-align: center;
    }
  }
}
</style>
