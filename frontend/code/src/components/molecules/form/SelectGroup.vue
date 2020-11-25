<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <select @change="emitter">
      <option v-for="v in val_list" :key="v" :value="v">
        {{ v }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'val_list'
  ],
  methods: {
    emitter(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  @include column;
  min-width: 6rem;
  padding-bottom: 2rem;
  select {
    @include formComponent;
    height: 2rem;
  }
  select:hover {
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
