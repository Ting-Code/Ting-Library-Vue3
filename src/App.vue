<template>
  <AppProvider>
    <router-view />
  </AppProvider>
</template>

<script setup lang="ts">
  import { AppProvider } from '@/components/Application/index'
  const change = () => {
    document.documentElement.style.setProperty('--ting-color-primary', 'red')
    document.documentElement.style.setProperty('--ting-color-primary-light-3', 'red')
    document.documentElement.style.setProperty('--ting-color-primary-dark-2', 'red')
  }
</script>

<style lang="scss" scoped>
  .divider {
  }
</style>
