const prettierConfig = require('./.prettierrc.js');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-sequences': 'error',
    'array-bracket-spacing': 'error',
    'computed-property-spacing': ['error', 'never'],
    curly: 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'one-var-declaration-per-line': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    'array-callback-return': 'off',
    'prefer-const': 'error',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'off',
    'no-prototype-builtins': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/href-no-hash': [0],
    'react/display-name': 0,
    'react/no-deprecated': 'error',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'prettier/prettier': ['error', prettierConfig],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
