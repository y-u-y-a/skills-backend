<template>
  <div>
    <PageNav />
    <div class="contents">
      <div class="form">
        <div class="form-title">
          {{ form_title }}
        </div>
        <!-- Page(Template)ごとに切替 -->
        <slot name="content"></slot>

        <div class="form-footer">
          <NuxtLink :to="pre_link" class="pre">
            <Icon icon="angle-double-left" />
            前へ
          </NuxtLink>
          <NuxtLink :to="next_link" class="next">
            次へ
            <Icon icon="angle-double-right" />
          </NuxtLink>
        </div>
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
  padding: 0 1rem;
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
