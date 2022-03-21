<template>
  <!-- <router-view /> -->
  <div @click="handle">{{a}}</div>
</template>

<script setup lang="ts">
  const a = ref(0)
  const handle = () => {
    a.value ++
  }
</script>

<style lang="scss">
@import '@/design/index.scss'
</style>
