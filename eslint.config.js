import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
    {
        ignores: ['build'], // Игнорируемые директории
    },
    {
        files: ['**/*.{ts,tsx}'], // Файлы, подлежащие проверке
        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.browser,
        },
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        plugins: {
            // Подключение плагинов
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettier,
            import: importPlugin,
        },
        rules: {
            // Рекомендуемые правила для хуков
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prettier/prettier': ['warn'],
            // Правила для типизации
            '@typescript-eslint/no-explicit-any': ['warn'],
            // Сортировка импортов
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin', // node: fs, path ...
                        'external', // react, redux ...
                        'internal', // Псевдонимы: @app, @shared, @entities
                        ['parent', 'sibling', 'index'], // относительные импорты
                        'object',
                        'type',
                    ],
                    pathGroups: [
                        {
                            pattern: 'app/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: 'pages/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'widgets/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'features/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'entities/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'shared/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: './*.{css,scss,sass}',
                            group: 'index',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always',
                },
            ],
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
    },
);
