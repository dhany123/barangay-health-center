import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'

export default {
  target: 'universal',

  server: {
    host: '0.0.0.0',
    port: 3001 // default: 3000
  },

  env: {
    baseURL: process.env.NODE_ENV !== 'production' ? 'http://192.168.1.200:3002/' : 'https://api.verifiedprojects.com/',
    webAppBaseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/' : 'https://app.verifiedprojects.com/',
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'BHC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/time-picker' },
    { src: '~/plugins/custom-sweet-alert' },
    { src: '~/plugins/utils' },
    { src: '~plugins/vue-form-wizard' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
    '@nuxtjs/router-extras',

  ],

  dotenv: {
    filename: '.env.dev'
  },

  components: {
    dirs: [
      '~/components',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'vue-swatches/nuxt',
    'vue-sweetalert2/nuxt',
    'nuxtjs-mdi-font',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      local: {
        // token: {
        //   property: 'token',
        //   // global: true,
        //   // required: true,
        //   // type: 'Bearer'
        // },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: { url: '/v1/user/login/admin', method: 'post' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          // user: { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://192.168.1.200:83/api/'
    baseURL: process.env.NODE_ENV !== 'production' ? 'http://192.168.1.200:3002/' : 'https://api.verifiedprojects.com/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Admin Verified Projects',
      author: 'verifiedprojects.com',
      mobileAppIOS: true,
    },
    manifest: {
      name: 'Verified Projects',
      shortName: 'VP',
      lang: 'en',
    },
    // icon: {
    //   fileName: 'vaxrec.png',
    //   sizes: [64, 120, 144, 152, 192, 384, 512]
    // }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#0555ac',
          accent: '#868B8E',
          secondary: '#66dcdc',

        },


      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash'
      })
    ]
  },

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
