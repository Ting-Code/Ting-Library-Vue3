<template>
  <svg
      :style="getStyle"
      :class="['svg-icon', $attrs.class, spin && 'svg-icon-spin']"
      aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import {  PropType } from 'vue'

const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true
  },
  spin: {
    type: Boolean,
    default: false,
  },
  size: {
    type: [Number, String],
    default: 16,
  },
})
// 项目内图标
const iconName = computed(() => `#icon-${props.name}`)
const getStyle = computed((): CSSProperties => {
  const { size } = props;
  let s = `${size}`;
  s = `${s.replace('px', '')}px`;
  return {
    width: s,
    height: s,
  };
});
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
