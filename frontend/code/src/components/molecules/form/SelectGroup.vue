<template>
  <div class="select-group column pb-1">
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
.select-group {
  min-width: 6rem;
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
