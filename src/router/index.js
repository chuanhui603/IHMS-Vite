import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Plan from '../views/PlanView.vue'
import Home from '../views/HomeView.vue'
import Announcement from '../views/AnnouncementList.vue'
import Orders from '../views/Orders.vue'
import PointRecord from '../views/PointRecord.vue'
import BuyPoint from '../views/BuyPoint.vue'
import PlanCreate from '../views/PlanCreate.vue'
import DietDetail from '../views/DietDetail.vue'
import SportDetail from '../views/SportDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/plan',
      name: 'plan',   
      component: Plan,  
      children:[
        {path:'create',component:PlanCreate,},
        {path:'diet/create',component:DietDetail,},
        {path:'sport/create',component:SportDetail,},
        ]
      ,beforeEnter:(to, from) => {
        if(!localStorage.getItem('currentMember')){
          return {name:'login'}
        }          
        },
     
    },
    {
      path: '/announcements',
      name: 'AnnouncementList',
      component: Announcement
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
     
    },
    
    {
      path: '/PointRecord',
      name: 'PointRecord',
      component: PointRecord
    },
    {
      path: '/BuyPoint',
      name: 'BuyPoint',   
      component: BuyPoint 
    },
    {
      path:'/login',
      name: 'login',
      component: login
    }
    
    
  ]
})       
export default router
