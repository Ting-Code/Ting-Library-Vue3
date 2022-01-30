<template>
    <app></app>
    <HelloWorld msg="啊啊啊"></HelloWorld>
    <div class="app"></div>
    <el-button type="error" @click="handleClick">按钮</el-button>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import app from './components/app.vue';
const count = ref(0);
const baseUrl = import.meta.env.VITE_BASE_API;
const handleClick = () => {
    axios.get(baseUrl as string).then(res => {
        console.log(res);
    });
};

const handleto = () => {
    console.log('执行');
};
</script>

<style lang="scss" scoped>
.app {
    border: 1px solid red;
}
</style>
