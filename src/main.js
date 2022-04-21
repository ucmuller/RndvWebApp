import Firebase from '@/api/firebase/firebase'
import { store } from '@/store/'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import './assets/css/theme.scss'
import router from './router'





Vue.use(VueAnalytics, {
  id: 'UA-145069953-2',
  router
})
Vue.use(Vuetify)
Vue.use(VueMaterial)
Vue.use(Vuelidate)

Vue.config.productionTip = false

Firebase.init();

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
