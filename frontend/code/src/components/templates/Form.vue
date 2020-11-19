<template>
  <div class="form contents">
    <div class="form-wrapper">
      <div class="form-title">
        {{ form_title }}
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'form_title'
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
}
</style>
