import Vue from 'vue'
import Courses from './views/Courses.vue'
import Users from './views/Users.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Courses},
  { path: '/users', component: Users},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

export default router

