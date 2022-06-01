import SvgIcon from '@/components/Common/Icon/SvgIcon.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon
  }
}

export {}
