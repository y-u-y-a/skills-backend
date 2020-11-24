<template>
  <footer>
    <template v-if="pre_link || next_link">
      <div class="row justify-content-between">
        <NuxtLink v-if="pre_link" :to="pre_link" class="pre">
          <Icon icon="angle-double-left" />
          前へ
        </NuxtLink>
        <NuxtLink v-if="next_link" :to="next_link" class="next">
          次へ
          <Icon icon="angle-double-right" />
        </NuxtLink>
      </div>
    </template>
    <slot name="content"></slot>
  </footer>
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
footer {
  padding-bottom: 1rem;
  a {
    border-radius: 3px;
    cursor: pointer;
  }
  .pre {
    padding: 0.5rem 1.5rem 0.5rem 0;
    color: $pink;
    svg {
      margin-right: 0.5rem;
    }
  }
  .pre:hover {
    opacity: 0.5;
  }
  .next {
    padding: 0.5rem 1.5rem;
    color: $white;
    background-color: $pink;
    border: 1px solid $pink;
    svg {
      margin-left: 0.5rem;
    }
  }
  .next:hover {
    color: $pink;
    background-color: $light-pink;
    transition: 0.2s;
  }
}
</style>
