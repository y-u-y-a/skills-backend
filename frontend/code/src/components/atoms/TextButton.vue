<template>
  <button type="button">
    <font-awesome-icon v-if="before_icon" :icon="before_icon" />
    {{ button_name }}
    <font-awesome-icon v-if="after_icon" :icon="after_icon" />
    </button>
</template>

<script>
export default {
  props: [
    'button_name',
    'before_icon',
    'after_icon'
  ]
}
</script>

<style lang="scss" scoped>
button {
  @include fontColor;
  width: 8rem;
  padding: 0.5rem 0;
  border: 1px solid $gray;
  border-radius: 5px;
  text-align: center;
  background-color: $white;
  cursor: pointer;
}
button:hover {
  @include focusStyle;
  transition: 0.2s;
}
</style>
