import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      // parser: '@typescript-eslint/parser',
      // parserOptions: {
      //   project: true,
      // },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // { plugins: { functional } },
  // functional.configs.strict,
];
