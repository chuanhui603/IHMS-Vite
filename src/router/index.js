import { createRouter, createWebHistory } from 'vue-router'
import testmember from '../views/testmember.vue'
import Plan from '../views/PlanView.vue'
import Home from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Announcement from '../views/AnnouncementList.vue'
import AnnouncementView from '../views/AnnouncementView.vue';
import MessageBoardList from '../views/MessageBoardList.vue';
import MessageBoardRelease from '../views/MessageBoardRelese.vue';
import MessageBoardDetail from '../views/MessageBoardDetail.vue';
import AIquestion from '../views/AIquestion.vue';
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
      path: '/announcements/:announcementId',
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
    
  ]
})

export default router
