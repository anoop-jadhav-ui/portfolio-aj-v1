import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import nextPlugin from '@next/eslint-plugin-next'
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
            react: {
                version: 'detect',
            },
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
            '@next/next': nextPlugin,
            react,
            prettier,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@next/next/no-img-element': 'off',
            'react/no-unknown-property': 'warn',
        },
    },
    {
        files: ['src/components/Atoms/3DModels/**/*.{ts,tsx}', 'src/components/Molecules/Stars/**/*.{ts,tsx}'],
        rules: {
            'react/no-unknown-property': 'off',
        },
    },
    eslintConfigPrettier,
]
