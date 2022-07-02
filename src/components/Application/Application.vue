<template>
  <!-- 需要AppProvider包裹都放这里 减少app代码 -->
  <el-config-provider namespace="ting">
    <slot></slot>
  </el-config-provider>
</template>

<script lang="ts" setup name="AppLication">
  import { prefixCls as prefix } from '@/settings/designSetting'
  import { createAppProviderContext } from './useAppContext'
  const isMobile = ref(false)
  const prefixCls = ref(prefix)
  const isSetState = ref(false)

  // 变量注入全局
  createAppProviderContext({ prefixCls, isMobile })
</script>
