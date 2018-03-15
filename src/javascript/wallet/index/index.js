import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import {store} from "../store/store"

require("jsappbase/vuebase.js")
Vue.use(Vuex)
/*
Vue.component('my-component', {
  template: '<div>Test component</div>'
})
*/
new Vue({
  el: "#app",
  components: {App},
  store,
})