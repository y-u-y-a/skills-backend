<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <div class="form-checkbox">
      <template v-for="(v, index) in val_list">
        <label :key="index" :for="index">
          <input type="checkbox" :value="v" :name="keyname" :id="index">
          {{ v }}
          </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'val_list',
    'keyname',
    "placeholder"
  ]
}
</script>

<style lang="scss" scoped>
.form-group {
  @include column;
  padding-bottom: 4rem;
  .form-checkbox {
    display: flex;
    flex-wrap: wrap;
    label {
      @include fontColor;
      padding: 1rem 2rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      border: 1px solid $gray;
      border-radius: 5px;
      cursor: pointer;
    }
    label:hover {
      color: $white;
      border-color: $brown;
      background: $brown;
      transition: 0.2s;
    }
    input {
      display: none;
    }
  }
}
</style>
