// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  // 0) Ignore build artifacts
  { ignores: ['dist', '.astro', 'node_modules'] },

  // 1) Base JS rules (object)
  js.configs.recommended,

  // 2) TypeScript recommended (ARRAY → must spread)
  ...tseslint.configs.recommended,

  // 3) Astro recommended (ARRAY → must spread)
  ...astro.configs['flat/recommended'],

  // 4) Project-specific tweaks (optional)
  {
    rules: {
      // your custom rules here if needed
    },
  },
];
