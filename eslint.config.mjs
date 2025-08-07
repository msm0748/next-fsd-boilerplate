import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            { target: './src/features', from: './src/app' },
            { target: './src/features', from: './src/widgets' },
            { target: './src/entities', from: './src/app' },
            { target: './src/entities', from: './src/widgets' },
            { target: './src/entities', from: './src/features' },
            { target: './src/shared', from: './src/app' },
            { target: './src/shared', from: './src/widgets' },
            { target: './src/shared', from: './src/features' },
            { target: './src/shared', from: './src/entities' },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
