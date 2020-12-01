<template>
  <div
    @click.self="$store.commit('common/togglePage', page_name)"
    class="modal-window">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: [
    'page_name'
  ]
}
</script>

<style lang="scss" scoped>
.modal-window{
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  cursor: pointer;
  overflow: scroll; // 追加
}
</style>
