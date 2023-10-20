// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: " HomePage" */ '@/views/HomePage.vue'),
      },
      {
      path: '/ProductsPage',
      name: 'ProductPage',
      component: () => import(/* webpackChunkName: " ProductPage" */ '@/views/ProductsPage.vue'),
      },
    ]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
