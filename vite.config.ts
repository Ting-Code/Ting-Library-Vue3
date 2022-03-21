import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

// 按需引入 element-plus vue自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// mockjs
import { viteMockServe } from 'vite-plugin-mock'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
// 自动ESLint检测热更新
import eslintPlugin from 'vite-plugin-eslint'

// svg 加载
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// vue setup 命名增强<script lang="ts" setup name="OrderList">
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// 配置绝对路径
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
export default defineConfig(({ command }) => {
  return {
    base: './',
    plugins: [
      vue({
        reactivityTransform: true // 开启ref转换
      }),
      VueSetupExtend(),
      vueJsx(),
      viteCompression(), //gzip压缩
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue和vue-router相关函数
        dts: 'types/auto-import.d.ts' // 生成 `auto-import.d.ts` 全局声明
      }),
      Components({ resolvers: [ElementPlusResolver()] }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve', // 线下用mock
        prodEnabled: command !== 'serve', // 线上环境用mock
        injectCode: `
          import { setupProdMockServer } from '../mock';
          setupProdMockServer();
        `
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]'
      }),
      // 设置eslint
      eslintPlugin({
        include: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/design/var.scss";`
        }
      }
    },
    resolve: {
      // 配置路径别名
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/'
        },
        {
          find: '@',
          replacement: pathResolve('src') + '/'
        },
        {
          find: '@ds',
          replacement: pathResolve('src') + '/design/'
        }
      ]
    },
    build: {
      minify: 'terser', // 要配置terser压缩才有这个功能 默认es buildld
      // terserOptions: {
      //   compress: {
      //     // 生产环境移除console.log
      //     drop_console: true,
      //     drop_debugger: true,
      //   },
      // },
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]' // 其他文件进入后缀为目录名
        }
      }
    }
  }
})
