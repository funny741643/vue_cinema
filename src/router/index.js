import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Nowon from '../components/Nowon/Nowon.vue'
import Willon from '../components/Willon/Willon.vue'
import Hoton from '../components/Hoton/Hoton.vue'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Home,
    redirect: '/nowon',
    children: [{
      path: '/nowon',
      component: Nowon
    }, {
      path: '/willon',
      component: Willon
    }, {
      path: '/hoton',
      component: Hoton
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
