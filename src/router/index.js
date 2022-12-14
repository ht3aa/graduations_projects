import { createRouter, createWebHashHistory } from "vue-router";
import Student from "../pages/Student.vue";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/student/:id", component: Student },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
