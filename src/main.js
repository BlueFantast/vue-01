import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import MintUI from 'mint-ui'
import Store from './store/index'
import 'mint-ui/lib/style.css'
import Router from './router'
import './filters'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(Vuex)


new Vue({
  router:Router,
  Store,
  render: h => h(App)
}).$mount('#app')