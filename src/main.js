import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from "./store/index"; // file này mình tạo ở cuối bài nhé 

Vue.use(Vuex)


Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
