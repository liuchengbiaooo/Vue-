import Vue from 'vue'
import App from './App'
import router from "./router/index"
import store from "./store/store"
import "./mock/mockServer"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

