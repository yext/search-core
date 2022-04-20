module.exports = {
  extends: [
    '@yext/slapshot/typescript'
  ],
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
