import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Knowledge from '../pages/Knowledge/Knowledeg'
import Classification from '../pages/Classification/Classification'
import Shopcart from '../pages/Shopcart/Shopcart'
import Profile from '../pages/Profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/knowledge',
      component: Knowledge
    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
