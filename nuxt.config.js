export default {
  buildModules: ['@nuxt/typescript-build'],
  plugins: ['~/plugins/composition-api'],
  extensions: ['ts', 'tsx', 'js'],
  srcDir: 'src/',
  styleResources: {
    scss: ['./src/**/*.scss']
  },
}

