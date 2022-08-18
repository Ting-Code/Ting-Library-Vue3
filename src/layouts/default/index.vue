<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <img :src="Logo" alt="" />
      </el-header>
      <el-main>
        <main>
          <admin-main />
        </main>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
  import AdminMain from './admin-main/index.vue'
</script>

<style scoped lang="scss"></style>
