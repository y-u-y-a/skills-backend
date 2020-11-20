<template>
  <div class="form contents">
    <div class="form-wrapper">
      <div class="form-title">
        {{ form_title }}
      </div>
      <!-- Page(Template)ごとに切替 -->
      <slot name="content"></slot>
      <!-- end slot -->
      <div class="form-footer">
        <a :href="pre_link" class="pre">
          <font-awesome-icon icon="angle-double-left" />前へ
          </a>
        <a :href="next_link" class="next">
          次へ<font-awesome-icon icon="angle-double-right" />
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'form_title',
    'pre_link',
    'next_link'
  ]
}
</script>

<style lang="scss" scoped>
.form {
  background: $white;
  &-wrapper {
    width: 95%;
    margin: 0 auto;
  }
  &-title {
    @include fontColor;
    padding: 2rem 0;
    font-size: 20px;
    font-weight: bold;
  }
  &-footer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    a {
      border-radius: 3px;
      cursor: pointer;
    }
    .pre {
      padding: 0.5rem 1.5rem 0.5rem 0;
      color: $pink;
      svg {
        margin-right: 0.5rem;
      }
    }
    .pre:hover {
      opacity: 0.5;
    }
    .next {
      padding: 0.5rem 1.5rem;
      color: $white;
      background-color: $pink;
      border: 1px solid $pink;
      svg {
        margin-left: 0.5rem;
      }
    }
    .next:hover {
      color: $pink;
      background-color: $light-pink;
      transition: 0.2s;
    }
  }
}
</style>
