<template>
  <button @click="$emit('click')" type="button">
    {{ button_name }}
  </button>
</template>

<script>
export default {
  props: ['button_name']
}
</script>

<style lang="scss" scoped>
button {
  padding: 0.5rem 4rem;
  background: $pink;
  color: $white;
  font-size: 16px;
  border: 1px solid $pink;
  border-radius: 4px;
  text-align: center;
}
button:hover {
  @include focusStyle;
}
</style>
