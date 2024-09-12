import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import { default as react, default as reactPlugin } from 'eslint-plugin-react'
import globals from 'globals'
import prettier from 'prettier'

export default [
    {
        ignores: ['dist/**/*'],
    },
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        ignores: ['dist/**/*'],
        ...reactPlugin.configs.flat.recommended,
        settings: {
            version: 'detect',
        },
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
            react,
            prettier,
        },
        rules: {
            'react/no-unknown-property': 'warn',
        },
    },
    eslintConfigPrettier,
]
