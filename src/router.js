import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue'
import Addmembers from './views/addMembers.vue'
import Calculator from './views/calculator.vue'
import Meal from './views/meal.vue'
import  MealDetails from './views/mealDetails.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/addMembers', component: Addmembers },
    { path: '/calculator', component: Calculator },
    { path: '/meal', component: Meal },
    {
      path: '/meal/:id',
      component: MealDetails,
      props:true,
    },
  ]
});

export default router;
