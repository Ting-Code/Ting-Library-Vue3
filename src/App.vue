<template>
  <AppProvider>
    <router-view />
  </AppProvider>
  <el-button c type="error">22222222</el-button>
  <div class="ting">
    wwwwwwwwwwwwwwasdasdwwwwwwwwwww
  </div>
</template>

<script setup lang="ts">
import { AppProvider } from "@/components/Application";
import usePermissionStore from "@/store/modules/permission.js";
import {ElMessage} from 'element-plus'
const {buildRoutesAction} = usePermissionStore()
buildRoutesAction({user: '222222222222'})
ElMessage.error('接口请求超时,请刷新页面重试!')

</script>

<style lang="scss" scoped>
.ting {
  background-color: $color;
}
</style>
