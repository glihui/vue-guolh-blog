import Vue from 'vue';
import Router from 'vue-router';
import API from '@/api/api.js';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('./views/Category.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

export default router;
