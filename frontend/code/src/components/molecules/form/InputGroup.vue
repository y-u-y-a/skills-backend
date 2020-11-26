<template>
  <div class="column pb-1">
    <FormLabel v-if="label" :label="label" />
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
      // 親側ではv-model(= @input + :value)でOK
      if (e.type == 'input') this.$emit('input', e.target.value);
      if (e.type == 'keydown') this.$emit('keydownEnter');
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  @include formComponent;
  height: 2rem;
  padding: 0 0.5rem;
}
</style>
