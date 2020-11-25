<template>
  <div>
    <Tag v-for="v in val_list"
      :key="v"
      @click="emitter(v)"
      :value="v"
      class="mr-05 mb-05" />
  </div>
</template>

<script>
export default {
  props: ['val_list'],
  methods: {
    emitter(val) {
      this.$emit('click', val);
    }
  }
}
</script>
