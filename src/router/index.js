import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../components/pages/HomePage.vue';
import EditPage from '../components/pages/EditPage.vue';
import CreatePage from '../components/pages/CreatePage.vue';
import DetailPage from '../components/pages/DetailPage.vue';
import ContactPage from '../components/pages/ContactPage.vue';
import TypeProjects from '../components/pages/TypeProjects.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {path: '/', name: 'homePage', component: HomePage},
        {path: '/contact', name: 'contactPage', component: ContactPage},
        {path: '/projects/:id', name: 'detailPage', component: DetailPage},
        {path: '/projects/:id/edit', name: 'editPage', component: EditPage},
        {path: '/projects/create', name: 'createPage', component: CreatePage},

        {path: '/types/:id/projects', name: 'typeProjects', component: TypeProjects},

        {path: '/notFoundPage', name: 'notFoundPage', component: NotFoundPage},
        {path: '/:pathMatch(.*)*', redirect: '/notFoundPage'},
    ] 
});

export { router }
