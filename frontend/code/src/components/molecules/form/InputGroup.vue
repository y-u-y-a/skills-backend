<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <input
      @input="emitter"
      :value="value"
      :placeholder="placeholder"
      type="text">
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'value',
    'placeholder'
  ],
  methods: {
    emitter(e) {
      // 親側ではv-modelでOK(=@input+:value)
      this.$emit('input', e.target.value);
    }
  }
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
