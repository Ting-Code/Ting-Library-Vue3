import SvgIcon from "@/components/basic/SvgIcon/index.vue";

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
      TIcon: typeof SvgIcon;
      
    }
}

export {};