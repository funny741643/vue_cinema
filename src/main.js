import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入element ui组件
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = 'http://localhost:80/thinkphp/public'
axios.defaults.headers = {'Content-Type':'application/json'}

// 在 request 拦截器中， 展示进度条 NProgress.start()
// 请求预处理
// axios.interceptors.request.use(config => {
//   config => {
//     if (localStorage.getItem('Authorization')) {
//       config.headers.Authorization = localStorage.getItem('Authorization');
//     }
//     return config;
//   }
// })
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
