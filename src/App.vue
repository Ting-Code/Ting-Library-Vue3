<template>
  <el-button type="error" @click="handleClick">按钮</el-button>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const count = ref(0)
const baseUrl = import.meta.env.VITE_BASE_API
const handleClick = () => {
  axios.get(baseUrl as string).then(res => {
    console.log(res)
  })
}

const handleto = () => {
  console.log('执行')
}
</script>

<style>

</style>
