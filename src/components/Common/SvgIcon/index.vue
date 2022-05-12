<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { isExternal as exrernal } from '@/utils/validator/is.js'
import {  PropType } from 'vue'

const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true
  },
  className: {
    type: String as PropType<string>,
    default: ''
  }
})
// 判断是否为外部图标
const isExternal = computed(() => exrernal(props.name))
// 外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.name}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`
}))
// 项目内图标
const iconName = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
