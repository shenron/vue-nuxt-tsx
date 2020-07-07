module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: ['@vue/app'],
      },
    },
  },
  moduleNameMapper: {
    'nuxt-composition-api': 'nuxt-composition-api/lib/cjs/entrypoint.js',
  },
};
