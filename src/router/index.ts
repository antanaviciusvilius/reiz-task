import { createRouter, createWebHistory } from 'vue-router';
import ProductsListView from '../views/ProductsListView/ProductsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsListView
    }
  ]
})

export default router
