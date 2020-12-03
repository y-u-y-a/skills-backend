<template>
  <div class="base-wrapper">
    <TheHeader />
    <main class="base-container">
      <Nuxt />
    </main>
    <TheFooter />

    <transition name="fade">
      <!-- Preview -->
      <BaseModal v-if="$store.state.common.is_preview" page_name="preview">
        <template v-slot:content>
          <Preview />
        </template>
      </BaseModal>
      <!-- TheSidebar -->
      <BaseModal v-if="$store.state.common.is_sidebar" page_name="sidebar">
        <template v-slot:content>
          <TheSidebar />
        </template>
      </BaseModal>
    </transition>
    <!-- TheLoading -->
    <TheLoading v-if="$store.state.common.loading" />
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
