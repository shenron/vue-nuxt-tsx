export default {
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  plugins: ['~/plugins/composition-api'],
  extensions: ['ts', 'tsx', 'js'],
  srcDir: 'src/',
  styleResources: {
    scss: ['./src/**/*.scss'],
  },
};
