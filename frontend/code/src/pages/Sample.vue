<template>
  <div class="column justify-content-around align-items-center">
    <!-- store/qiita -->
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <a :href="article.url" target="_blank">
          {{ index + 1 }}：{{ article.title }}
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.getArticles();
  },

  computed: {
    ...mapGetters('qiita', ['articles']),
  },

  methods: {
    ...mapActions('qiita', ['getArticles']),
  }
};
</script>
