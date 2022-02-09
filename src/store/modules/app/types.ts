export interface AppState {
  theme: string
  colorWeek: boolean
  navbar: boolean
  menu: boolean
  menuCollapse: boolean
  footer: boolean
  themeColor: string
  menuWidth: number
  globalSettings: boolean
  token: string
  [key: string]: unknown
}
