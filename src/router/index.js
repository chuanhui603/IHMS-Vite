import { createRouter, createWebHistory } from 'vue-router'
import Plan from '../views/PlanView.vue'
import Home from '../views/HomeView.vue'
import Announcement from '../views/AnnouncementList.vue'
import Order from '../views/Orders.vue'
import Detail from '../views/Detail.vue'
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
      // children:[
      //   {path:'us',component:AboutUs,},
      //   {path:'others',component:AboutOthers,},
      //   ],
    },
    {
      path: '/announcements',
      name: 'AnnouncementList',
      component: Announcement
    },
    {
      path: '/orders',
      name: 'orders',
      component: Order,
      children:[
        {path:'detail',component:detail,},
        
        ],
    }
    
  ]
})

export default router
