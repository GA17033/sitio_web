import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../Views/Inicio.vue"
import Pdf from "../Views/Pdf.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Inicio,
  },
  {
    path: "/pdf",
    name: "pdf",
    component: Pdf,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
