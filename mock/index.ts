import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import system from './module/system.js'
import user from './module/user.js'

export function setupProdMockServer() {
  createProdMockServer([...system, ...user])
}