import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite'
import Order from '../pages/Order'
import Profile from '../pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
  ]
})
