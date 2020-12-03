<template>
  <div class="container">
    <div class="form">
      <div class="form-title">
        {{ form_title }}
      </div>
      <!-- Pageごとに切替 -->
      <slot name="content"></slot>
      <slot name="bottom-content"></slot>
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
    padding: 2rem 0;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
