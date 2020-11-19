<template>
  <div class="container">
    <!-- <ul>
      <li v-for="(post, index) in posts" :key="index">
        <a :href="'post.url'" target="_blank">{{ index + 1 }}：{{ post.title }}</a>
      </li>
    </ul> -->
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      posts: null
    }
  },

  created() {
    console.log('API_URL(https://qiita.com/)：', process.env.API_URL)
    this.access();
  },

  methods: {
    async access() {
      // API
      const res = await axios.get('/api/v2/items');
      let get_list = res.data;
      this.posts = get_list;
    }
  }
};
</script>
