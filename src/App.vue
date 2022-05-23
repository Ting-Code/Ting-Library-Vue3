<template>
  <AppProvider>
    <router-view />
  </AppProvider>
  <icon icon="list" spin></icon>
</template>

<script setup lang="ts">
import { AppProvider } from "@/components/Application";
import Icon from "@/components/Common/Icon/Icon.vue";
</script>

<style lang="scss">

</style>
