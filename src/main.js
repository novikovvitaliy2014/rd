import Vue from 'vue'
import Vuetify from 'vuetify'
import 'babel-polyfill'
import './plugins/vuetify'
import App from './App.vue'
import store from "./store/store.js"
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
