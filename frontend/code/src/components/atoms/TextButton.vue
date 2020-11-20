<template>
  <a href="#">{{ button_name }}</a>
</template>

<script>
export default {
  props: [
    'button_name'
  ]
}
</script>

<style lang="scss" scoped>
a {
  width: 8rem;
  padding: 0.5rem 0;
  font-size: 16px;
  color: $black;
  border: 1px solid $gray;
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
