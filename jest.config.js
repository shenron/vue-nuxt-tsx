module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: ['@vue/app'],
      },
    },
  },
};
