import userRoutes from './user-routes.js';

const { createWebHistory, createRouter } =VueRouter

const routes = [
 ...userRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router