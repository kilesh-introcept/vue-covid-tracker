import { createRouter, createWebHistory } from "vue-router";
import TodoPage from "../Page/todoPage.vue";
import CovidTrackerPage from "../Page/CovidTracker.vue";
import PageNotFound from "../Page/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: TodoPage,
    meta: {
      title: "Todo List",
    },
  },
  {
    path: "/covid",
    name: "CovidTracker",
    component: CovidTrackerPage,
    meta: {
      title: "Covid Tracker",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
    meta: {
      title: "Page Not Found",
    },
    // redirect: "/covid",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
