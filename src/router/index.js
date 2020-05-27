import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Nowon from '../components/Nowon/Nowon.vue'
import Willon from '../components/Willon/Willon.vue'
import Hoton from '../components/Hoton/Hoton.vue'
import Movies from '../components/Movies/Movies.vue'
import Admin from '../components/Admin/admin.vue'
import MovieDetail from '../components/MovieDetail/index.vue'
import Ticket from '../components/Ticket/index.vue'
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
    path: '/admin',
    component: Admin
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
    }, {
      path: '/movies',
      name: 'Movies',
      component: Movies
    }, {
      path: '/moviedetail/:id',
      component: MovieDetail
    }, {
      path: '/ticket/:id',
      component: Ticket
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
