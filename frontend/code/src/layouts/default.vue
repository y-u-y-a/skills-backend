<template>
  <div class="base-wrapper">
    <TheHeader />
    <main class="base-container">
      <Nuxt />
    </main>
    <TheFooter />

    <transition name="fade">
      <Modal v-if="is_preview" page_name="preview"><!-- Preview -->
        <template v-slot:content>
          <Preview />
        </template>
      </Modal>
      <Modal v-if="is_sidebar" page_name="sidebar"><!-- Sidebar -->
        <template v-slot:content>
          <Sidebar />
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Preview from '@pages/project/Preview';

export default {
  computed: {
    // 変更を監視する必要があるためmapで呼び出し
    ...mapState(['is_preview', 'is_sidebar']),
  },
  components: {
    Preview: Preview,
  },
}
</script>
