<template>
  <button @click="$emit('trigger')" type="button">
    <Icon :icon="icon" />
  </button>
</template>

<script>
export default {
  props: [
    'icon'
  ]
}
</script>

<style lang="scss" scoped>
button {
  @include fontColor;
  width: 3rem;
  padding: 0.5rem 0;
  border: 1px solid $gray;
  border-radius: 5px;
  text-align: center;
  background-color: $white;
  cursor: pointer;
}
button:hover {
  @include focusStyle;
}
</style>
