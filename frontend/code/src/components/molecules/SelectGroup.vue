<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <select :name="keyname">
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
    'keyname',
    'val_list'
  ]
}
</script>

<style lang="scss" scoped>
.form-group {
  @include column;
  padding-bottom: 4rem;
  select {
    @include fontColor;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid $gray;
  }
  select:hover {
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
