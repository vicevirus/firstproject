// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import InstantSearch from 'vue-instantsearch'
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin)

Vue.use(InstantSearch);

Vue.use(VueChartkick, {adapter: Chart})

Vue.use(BootstrapVue)

Vue.use(Vuetify)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
