module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@constants': './src/app/constants',
          '@components': './src/app/components',
          '@screens': './src/app/screens',
          '@store': './src/data/store',
          '@styles': './src/app/styles',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
