import { createRouter, createWebHashHistory } from "vue-router";
import Student from "../pages/Student.vue";
import Home from "../pages/Home.vue";
import UploadForm from "../pages/UploadForm.vue";

const routes = [
  { path: "/uploadForm", component: UploadForm },
  { path: "/student/:id", component: Student },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
