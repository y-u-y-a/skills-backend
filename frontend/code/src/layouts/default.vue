<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@templates/TheHeader.vue';
import TheFooter from '@templates/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
