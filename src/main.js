import Vue from 'vue'
import App from './App.vue'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  bootstrap,
  render: h => h(App),
}).$mount('#app')
