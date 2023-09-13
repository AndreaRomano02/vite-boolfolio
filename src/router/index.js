import { createRouter, createWebHistory } from "vue-router";

// importo le pagine
import HomePage from "../pages/HomePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import FormEmailPage from "../pages/FormEmailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
    { path: "/projects", name: "projects", component: ProjectsPage },
    { path: "/formEmail", name: "form-email", component: FormEmailPage },
    { path: "/:pathMatch(.*)*", component: NotFoundPage },
  ],
});

export { router };
