import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Knowledge from '../pages/Knowledge/Knowledeg'
import Classification from '../pages/Classification/Classification'
import Shopcart from '../pages/Shopcart/Shopcart'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Loginemail from '../pages/Loginemail/Loginemail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        isShow: true
      }
    },
    {
      path: '/knowledge',
      component: Knowledge,
      meta:{
        isShow: true
      }
    },
    {
      path: '/classification',
      component: Classification,
      meta:{
        isShow: true
      }
    },
    {
      path: '/shopcart',
      component: Shopcart,
      meta:{
        isShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        isShow: false
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        isShow: false
      }
    },
    {
      path: '/mail',
      component: Loginemail,
      meta:{
        isShow: false
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
