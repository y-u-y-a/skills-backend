<template>
  <div class="column pb-1">
    <FormLabel :label="label" />
    <textarea
      @input="emitter"
      :value="value"
      :placeholder="placeholder"
      cols="30"
      rows="6">
    </textarea>
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'value',
    "placeholder"
  ],
  methods: {
    emitter(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  @include formComponent;
  padding: 0 0.5rem;
}
</style>
