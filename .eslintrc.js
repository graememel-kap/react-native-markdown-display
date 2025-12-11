module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
      react: {
          version: require('./package.json').peerDependencies.react,
      },
  }
};
