export default {
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', {
      treeShake: true, // 'a la carte' works only in .vue file
    }],
    'nuxt-composition-api',
  ],
  extensions: ['ts', 'tsx', 'js'],
  srcDir: 'src/',
  styleResources: {
    scss: ['./src/**/*.scss'],
  },
};
