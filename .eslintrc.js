module.exports = {
  root: true,
  extends: '@daotl/eslint-config/typescript',
  rules: {
    '@typescript-eslint/unbound-method': 0,
  },
  overrides: [
    {
      files: '*.ts',
      excludedFiles: ['*.mdx', '**/*.md/*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': 0,
        '@typescript-eslint/no-this-alias': 0,
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // defaultGroups from:
              // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/24befb6cd5d7701a87eb2b655e3f0de8115441b9/src/imports.js
              // Side effect imports.
              ['^\\u0000'],
              // Node.js builtins prefixed with `node:`.
              ['^node:'],
              // Packages.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              // Customized: move `@common/*` and `@prisma/client` to the app code group
              ['^@?\\w'],
              // ['^(@(?!(prisma/client)|(@common/)))?\\w'],
              // Absolute imports and other imports such as Vue-style `@/foo`.
              // Anything not matched in another group.
              ['^@common(/.*|$)', '^@prisma/client$', '^'],
              // Relative imports.
              // Anything that starts with a dot.
              ['^\\.'],

              // Internal packages.
              // ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
            ],
          },
        ],
        'n/handle-callback-err': 0,
      },
    },
  ],
}
