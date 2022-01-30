<template>
  <router-view />
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
const count = ref(0);
const baseUrl = import.meta.env.VITE_BASE_API;
</script>

<style lang="scss" scoped></style>
