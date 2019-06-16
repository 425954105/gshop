// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'

//  注册全局组件标签
Vue.component(Button.name, Button)//  <mt-button>
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//所有的组件对象都多了一个属性：$store
  components: { App },
  template: '<App/>'
})
