import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './reset.css'
import axios from 'axios'

const http = axios.create({
  baseURL: 'api/',
  timeout: 30000
})
Vue.prototype.http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
