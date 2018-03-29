import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/app.vue'
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import {store} from './store/store'
import BootstrapVue from 'bootstrap-vue'

require("jsappbase/vuebase.js")
Vue.use(Vuex)
Vue.use(BootstrapVue)

new Vue({
  el: "#app",
  components: {App, Navbar, Sidebar},
  store: store,
  data: {
    newActiveName: ''
  },
  methods: {
    openTab(name) {
      this.newActiveName = name
    },
    onTabChange(tabName) {
      this.newActiveName = tabName
    }
  }
})
