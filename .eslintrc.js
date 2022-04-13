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
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parser: '@typescript-eslint/parser',
      plugins: ["@typescript-eslint"],
      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
};
