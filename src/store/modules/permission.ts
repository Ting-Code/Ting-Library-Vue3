import { store } from '@/store'
import { defineStore } from "pinia"
import {AppRouteRecordRaw, Menu} from "@/router/type"
import {getMenuList} from "@/api/permission";

export interface PermissionState {
  backMenuList: Menu[];
  sidebarMenuList: Menu[];
}



const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    // 后台菜单 权限列表
    backMenuList: [],
    // menu List 菜单列表
    sidebarMenuList: [],
  }),
  getters: {
    getBackMenuList(): Menu[] {
      return this.backMenuList;
    },
    getSidebarMenuList(): Menu[] {
      return this.sidebarMenuList;
    },
  },
  actions: {
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
    },
    setSidebarMenuList(list: Menu[]) {
      this.sidebarMenuList = list;
    },

    resetState(): void {
      this.backMenuList = [];
      this.sidebarMenuList=[]
    },

    // 请求获取路由 菜单 权限 等信息
    async buildRoutesAction(params:any): Promise<AppRouteRecordRaw[]> {
      const backMenuList = await getMenuList(params)
      console.log(backMenuList, 'backMenuList')
      return backMenuList;
    },
  },
});






export default usePermissionStore
