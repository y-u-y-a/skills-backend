export default {
  srcDir: 'src/',
  head: {
    title: 'Skills',
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
    './assets/sass/app.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    ['bootstrap-vue/nuxt', {css: false}],
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  // 環境変数の設定
  env: {
    PROJECT_NAME: 'Skills',
    API_URL: 'https://qiita.com/'
  },
  // 参照：https://axios.nuxtjs.org/options
  axios: {
      baseURL: process.env.API_URL,
      proxy: true
  },
  // CORS, 本番対策('/api/' -> 'http://api.example.com')
  proxy: {
      '/api/': 'https://qiita.com/'
  },
  build: {
  }
}
