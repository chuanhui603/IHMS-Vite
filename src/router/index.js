import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import testmember from '../views/testmember.vue'
import Plan from '../views/PlanView.vue'
import Home from '../views/HomeView.vue'
import Announcement from '../views/AnnouncementList.vue'
import Orders from '../views/Orders.vue'
import PointRecord from '../views/PointRecord.vue'
import BuyPoint from '../views/BuyPoint.vue'
import PlanCreate from '../views/PlanCreate.vue'
import DietDetail from '../views/DietDetail.vue'
import SportDetail from '../views/SportDetail.vue'
import AnnouncementView from '../views/AnnouncementView.vue';
import MessageBoardList from '../views/MessageBoardList.vue';
import MessageBoardRelease from '../views/MessageBoardRelese.vue';
import MessageBoardDetail from '../views/MessageBoardDetail.vue';
import CustomService from '../views/CustomService.vue';
import CustomServiceList from '../views/CustomServiceList.vue'; 
import CustomServiceReply from '../views/CustomServiceReply.vue';
import AIquestion from '../views/AIquestion.vue';
import ArticleList from '../views/ArticleList.vue'
import ArticleDetail from '../views/ArticleDetail.vue';

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
      { path: '/announcements/:announcementId',
      name: 'AnnouncementView',
      component: AnnouncementView,
      props: true
    },  
    {
      path: '/MessageBoardList', 
      name: 'MessageBoardList',
      component: MessageBoardList
    },
    {
      path: '/message-board-release',
      name: 'MessageBoardRelease',
      component: MessageBoardRelease
    },
    {
      path: '/message-board/:messageId', 
      name: 'MessageBoardDetail',
      component: MessageBoardDetail,
      props: true
    },
    {
      path: '/testmember/:memberId?', 
      name: 'testmember',
      component: testmember,
      props: true,
    },
    {
      path: '/ai-question',
      name: 'AIquestion',
      component: AIquestion,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
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
      path: '/custom-service',
      name: 'CustomService',
      component: CustomService,
    },
    {
      path: '/custom-service-List',
      name: 'CustomServiceList',
      component: CustomServiceList,
    },
    {
      path: '/customerService/:id',
      name: 'CustomServiceReply',
      component: CustomServiceReply,
      props: true,
    },
    {
      path: '/ArticleList',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article/:id', 
      name: 'ArticleDetail',
      component: ArticleDetail,
      props: true 
    },
  ]})      
export default router
