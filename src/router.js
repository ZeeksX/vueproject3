import { createRouter, createWebHistory } from 'vue-router';
import CountryDetail from './components/CountryDetail.vue';
import HomePage from './components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/country/:selectedCountry',
    name: 'CountryDetail',
    component: CountryDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
