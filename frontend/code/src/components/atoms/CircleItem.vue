<template>
  <div class="circle" :class="{active: is_active}">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'text',
    'is_active'
  ]
}
</script>

<style lang="scss" scoped>
.circle {
  @include fontColor;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid $white;
  background-color: $white;
  cursor: pointer;
}
.circle:hover {
  @include focusStyle;
}
.active {
  @include focusStyle;
}
</style>
