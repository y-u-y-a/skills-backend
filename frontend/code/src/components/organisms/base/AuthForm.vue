<template>
  <div class="container row justify-content-center">
    <div class="auth-form">
      <header>
        <h2>{{ title }}</h2>
        <HeadsUpLink
          :title="`${toggle_name}はこちら`"
          :to="toggle_link" />
      </header>
      <!-- slot -->
      <slot name="top"></slot>
      <main class="column">
        <span style="margin-bottom:1rem;text-align:center;font-size:12px;">
          メールアドレスで{{ title }}する場合
        </span>
        <!-- slot -->
        <slot name="form"></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'toggle_name',
    'toggle_link',
  ]
}
</script>

<style lang="scss" scoped>
.auth-form {
  width: 320px;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  background: $white;
}
header {
  @include column;
  margin-bottom: 2rem;
  h2 {
    margin-bottom: 0.5rem;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
