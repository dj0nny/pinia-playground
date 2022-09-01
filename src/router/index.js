import { createRouter, createWebHashHistory } from 'vue-router';

import CounterView from '../views/CounterView.vue';
import PostsView from '../views/PostsView.vue';

const routes = [
  {
    path: '/',
    name: 'counter',
    component: CounterView,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
