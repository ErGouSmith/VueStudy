import Vue from 'vue'
//import Router from 'vue-router'
import VueRouter from 'vue-router'

import Home from "../components/Home"
import About from "../components/About"
import User from "../components/User"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user',
    component: User
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})
