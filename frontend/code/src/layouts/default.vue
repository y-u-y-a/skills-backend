<template>
  <div class="base-wrapper">
    <TheHeader />
    <main class="base-container">
      <Nuxt />
    </main>
    <TheFooter />

    <transition name="fade">
      <!-- Preview -->
      <Modal v-if="$store.state.common.is_preview" page_name="preview">
        <template v-slot:content>
          <Preview />
        </template>
      </Modal>
      <!-- Sidebar -->
      <Modal v-if="$store.state.common.is_sidebar" page_name="sidebar">
        <template v-slot:content>
          <Sidebar />
        </template>
      </Modal>
    </transition>
    <Loading v-if="$store.state.common.loading" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Preview from '@pages/project/Preview';

export default {
  middleware: 'authenticated',
  components: {
    Preview: Preview,
  },
};
</script>
