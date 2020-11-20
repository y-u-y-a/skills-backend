<template>
  <div class="form contents">
    <div class="form-wrapper">
      <div class="form-title">
        {{ form_title }}
      </div>
      <!-- Page(Template)ごとに切替 -->
      <slot name="content"></slot>
      <div class="form-footer">
        <a :href="pre_link">
          <font-awesome-icon icon="angle-double-left" />前へ
          </a>
        <a :href="next_link">
          次へ<font-awesome-icon icon="angle-double-right" />
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'form_title',
    'pre_link',
    'next_link'
  ]
}
</script>

<style lang="scss" scoped>
.form {
  background: $white;
  &-wrapper {
    width: 95%;
    margin: 0 auto;
  }
  &-title {
    padding: 2rem 0;
    font-size: 20px;
    font-weight: bold;
  }
  &-footer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    a {
      padding: 0.5rem 1.5rem;
      color: $white;
      background-color: $pink;
      border: 1px solid $pink;
      border-radius: 3px;
    }
    a:hover {
      color: $pink;
      background-color: $light-pink;
      transition: 0.2s;
    }
  }
}
</style>
