<template>
  <div class="default-container">
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
// Fixed Footer
.default-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
@media screen and (max-width: $bp) {
  main {
    padding-bottom: 4rem;
  }
}
</style>
