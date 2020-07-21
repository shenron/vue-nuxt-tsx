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
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8080/query',
      },
    },
  },
};
