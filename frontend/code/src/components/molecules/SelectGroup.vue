<template>
  <div class="form-group">
    <label for="" class="form-label">{{ label }}</label>
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
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  .form-label {
    margin-bottom: 0.5rem;
  }
  select {
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
