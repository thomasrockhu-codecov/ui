module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
    useJSXTextNode: true,
  },
  plugins: ['react', 'jest', 'react-hooks', '@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.d.ts'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/forbid-prop-types': [2, { forbid: ['any', 'array'] }],
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'prefer-destructuring': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
};
