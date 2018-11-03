import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import MintUI from 'mint-ui'
import Store from './store/index.js'
import 'mint-ui/lib/style.css'
import Router from './router'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(Vuex)


new Vue({
  router:Router,
  Store,
  render: h => h(App)
}).$mount('#app')