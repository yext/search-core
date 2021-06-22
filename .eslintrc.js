module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces' : ['error'],
    'no-multi-spaces' : ['error'],
    quotes: ['error', 'single'],
    'space-before-function-paren': ['error', {
      named: 'never',
      anonymous: 'never'
    }],
    'quote-props': ['error', 'as-needed'],
    'max-len': ['error', {
      code: 125,
      ignorePattern: '^import\\s.+\\sfrom\\s.+;$'
    }],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
  },
  overrides: [
    {
      files: ['src/transformers/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      }
    }
  ],
  ignorePatterns: ['dist', 'lib', 'webpack.config.js', 'generate-3rd-party-notices.js'],
};
