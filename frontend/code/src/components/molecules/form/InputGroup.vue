<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <input
      @input="emitter"
      @keydown.enter="emitter"
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
    'placeholder',
  ],
  methods: {
    emitter(e) {
      console.log(e)
      // 親側ではv-model(= @input + :value)でOK
      if (e.type == 'input') this.$emit('input', e.target.value);
      if (e.type == 'keydown') this.$emit('keydownEnter');
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
