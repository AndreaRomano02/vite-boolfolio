import { createRouter, createWebHistory } from 'vue-router';

// importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: HomePage },
    // { path: '/projects/', name: 'home', component: HomePage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
});

export { router };
