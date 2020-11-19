<template>
  <div class="form-nav">
    <div class="contents row align-items-center justify-content-between">
      <ul class="row">
        <li v-for="n in 3" :key="n">
          <CircleItem :text="n" />
        </li>
      </ul>
      <Button button_name="ダウンロード" class="px-1" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-nav {
  padding: 0.5rem 0;
  background: $light-blue;
}
ul {
  max-width: 720px;
  width: 100%;
  li {
    margin-right: 2rem;
  }
}
</style>
