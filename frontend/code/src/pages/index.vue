<template>
  <div class="column justify-content-around align-items-center">
    <!-- store/index -->
    <div class="contents mb-2">
      <button @click="countPlus()">増加</button>
      <button @click="countMinus()">減少</button>
    </div>
    <div>{{ count }}</div>
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
  computed: {
    ...mapGetters({
      count: 'counter',
      articles: 'qiita/articles'
    }),
  },

  created() {
    this.getArticles();
  },

  methods: {
    ...mapActions({
      countPlus: 'plus',
      countMinus: 'minus',
      getArticles: 'qiita/getArticles'
    }),
  }
};
</script>
