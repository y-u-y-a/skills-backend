<template>
  <label for="" class="form-label">{{ label }}</label>
</template>

<script>
export default {
  props: [
    'label'
  ]
}
</script>

<style lang="scss" scoped>
.form-label {
  margin-bottom: 0.5rem;
  color: $brown;
}
</style>
