<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import {ref} from "vue";
const count = ref(0)
const handleClick: Function = () => {
  console.log('执行')
  axios.get('/api/get').then((res) => {
    console.log(res);
  })
}

const handleto = () => {
  console.log('执行')
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <el-button type="error" @click="handleClick">按钮</el-button>
  <button @click="()=> {
    count++
    handleto()
  }">啊啊{{count}}</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
