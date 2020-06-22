export default {
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', {
      // 'a la carte' works only in .vue file, toggle to false include all components
      treeShake: true,
    }],
    'nuxt-composition-api',
  ],
  plugins: ['~/plugins/importVuetify'],
  extensions: ['ts', 'tsx', 'js'],
  srcDir: 'src/',
  styleResources: {
    scss: ['./src/**/*.scss'],
  },
};
