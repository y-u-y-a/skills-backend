<template>
  <button @click="$emit('click')" type="button">
    <!-- PC -->
    <span class="pc">
      <Icon v-if="before_icon" :icon="before_icon" />
        {{ button_name }}
        <Icon v-if="after_icon" :icon="after_icon" />
    </span>
    <!-- SP -->
    <span class="sp">
      <Icon v-if="sp_icon" :icon="sp_icon" />
    </span>
  </button>
</template>

<script>
export default {
  props: [
    'button_name',
    'before_icon',
    'after_icon',
    'sp_icon',
  ]
}
</script>

<style lang="scss" scoped>
button {
  @include fontColor;
  width: 8rem;
  padding: 0.5rem 0;
  background-color: $white;
  border: 1px solid $gray;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
button:hover {
  @include focusStyle;
  transition: 0.2s;
}
@include media(sm) {
  button {
    width: 3rem;
  }
}
</style>
