import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/parse",
      name: "parse",
      component: () => import("@/views/box-selection/index.vue"),
    },
  ],
});

export default router
