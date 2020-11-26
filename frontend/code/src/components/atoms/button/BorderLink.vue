<template>
  <NuxtLink :to="link">
    <!-- PC -->
    <span class="pc">
      <Icon v-if="before_icon" :icon="before_icon" />
      {{ link_name }}
      <Icon v-if="after_icon" :icon="after_icon" />
    </span>
    <!-- SP -->
    <span class="sp">
      <Icon v-if="sp_icon" :icon="sp_icon" />
      <span v-else-if="!sp_icon">{{ link_name }}</span>
    </span>
  </NuxtLink>
</template>

<script>
export default {
  props: [
    'link',
    'link_name',
    'before_icon',
    'after_icon',
    'sp_icon',
  ]
}
</script>

<style lang="scss" scoped>
a {
  @include row(center, center);
  @include fontColor;
  width: 8rem;
  padding: 0.5rem 0;
  background-color: $white;
  border: 1px solid $gray;
  border-radius: 5px;
  cursor: pointer;
}
a:hover {
  @include focusStyle;
  transition: 0.2s;
}
@include media(sm) {
  a {
    width: 3rem;
  }
}
</style>
