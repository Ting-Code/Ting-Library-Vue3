import { resultSuccess, resultError, getRequestToken, requestParams } from '../util.js';
import { MockMethod } from 'vite-plugin-mock';

const dashboardRoute = {
  name: 'Dashboard',
  id: 0,
  type: 'menu',
  children: [
    {
      id: 1,
      name: 'Analysis',
      type: 'menu',
      children: [
        {
          id: 3,
          type: 'button',
          name: 'add',
        },
        {
          id: 4,
          type: 'button',
          name: 'edit',
        },
      ],
    },
    {
      id: 2,
      type: 'menu',
      name: 'Workbench',
    },
  ],
};


export default [
  {
    url: '/fake-api/menu/list',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const id = "1"
      let menu: Object[];
      switch (id) {
        case '1':
          menu = [dashboardRoute, ];
          break;
        // @ts-ignore
        case '2':
          menu = [dashboardRoute, ];
          break;
        default:
          menu = [];
      }
      return resultSuccess(menu);
    },
  },
] as MockMethod[];
