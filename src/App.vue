<template>
  <AppProvider>
    <router-view />
  </AppProvider>
</template>

<script setup lang="ts">
  import { AppProvider } from '@/components/Application/index'
</script>

<style lang="scss" scoped>
  .divider {
  }
</style>
