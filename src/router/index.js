import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'

import Cate from '@/views/Cate.vue'

import Mine from '@/views/Mine.vue'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'localtion',
        name: 'localtioan',
        component: () => import('@/views/Localtion.vue')
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('@/views/Detail.vue')
      }
    ]
  },
  {
    path: '/cate',
    name: 'cate',
    component: Cate
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
