import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App.vue'
import storeConfig from './store'
import routes from './routes'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueMaterial)

const store = new Vuex.Store(storeConfig)
const router = new VueRouter({ routes, mode: 'history' })


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
