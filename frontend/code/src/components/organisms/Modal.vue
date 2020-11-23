<template>
  <div @click="$store.dispatch('closeModal')" class="modal-window">
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss">
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
// For transition
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}
</style>
