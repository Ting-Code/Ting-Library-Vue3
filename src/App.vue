<template>
  <AppProvider>
    <router-view />
  </AppProvider>
</template>

<script setup lang="ts">
import { AppProvider } from "@/components/Application";
import usePermissionStore from "@/store/modules/permission.js";

const {buildRoutesAction} = usePermissionStore()
buildRoutesAction({user: '222222222222'})
</script>

<style lang="scss">

</style>
