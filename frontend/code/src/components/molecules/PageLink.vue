<template>
  <div class="page-link">
    <a v-if="pre_link" :href="pre_link">
      <font-awesome-icon icon="angle-double-left" />前へ
      </a>
    <a v-if="next_link" :href="next_link">
      次へ<font-awesome-icon icon="angle-double-right" />
      </a>
  </div>
</template>

<script>
export default {
  props: [
    'pre_link',
    'next_link'
  ]
}
</script>

<style lang="scss" scoped>
.page-link {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  a {
    padding: 0.5rem 1.5rem;
    color: $white;
    background-color: $pink;
    border: 1px solid $pink;
    border-radius: 3px;
  }
  a:hover {
    color: $pink;
    background-color: $light-pink;
    transition: 0.2s;
  }
}
</style>
