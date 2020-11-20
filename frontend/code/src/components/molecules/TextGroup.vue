<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <textarea
      :name="keyname"
      :placeholder="placeholder"
      cols="30"
      rows="10">
    </textarea>
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
  padding-bottom: 4rem;
  textarea {
    padding: 0 0.5rem;
    border-radius: 5px;
    border: 1px solid $gray;
  }
}
</style>
