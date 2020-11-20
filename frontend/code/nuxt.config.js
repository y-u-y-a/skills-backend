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
    '@nuxtjs/style-resources',
  ],

  modules: [
    // ['bootstrap-vue/nuxt', {css: false}],
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    'nuxt-fontawesome',
  ],
  styleResources: {
    scss: [
      '@/assets/sass/foundation/vars.scss',
      '@/assets/sass/foundation/mixin.scss'
    ]
  },
  // 環境変数
  env: {
    PROJECT_NAME: 'Skills',
    API_URL: 'https://qiita.com/'
  },
  // FontAwesome
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
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
  // グローバル変数
  build: {
    extend (config, ctx) {
      config.resolve.alias['@atoms'] = '~/components/atoms';
      config.resolve.alias['@molecules'] = '~/components/molecules';
      config.resolve.alias['@organisms'] = '~/components/organisms';
    }
  },
  // 404
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/404.vue')
      })
    }
  }
}
