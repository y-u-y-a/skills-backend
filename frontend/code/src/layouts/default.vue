<template>
  <div class="container">
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
// Fixed Footer
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
