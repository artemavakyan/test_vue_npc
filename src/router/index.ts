import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import { useAuth } from '@/composables/useAuth'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/LoginPage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/ProfilePage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth();

  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'login' });
  } else {
    next();
  }
});


export default router
