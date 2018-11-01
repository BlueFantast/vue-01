import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import MintUI from 'mint-ui'
import Store from './store/index.js'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(Vuex)

import Index from './components/index.vue'
import Classify from './components/classify.vue'
import Seckill from './components/seckill.vue'
import Shopcart from './components/shopcart.vue'
import Center from './components/center.vue'
import Detail from './components/detail.vue'

const routes = [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: Index
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/seckill',
    component: Seckill
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail',
    component: Detail
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  Store,
  render: h => h(App)
}).$mount('#app')