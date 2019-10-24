import Vue from 'vue'
import Router from 'vue-router'
import AdminLogin from '@/components/admin/Login'
import AdminHome from '@/components/admin/Home'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/admin',
      redirect: '/admin/login'
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/admin/home',
      name: 'AdminHome',
      component: AdminHome
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/admin/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '' || token === null) {
      next('/admin/login');
    } else {
      next();
    }
  }
});

export default router;