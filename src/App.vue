<template>
  <AppProvider>
    <router-view />
  </AppProvider>
  <svg-icon name="list"></svg-icon>
  <Icon icon="mdi-light:home" />
</template>

<script setup lang="ts">
import { AppProvider } from "@/components/Application";
import SvgIcon from "@/components/Common/Icon/SvgIcon.vue";
import { Icon } from '@iconify/vue';
</script>

<style lang="scss">

</style>
