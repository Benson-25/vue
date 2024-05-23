import { createRouter, createWebHashHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    //新增頁面底加啦 
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children:[
      {
        path:'',
        name:'卡片一',
        component: () => import('../views/ComponentsOne.vue')
      },
      {
        path:'card2',
        name:'卡片二',
        component: () => import('../views/ComponentsA.vue')
      },
      {
        path:'card/:id',
        name:'卡片三',
        component: () => import('../views/ComponentsB.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router