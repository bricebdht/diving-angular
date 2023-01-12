module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'dot-notation': ['error'],
    '@typescript-eslint/typedef': [
      'error',
      {
        memberVariableDeclaration: true,
        propertyDeclaration: false,
        arrowParameter: true,
        variableDeclaration: true,
        parameter: true,
      },
    ],
  },
};
