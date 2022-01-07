import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "projectsPage" */
        "../views/ProjectsPage.vue"
      ),
  },
  {
    path: "/projects/:slug",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "projectPage" */
        "../views/ProjectPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => {
    return { left: 0, top: 0, behavior: "auto" };
  },
});

export default router;
