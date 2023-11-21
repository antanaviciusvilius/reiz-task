import ProductView from '@/views/ProductView/ProductView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ProductsListView from '../views/ProductsListView/ProductsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'productsList',
      component: ProductsListView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
    },
  ],
});

export default router;
