<template>
  <div class="loading-window">
    <div class="loading">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-window {
  @include row(center, center);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($white, 0.6);
}

.loading, .loading * {
      box-sizing: border-box;
    }

    .loading {
      height: 66px;
      width: 66px;
      padding: 3px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      overflow: hidden;
      box-sizing: border-box;
    }
    .loading .circle {
      position:absolute;
      display:block;
      border-radius:50%;
      border: 3px solid $pink;
      opacity: 1;
    }

    .loading .circle:nth-child(1) {
      height: 60px;
      width: 60px;
      animation : loading-circle1-animation 1.5s infinite linear;
      border-width: 3px;
    }
    .loading .circle:nth-child(2) {
      height: calc(60px * 0.65);
      width: calc(60px * 0.65);
      animation : loading-circle2-animation 1.5s infinite linear;
      border-width: 2px;
    }
    .loading .circle:nth-child(3) {
      height: calc(60px * 0.1);
      width: calc(60px * 0.1);
      animation:loading-circle3-animation 1.5s infinite linear;
      border-width: 1px;
    }

    @keyframes loading-circle1-animation{
      0% {
        transform: rotateZ(20deg) rotateY(0deg);
      }
      100% {
        transform: rotateZ(100deg) rotateY(360deg);
      }
    }
    @keyframes loading-circle2-animation{
      0% {
        transform: rotateZ(100deg) rotateX(0deg);
      }
      100% {
        transform: rotateZ(0deg) rotateX(360deg);
      }
    }
    @keyframes loading-circle3-animation{
      0% {
        transform: rotateZ(100deg) rotateX(-360deg);
      }
      100% {
        transform: rotateZ(-360deg) rotateX(360deg);
      }
    }
</style>
