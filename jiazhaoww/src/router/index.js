import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About/AboutView.vue')
    }
  },{
    path: '/me',
    name: 'me',
    component:()=>import('../views/me/Myself.vue')
  },{
    path:'/message',
    name:'message',
    component:()=>import('../views/message/messageView.vue')
  },
  {
    path:'/detail',
    name:'detail',
    component:()=>import('../views/message/DetailView.vue')
  },{
    
      path:'/detail2',
      name:'detail2',
      component:()=>import('../views/About/DetailaboutView.vue')
    
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/me/loginView.vue')
  
},{
  path:'/Myselfyes',
  name:'Myselfyes',
  component:()=>import('../views/me/Myselfyes.vue')

},{
  path:'/xiugai',
  name:'xiugai',
  component:()=>import('../views/me/xiugaiView.vue')
},{
  path:'/quit',
  name:'quit',
  component:()=>import('../views/me/quitView.vue')
},{
  path:'/modpassword',
  name:'modpassword',
  component:()=>import('../views/me/modpasswordView.vue')
},{
  path:'/shouchang',
  name:'shouchang',
  component:()=>import('../views/me/shouchangView.vue')
},{
  path:'/fabu',
  name:'fabu',
  component:()=>import('../views/me/fabuView.vue')
},{
  path:'/pinlun',
  name:'pinlun',
  component:()=>import('../views/me/pinlunView.vue')
},{
  path:'/bei',
  name:'bei',
  component:()=>import('../views/home/beiView.vue')
},{
  path:'/testmu',
  name:'testmu',
  component:()=>import('../views/home/testmuView.vue')
},{
  path:'/test',
  name:'test',
  component:()=>import('../views/home/testView.vue')
},{
  path:'/bei2',
  name:'bei2',
  component:()=>import('../views/home/bei2View.vue')
},{
  path:'/bei3',
  name:'bei3',
  component:()=>import('../views/home/bei3View.vue')
},{
  path:'/bei4',
  name:'bei4',
  component:()=>import('../views/home/bei4View.vue')
},{
  path:'/beidetail',
  name:'beidetail',
  component:()=>import('../views/home/beidetailView.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
