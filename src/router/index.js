import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
  // роуты 
  const routes = [
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: () => import('@/views/Categories.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: () => import('@/views/Record.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import('@/views/Planning.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('@/views/History.vue')
  },
  {
    path: '/detile-record',
    name: 'detile-record',
    meta: {layout: 'main'},
    component: () => import('@/views/DetaileRecord.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
