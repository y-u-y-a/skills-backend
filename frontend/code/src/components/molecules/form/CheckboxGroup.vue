<template>
  <div class="form-group">
    <FormLabel :label="label" />
    <div class="form-checkbox">
      <template v-for="(v, index) in val_list">
        <label :key="index" :for="index">
          {{ v }}
          <input
            @change="emitter"
            :name="name"
            :value="v"
            :id="index"
            type="checkbox">
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'name',
    'val_list',
    "placeholder"
  ],
  data() {
    return {
      vals: [],
    }
  },
  methods: {
    emitter(e) {
      if (e.target.checked) {
        this.vals.push(e.target.value);
        e.target.parentNode.classList.add('checked');
      }
      else {
        // Extract if unchecked
        this.vals = this.vals.filter((v) => v !== e.target.value);
        e.target.parentNode.classList.remove('checked');
      }
      this.$emit('input', this.vals);
    }
  }
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
    input {
      display: none;
    }
    .checked {
      color: $gray;
      background-color: $brown;
    }
  }
}
</style>
