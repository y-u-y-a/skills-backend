<template>
  <footer>
    <div class="row justify-content-between">
      <LinkButton
        :link="pre_link"
        link_name="前へ"
        before_icon="angle-double-left"
        class_name="text-color" />
      <LinkButton
        :link="next_link"
        link_name="次へ"
        after_icon="angle-double-right"
        class_name="bg-color" />
    </div>
  </footer>
</template>

<script>
export default {
  props: [
    'pre_link',
    'next_link'
  ]
}
</script>

<style lang="scss" scoped>
footer {
  padding: 2rem 0 1rem;
}
</style>
