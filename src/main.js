import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api/index"
import {showToast} from "../utils/toast/index"

Vue.config.productionTip = false;
// Vue.prototype.$api = api;\
Vue.use({
  install(vue){
    vue.prototype.$api = api;
  }
})
Vue.prototype.$toast = showToast;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
