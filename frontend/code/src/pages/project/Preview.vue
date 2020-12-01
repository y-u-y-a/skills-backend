<template>
  <Form form_title="業務経歴書（スキルシート）" class="preview">
    <template v-slot:content>
      <ProfileTable class="mb-2" />
      <ProjectTable />
    </template>
  </Form>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.preview {
  padding-bottom: 5rem;
  background: $white;
  cursor: default;
}
</style>
