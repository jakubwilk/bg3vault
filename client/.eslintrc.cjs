module.exports = {
  env: { browser: true, es2020: true },
  extends: ['next/core-web-vitals', 'eslint:recommended'],
  ignorePatterns: ['dist', 'out', 'eslint.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    strict: ['error', 'global'],
    'prettier/prettier': 'error',
    'react/jsx-curly-brace-presence': [2, 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Config from https://dev.to/julioxavierr/sorting-your-imports-with-eslint-3ped
          ['^react', '^next', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
}
