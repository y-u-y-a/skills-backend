<template>
  <div class="tag d-inline-block">
    {{ value }}
    <Icon @click="emitter" icon="times" />
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    emitter() {
      this.$emit('click', this.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  padding: 0.3rem 0.5rem;
  background: $light-gray;
  border-radius: 20px;
  font-size: 14px;
  cursor: default;
  svg:hover {
    opacity: 0.5;
    transition: 0.1s;
    cursor: pointer;
  }
}
</style>
