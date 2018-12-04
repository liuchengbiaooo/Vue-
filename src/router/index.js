import Classify from "../pages/Classify/Classify.vue"
import GeneralThings from "../pages/GeneralThings/GeneralThings.vue"
import HomePage from "../pages/HomePage/HomePage.vue"
import Personage from "../pages/Personage/Personage.vue"
import Shopping from "../pages/Shopping/Shopping.vue"

import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/generalThings',
      component:GeneralThings
    },
    {
      path:'/homePage',
      component:HomePage
    },
    {
      path:'/personage',
      component:Personage
    },
    {
      path:'/shopping',
      component:Shopping
    },
    {
      path: '/',
      redirect: '/homePage' }
    ]
})
