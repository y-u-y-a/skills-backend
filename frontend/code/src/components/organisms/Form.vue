<template>
  <div class="contents">
    <div class="form">
      <div class="form-title">
        {{ form_title }}
      </div>
      <!-- Page(Template)ごとに切替 -->
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form_title']
}
</script>

<style lang="scss" scoped>
.form {
  background: $white;
  padding: 0 1rem;
  &-title {
    @include fontColor;
    padding: 2rem 0;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
