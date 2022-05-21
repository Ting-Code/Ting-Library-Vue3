<template>
  <!-- 需要AppProvider包裹都放这里 减少app代码 -->
  <el-config-provider>
    <slot></slot>
  </el-config-provider>
</template>