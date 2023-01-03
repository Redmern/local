import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'Home',
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('src/pages/Home.vue'),
      },
      {
        path: 'LightSchedule',
        name: 'Light schedule',
        component: () => import('pages/LightSchedule.vue'),
      },
      {
        path: 'Environment',
        name: 'Environment',
        component: () => import('pages/Environment.vue'),
      },
      {
        path: 'Documentation',
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
