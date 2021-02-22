import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cotegory from '../views/category.vue'
import cotegorylist from '../views/categorylist.vue'
import product from '../views/product.vue'
import buycart from '@/views/buycart.vue'
import checked from '@/views/checked'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },{
    path:'/category',
    component:cotegory
  },{
    path:'/categorylist/:id',
    component:cotegorylist,
    props:true
  },{
    path:'/product/:id',
    component:product,
    props:true
  },
  {
    path:'/buycart',
    component:buycart,
    },
    {
      path:'/checked',
      component:checked
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
