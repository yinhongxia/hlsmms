import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 添加账号
    {
      path: '/addAdmin',
      component: () => import(/* webpackChunkName: "addAdmin" */ './views/AddAdmin.vue')
    },
    // 账号管理
    {
      path: '/accManagement',
      component: () => import(/* webpackChunkName: "accManagement" */ './views/AccManagement.vue')
    },
    // 密码修改
    {
      path: '/changepass',
      component: () => import(/* webpackChunkName: "changepass" */ './views/Changepass.vue')
    },
    // 分类管理
    {
      path: '/sortmanagement',
      component: () => import(/* webpackChunkName: "sortManagement" */ './views/SortManagement.vue')
    },
    // 添加分类
    {
      path: '/addcategory',
      component: () => import(/* webpackChunkName: "addCategory" */ './views/AddCategory.vue')
    },

  ]
})
