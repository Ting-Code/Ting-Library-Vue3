import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": "/src",
      "@styles": "/src/styles",
    }
  },
  build: {
    minify: 'terser', // 要配置terser压缩才有这个功能 默认es buildld
    terserOptions: {
      compress: {
        // 生产环境移除console.log
        drop_console: true,
        drop_debugger: true,
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 其他文件进入后缀为目录名
      }
    }
  }
})
