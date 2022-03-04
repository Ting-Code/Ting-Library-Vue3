module.exports = {
    "env": {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        // 'vue/setup-compiler-macros': true
        // "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",// vue3
        "prettier"
    ],
    // "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "es6",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
        ecmaFeatures: {
            jsx: true,
            tsx: true
        }
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': 'off',
        'no-plusplus': 'off',
        // ↓是否校验空函数体
        '@typescript-eslint/no-empty-function': 'off',
        // ↓是否校验函数缺失返回类型
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // ↓校验变量是否被使用
        '@typescript-eslint/no-unused-vars': [
            'error',
            { varsIgnorePattern: '.*', args: 'none' }
        ],
        // vue 组件命名为多字节
        'vue/multi-word-component-names': 'off',
        // ↓不能使用TS忽略注释
        '@typescript-eslint/ban-ts-comment': 'off',
        // ↓不能any TS
        '@typescript-eslint/no-explicit-any': 'off',
        // ↓是否禁止使用特定类型
        '@typescript-eslint/ban-types': 'off',
    }
}
