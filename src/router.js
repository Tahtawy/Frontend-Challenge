import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'navigation-list--active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    },
    {
        path: '/users/:login',
        name: 'userDetails',
        component: Users
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})