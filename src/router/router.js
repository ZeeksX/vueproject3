import { createRouter, createWebHistory } from 'vue-router';
import DetailBody from '../views/DetailBody.vue';
import CardBody from '../views/CardBody.vue';

const routes = [
  {
    path: '/',
    name: 'CardBody',
    component: CardBody,
  },
  {
    path: '/detail',
    name: 'DetailBody',
    component: DetailBody,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
