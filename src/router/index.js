import { createRouter, createWebHistory } from 'vue-router';
import Service from '../views/Service.vue';
import Glav from '../views/Glav.vue';
import Home from '../views/Home.vue'; // создадим файл Home.vue для главной
import AdminPanel from '../views/AdminPanel.vue'
import Shop from '../views/Shop.vue'
import Catalog from '../views/Catalog.vue'



const routes = [
  { path: '/glav', component: Glav },
  { path: '/', component: Home },
  { path: '/admin', component: AdminPanel },
  { path: '/service', component: Service },
  { path: '/shop', component: Shop },
  { path: '/catalog', component: Catalog }


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;