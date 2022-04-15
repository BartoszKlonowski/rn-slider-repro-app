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
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ["@typescript-eslint"],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
