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
  padding-bottom: 2rem;
  .form-checkbox {
    @include row($wrap: wrap, $wrap_align: between);
    label {
      width: 6rem;
      padding: 0.5rem;
      text-align: center;
      margin: 0 1rem 0.5rem 0;
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
