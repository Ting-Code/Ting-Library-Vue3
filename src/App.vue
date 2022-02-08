<template>
  <router-view />
  <t-icon name="list" clas="啊啊"></t-icon>
  <SvgIcon name="sss"></SvgIcon>
  <div>{{ count }}</div>

  <el-button type="primary">aaaaaa</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from './components/basic/SvgIcon/index.vue'
const count = ref(12)
</script>

<style lang="scss" scoped>
.icon {
  font-size: 50px;
}
</style>
