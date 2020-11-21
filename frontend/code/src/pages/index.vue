<template>
  <div class="column justify-content-around align-items-center">
    <!-- store/index -->
    <div class="contents mb-2">
      <button @click="$store.commit('add')">増加</button>
      <button @click="$store.commit('remove')">減少</button>
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
export default {
  computed: {
    count() {
      return this.$store.state.counter;
    },
    articles() {
      return this.$store.state.qiita.articles; // state
      // return this.$store.getters['qiita/articles']; // getters
    }
  },

  created() {
    this.$store.dispatch('qiita/getArticles');
  },

  methods: {
  }
};
</script>
