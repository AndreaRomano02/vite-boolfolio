import { createRouter, createWebHistory } from 'vue-router';

// importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectPage from '../pages/ProjectPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/project', name: 'home', component: ProjectPage },
  ],
});

export { router };
