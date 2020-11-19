<template>
  <div class="form-group">
    <!-- input -->
    <template v-if="type == 'input'">
      <label for="" class="form-label">{{ label }}</label>
      <input type="text">
    </template>
    <!-- select -->
    <template v-if="type == 'select'">
      <label for="" class="form-label">{{ label }}</label>
      <select name="position" id="">
        <option v-for="v in val_list" :key="v" :value="v">
          {{ v }}
        </option>
      </select>
    </template>
    <!-- textarea -->
    <template v-if="type == 'textarea'">
      <label for="" class="form-label">{{ label }}</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </template>
    <!-- checkbox -->
    <template v-if="type == 'checkbox'">
      <label for="" class="form-label">{{ label }}</label>
      <div class="form-checkbox">
        <template v-for="(v, index) in val_list">
          <label :key="index" :for="index">
            <input type="checkbox" :value="v" :name="keyname" :id="index">
            {{ v }}
            </label>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: [
    'type',
    'label',
    'val_list',
    'keyname'
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
  input, select, textarea {
    border-radius: 5px;
    border: 1px solid $gray;
  }
  input, select {
    height: 2rem;
  }
  select:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  .form-checkbox {
    display: flex;
    flex-wrap: wrap;
    label {
      padding: 1rem 2rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      box-shadow : 0 0 0 1px $gray; // 線の重なり打消
      border-radius: 5px;
      cursor: pointer;
    }
    label:hover {
      color: $white;
      background: $gray;
      transition: 0.2s;
    }
    input {
      display: none;
    }
  }
}
</style>
