import { createRouter, createWebHistory } from 'vue-router';

// importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/project', name: 'project', component: ProjectPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
});

export { router };
