<template>
  <NuxtLink :to="to" class="mb-1">{{ title }}</NuxtLink>
</template>

<script>
export default {
  props: ['title', 'to'],
}
</script>

<style lang="scss" scoped>
a {
  font-size: 12px;
  color: $gray;
  text-decoration: underline;
}
a:hover {
  opacity: 0.5;
}
</style>
