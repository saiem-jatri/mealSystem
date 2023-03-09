import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue'
import Addmembers from './views/addMembers.vue'
import Calculator from './views/calculator.vue'
import Meal from './views/meal.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/addMembers', component: Addmembers },
    { path: '/calculator', component: Calculator },
    { path: '/meal', component: Meal },
  ]
});

export default router;
