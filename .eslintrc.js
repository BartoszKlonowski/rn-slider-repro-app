module.exports = {
  extends: ["@callstack"],
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
