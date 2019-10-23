import Vue from 'vue'
import Router from 'vue-router'
import AdminLogin from '@/components/admin/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin
    }
  ]
})
