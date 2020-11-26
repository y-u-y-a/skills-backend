<template>
  <div class="default-container">
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
    <!-- Hidden Pages -->
    <transition name="fade">
      <!-- Preview -->
      <Modal v-if="is_preview" page_name="preview">
        <template v-slot:content>
          <Preview />
        </template>
      </Modal>
      <!-- Sidebar -->
      <Modal v-if="is_sidebar" page_name="sidebar">
        <template v-slot:content>
          <Sidebar />
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    // 変更を監視する必要があるためmapで呼び出し
    ...mapState(['is_preview', 'is_sidebar']),
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
