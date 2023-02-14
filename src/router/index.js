import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue"
import Pdf from "../views/Pdf.vue"

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
