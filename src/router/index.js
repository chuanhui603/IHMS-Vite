import { createRouter, createWebHistory } from 'vue-router'
import Plan from '../views/PlanView.vue'
import Home from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'
import PlanCreate from '../views/PlanCreate.vue'
import PlanDetail from '../views/PlanDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/plan',
      name: 'plan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Plan,
      children:[
        {path:'chart',component:ChartView,},
        {path:'create',component:PlanCreate,},
        {path:'/plan/:planID/',
        component:PlanDetail,
      
        },
        ],
    }
  ]
})

export default router
