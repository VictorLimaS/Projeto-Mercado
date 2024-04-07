import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../pages/Inicio.vue';
import Mercado from '../pages/Mercado.vue';

const routes = [
  { path: '/', mame: 'Inicio', component: Inicio },
  { path: '/mercado',name: 'Mercado', component: Mercado },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
