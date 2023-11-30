import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "@/views/BlogView.vue";
import ErrorView from "@/views/ErrorView.vue";
import NotFound from "@/views/NotFound.vue";
import BlogDetailsView from "../views/BlogDetailsView.vue";
// import ProjectView from "@/views/ProjectView.vue";
// import ProjectDetailsView from "@/views/ProjectDetailsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/blogDetails",
    name: "blogDetails",
    component: BlogDetailsView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
  },
  {
    path: "*",
    component: NotFound,
  },
  // {
  //   path: "/projects",
  //   name: "projects",
  //   component: ProjectView,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
