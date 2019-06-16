import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite'
import search from '../pages/search'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import shop from '../pages/shop'
import shopGoods from '../pages/shop/shopGoods'
import shopRatings from '../pages/shop/shopRatings'
import shopInfo from '../pages/shop/shopInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: shop,
      children: [
        {
          path: '/shop/goods',
          component: shopGoods
        },
        {
          path: '/shop/ratings',
          component: shopRatings
        },
        {
          path: '/shop/info',
          component: shopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
