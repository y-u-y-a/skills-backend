export default {
  srcDir: 'src/',
  head: {
    title: 'Skills',
    htmlAttrs:{ lang: 'ja'},
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
    '@/assets/sass/app.scss'
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
  },
  // FontAwesome
  fontawesome: {
    component: 'Icon',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  // 参照：https://axios.nuxtjs.org/options
  axios: {
      proxy: true
  },
  // CORS, 本番対策('https://qiita.com/api/v2/')
  // localhost:3000/api/v2/」にアクセスすると,
  // localhost:3000」を「https://qiita.com」へプロキシする
  proxy: {
      '/api': {
        target: 'https://qiita.com',
        pathRewrite: { '/api': '/api/v2' }
      }
  },
  // エイリアス
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
        component: resolve('~/pages/error/404.vue')
      });
    }
  }
}
