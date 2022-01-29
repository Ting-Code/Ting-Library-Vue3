import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 按需引入 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// mockjs
import { viteMockServe } from 'vite-plugin-mock'


export default defineConfig(({ command }) => {
  return {
    base: './',
    plugins: [
      vue(),
      AutoImport({resolvers: [ElementPlusResolver()],}),
      Components({resolvers: [ElementPlusResolver()],}),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve', // 线下用mock
        prodEnabled: command !== 'serve', // 线上环境用mock
        injectCode: `
          import { setupProdMockServer } from '../mock';
          setupProdMockServer();
        `,
      }),
    ],
    resolve: {
      // 配置路径别名
      alias: {
        "@": "/src",
        "@styles": "/src/styles",
      }
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
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 其他文件进入后缀为目录名
        }
      },
    },

  }
})
