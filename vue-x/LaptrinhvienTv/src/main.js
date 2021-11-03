import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import storeConfig from './store/index'
const store = new Vuex.Store(storeConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
