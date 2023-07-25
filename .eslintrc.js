module.exports = {
    root: true,

    env: {
        node: true,
    },
    extends: [
        '@vue/standard',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
    ],

    plugins: ['prettier'],

    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
    },

    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': 'off',
        'keyword-spacing': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: false,
                },
            },
        ],
        // 'vue/html-indent': ['error', 4],
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'prettier/prettier': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/singleline-html-element-content-newline': 'off',
    },
}
