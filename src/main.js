import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api'
import '@/libs/filter'
import '@/assets/styles/common.less'
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    api.init(this)
  }
}).$mount('#app')
