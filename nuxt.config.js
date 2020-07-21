export default {
  srcDir: 'src/',
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', {
      // 'a la carte' works only in .vue file, toggle to false include all components
      treeShake: true,
    }],
    'nuxt-composition-api',
  ],
  extensions: ['ts', 'tsx', 'js'],
  styleResources: {
    scss: ['./src/**/*.scss'],
  },
  modules: ['@nuxtjs/apollo'],
  plugins: [
    '~/plugins/importVuetify',
    '~/plugins/provideApolloClient.ts',
  ],
  // Give apollo module options
  apollo: {
    cookieAttributes: {
      expires: 7, // optional, default: 7 (days)
      path: '/graphql', // optional
      secure: false,
    },
    // optional, default: false (this includes graphql-tag for node_modules folder)
    includeNodeModules: true,
    // (Optional) Default 'apollo' definition
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8080/query',
      },
    },
  },
};
