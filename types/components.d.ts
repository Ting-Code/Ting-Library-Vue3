import SvgIcon from '@/components/Common/SvgIcon/index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TIcon: typeof SvgIcon
  }
}

export {}
