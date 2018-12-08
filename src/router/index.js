import Classify from "../pages/Classify/Classify.vue"
import GeneralThings from "../pages/GeneralThings/GeneralThings.vue"
import HomePage from "../pages/HomePage/HomePage.vue"
import Personage from "../pages/Personage/Personage.vue"
import Shopping from "../pages/Shopping/Shopping.vue"
import NotFound from "../components/NotFound/NotFound.vue"
import Login from "../pages/Login/Login.vue"

import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/classify',
      component: Classify,
      meta:{
        isShow:true
      }
    },
    {
      path: '/generalThings',
      component: GeneralThings,
      meta:{
        isShow:true
      }
    },
    {
      path: '/homePage',
      component: HomePage,
      meta:{
        isShow:true
      }
    },
    {
      path: '/personage',
      component: Personage
    },
    {
      path: '/shopping',
      component: Shopping,
      meta:{
        isShow:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: "*/",
      component: NotFound
    }
  ]
})
