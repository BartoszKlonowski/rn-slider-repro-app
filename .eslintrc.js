module.exports = {
  extends: ["plugin:react-native/all"],
  env: {
    "react-native/react-native": true
  },
  parser: "babel-eslint",
  plugins: [
    "react",
    "react-native"
  ],
  parserOptions: {
    ecmaFeatures: {
        jsx: true
    }
  }
};
