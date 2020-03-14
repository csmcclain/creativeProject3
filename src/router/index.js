import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Build from '../views/Build.vue'
import Results from '../views/Results.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/build',
    name: 'Build',
    component: Build
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
