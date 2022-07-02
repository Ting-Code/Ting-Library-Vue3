module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
    // 'vue/setup-compiler-macros': true
    // "es2021": true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended', // vue3
    'prettier',
    'plugin:prettier/recommended',
    'vue-global-api' // auto-import 排除报错
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    // ↓是否校验空函数体
    '@typescript-eslint/no-empty-function': 'off',
    // ↓是否校验函数缺失返回类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // ↓校验变量是否被使用
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    // vue 组件命名为多字节
    'vue/multi-word-component-names': 'off',
    // ↓不能使用TS忽略注释
    '@typescript-eslint/ban-ts-comment': 'off',
    // ↓不能any TS
    '@typescript-eslint/no-explicit-any': 'off',
    // ↓是否禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',
    // ↓正则表达式不必要的转义
    'no-useless-escape': 'off',

    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
