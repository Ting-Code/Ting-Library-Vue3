import { defineStore } from 'pinia'
import {ThemeEnum} from "@/enums/appEnum.js";
import type {
  ProjectConfig,
} from '/#/config';
export interface AppState {
  themed?: ThemeEnum;
  pageLoading: boolean;
  projectConfig: ProjectConfig | null;
}

const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    themed: undefined,
    pageLoading: false,
    projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
  }),

  getters: {
    appCurrentSetting(state: AppState): AppState {
      return { ...state }
    }
  },

  actions: {
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial)
    },

    // Change theme color
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    }
  }
})

export default useAppStore
