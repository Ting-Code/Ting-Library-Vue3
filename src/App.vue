<template>
  <AppProvider>
    <router-view />
  </AppProvider>
  <el-button type="primary" @click="change">66666666</el-button>
</template>

<script setup lang="ts">
import { AppProvider } from "@/components/Application";
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
