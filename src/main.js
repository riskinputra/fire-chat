// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import('vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD2AdmvgiTvFjasbj4vKTbeRsKjLW_1B0I',
      authDomain: 'chat-fire-9030e.firebaseapp.com',
      databaseURL: 'https://chat-fire-9030e.firebaseio.com',
      projectId: 'chat-fire-9030e',
      storageBucket: 'chat-fire-9030e.appspot.com'
    })
  }
})
