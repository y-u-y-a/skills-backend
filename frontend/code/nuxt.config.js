export default {
  srcDir: 'src/',
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    './src/assets/sass/app.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    ['bootstrap-vue/nuxt', {css: false}],
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  // 環境変数の設定
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
    API_URL: process.env.API_URL
  },
  // 参照：https://axios.nuxtjs.org/options(axiosに渡すパラメータを設定できる)
  axios: {
      proxy: true
  },
  // key名の先頭にvalue部分が追加される(例：'/api/v2/items')
  proxy: {
      '/api/': process.env.API_URL
  },

  build: {
  }
}
