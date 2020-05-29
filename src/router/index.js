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
import Movie from '../components/Admin/movie.vue'
import Hall from '../components/Admin/hall.vue'
import Site from '../components/Admin/site.vue'
import Plan from '../components/Admin/plan.vue'
import Adminticket from '../components/Admin/ticket.vue'
import Statistics from '../components/Admin/statistics.vue'
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
    component: Admin,
    children: [{
      path: '/admin/hall',
      component: Hall
    }, {
      path: '/admin/site',
      component: Site
    }, {
      path: '/admin/movie',
      component: Movie
    }, {
      path: '/admin/plan',
      component: Plan
    }, {
      path: '/admin/ticket',
      component: Adminticket
    }, {
      path: '/admin/statistics',
      component: Statistics
    }]
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

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
//     if (token === 'null' || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });


const router = new VueRouter({
  routes
})

export default router
