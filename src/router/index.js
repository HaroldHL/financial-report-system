import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle'
import CreateArticle from '../views/CreateArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/articles/index'
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticle,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListArticle,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes
})

export default router
