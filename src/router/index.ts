import LogView from "@/views/LogView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HistoryView from "../views/HistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
    },
    {
      path: "/log",
      name: "log",
      component: LogView,
    },
  ],
});

export default router;

// Example of lazy loaded route/component
// {
//   path: "/about",
//   name: "about",
//   // route level code-splitting
//   // this generates a separate chunk (About.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import("../views/AboutView.vue"),
// },
