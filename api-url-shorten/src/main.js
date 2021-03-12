import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import regeneratorRuntime from 'regenerator-runtime'

Vue.use(axios)
Vue.use(regeneratorRuntime)

new Vue({
  el: '#app',
  render: h => h(App)
})