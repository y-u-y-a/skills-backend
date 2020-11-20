<template>
  <a href="#">
    <font-awesome-icon :icon="icon" />
  </a>
</template>

<script>
export default {
  props: [
    'icon'
  ]
}
</script>

<style lang="scss" scoped>
a {
  width: 3rem;
  padding: 0.5rem 0;
  font-size: 16px;
  color: $black;
  border: 1px solid $light-gray;
  border-radius: 5px;
  text-align: center;
  background-color: $white;
}
a:hover {
  color: $pink;
  border-color: $pink;
  background-color: $light-pink;
  transition: 0.2s;
}
</style>
