<template>
  <AppProvider>
    <router-view />
  </AppProvider>
</template>

<script setup lang="ts">
import { AppProvider } from "@/components/Application";
import usePermissionStore from "@/store/modules/permission.js";

const {buildRoutesAction} = usePermissionStore()
buildRoutesAction()
</script>

<style lang="scss">

</style>
