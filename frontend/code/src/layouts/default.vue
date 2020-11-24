<template>
  <div class="default-container">
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
    <!-- Hidden Pages -->
    <!-- Preview -->
    <transition name="fade">
      <Modal v-if="is_preview" page_name="preview">
        <template v-slot:content>
          <Preview />
        </template>
      </Modal>
    </transition>
    <!-- Sidebar -->
    <transition name="fade">
      <Modal v-if="is_sidebar" page_name="sidebar">
        <template v-slot:content>
          <Sidebar />
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['is_preview', 'is_sidebar']),
  }
}
</script>

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
