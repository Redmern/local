import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/LightSchedules',
        name: 'Light schedules',
        component: () => import('src/pages/LightSchedules.vue'),
      },
      {
        path: '/Environment',
        name: 'Environment',
        component: () => import('pages/Environment.vue'),
      },
      {
        path: '/Documentation',
        name: 'Documentation',
        component: () => import('pages/Documentation.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
