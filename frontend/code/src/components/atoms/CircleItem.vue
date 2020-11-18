<template>
  <div class="circle row justify-content-around align-items-center">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'text'
  ]
}
</script>

<style lang="scss" scoped>
.circle {
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
  color: $pink;
  border: 1px solid $pink;
  background-color: $light-pink;
  transition: 0.2s;
}
</style>
