<template>
  <div @click="$store.dispatch('closeModal')" class="modal-window">
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.modal-window{
  z-index: 9999;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:$modal-black;
  cursor: pointer;
}
</style>
