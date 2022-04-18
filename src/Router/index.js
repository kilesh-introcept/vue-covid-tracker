import { createRouter, createWebHistory } from "vue-router";
import TodoPage from "../Page/todoPage.vue";
import CovidTrackerPage from "../Page/CovidTracker.vue";

const routes = [
  {
    path: "/",
    component: TodoPage,
  },
  {
    path: "/covid",
    component: CovidTrackerPage,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/covid",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
