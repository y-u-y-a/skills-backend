<template>
  <div class="form-group">
    <label for="" class="form-label">{{ label }}</label>
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
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  .form-label {
    margin-bottom: 0.5rem;
  }
  input {
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 5px;
    border: 1px solid $gray;
  }
}
</style>
