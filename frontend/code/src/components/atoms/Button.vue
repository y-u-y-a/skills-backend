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
    width: 6rem;
    padding: 0.5rem 0;
    margin-left: 1rem;
    font-size: 16px;
    color: $black;
    border: 1px solid $light-gray;
    border-radius: 5px;
    text-align: center;
  }
  a:hover {
    color: $pink;
    border-color: $pink;
    background-color: rgba($light-pink, 0.8);
  }
</style>
