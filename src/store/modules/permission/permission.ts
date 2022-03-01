import { store } from '@/store'
import { defineStore } from 'pinia'
import { PermissionState } from './type'

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    // Backstage menu list 后台菜单列表
    backMenuList: []
  }),
  getters: {
    getBackMenuList(): any[] {
      return this.backMenuList
    }
  },
  actions: {
    // 添加路由
    async buildRoutesAction(): Promise<any[]> {}
  }
})

export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
