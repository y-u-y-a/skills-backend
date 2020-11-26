<template>
  <NuxtLink :to="link" :class="class_name">
    <Icon v-if="before_icon" :icon="before_icon" />
    {{ link_name }}
    <Icon v-if="after_icon" :icon="after_icon" />
  </NuxtLink>
</template>

<script>
export default {
  props: [
    'link',
    'link_name',
    'before_icon',
    'after_icon',
    'class_name',
  ]
}
</script>

<style lang="scss" scoped>
a {
  border-radius: 3px;
  cursor: pointer;
}
.text-color {
  padding: 0.5rem 1.5rem 0.5rem 0;
  color: $pink;
  svg {
    margin-right: 0.5rem;
  }
}
.text-color:hover {
  opacity: 0.5;
}
.bg-color {
  padding: 0.5rem 1.5rem;
  color: $white;
  background-color: $pink;
  border: 1px solid $pink;
  svg {
    margin-left: 0.5rem;
  }
}
.bg-color:hover {
  color: $pink;
  background-color: $light-pink;
  transition: 0.2s;
}
</style>
