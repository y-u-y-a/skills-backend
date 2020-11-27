<template>
  <main class="container">
    <section>
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p>{{ messages }}</p>
    </section>
  </main>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle',
    'messages'
  ]
}
</script>

<style lang="scss" scoped>
main {
  @include row(center, center);
  margin-top: 5rem;
  color: $dark-brown;
  h2 {
    margin-bottom: 3rem;
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 3rem;
    font-size: 24px;
  }
  p {
    line-height: 32px;
  }
}
</style>
