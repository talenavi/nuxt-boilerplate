import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'function-paren-newline': ['error', 'consistent'],
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
    },
  },
)
  .prepend()
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  });
