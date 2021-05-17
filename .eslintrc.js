module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    "react/jsx-one-expression-per-line": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "tabWidth": 2,
        "printWidth": 90,
        "semi": true,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "arrowParens": "always",
        "endOfLine": "auto"
      },
    ],
  },
};
