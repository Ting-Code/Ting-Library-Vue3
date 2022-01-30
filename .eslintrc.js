module.exports = {
    "env": {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        'vue/setup-compiler-macros': true
        // "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",// vue3
        "prettier"
    ],
    "parserOptions": {
        // "ecmaVersion": "latest",
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
        'import/no-unresolved': [0],
        'vue/multi-word-component-names': 'off',
        'vue/no-deprecated-router-link-tag-prop': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'no-async-promise-executor': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/html-self-closing': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-useless-escape': 'off',
        'no-bitwise': 'off',
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        'vue/no-setup-props-destructure': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        'vue/script-setup-uses-vars': ['off'],
        //can config  to 2 if need more then required
        '@typescript-eslint/no-unused-vars': [0],
        'no-param-reassign': ['off']
    }
}
