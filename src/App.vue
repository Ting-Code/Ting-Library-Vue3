<template>
  <el-config-provider>
    <AppProvider>
      <router-view />
    </AppProvider>
  </el-config-provider>
</template>

<script setup lang="ts">
import { AppProvider } from "@/components/Application";

</script>

<style lang="scss">

</style>
