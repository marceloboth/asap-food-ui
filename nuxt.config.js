module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'asap-food-ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Asap Food' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/apollo'
  ],

  apollo: {
    // tokenName: 'yourApolloTokenName', // optional, default: apollo-token
    //includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    // authenticationType: 'Basic', // optional, default: 'Bearer'
    // required
    clientConfigs: {
      default: {
        // required  
        httpEndpoint: 'http://localhost:3000/graphql',
        // You can use `wss` for secure connection (recommended in production)
        
        // Use `null` to disable subscriptions
        //wsEndpoint: 'http://localhost:3000', // optional
        
        // LocalStorage token
        //tokenName: 'apollo-token', // optional
        
        // Enable Automatic Query persisting with Apollo Engine
        //persisting: false, // Optional
        
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        //websocketsOnly: false // Optional
      }
    }
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
