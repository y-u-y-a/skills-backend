<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <input type="text" :name="keyname" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'keyname',
    "placeholder"
  ]
}
</script>

<style lang="scss" scoped>
.form-group {
  @include column;
  padding-bottom: 2rem;
  input {
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 5px;
    border: 1px solid $gray;
  }
}
</style>
