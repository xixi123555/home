import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        mate: {
          title: '照片墙',
          icon: 'photoWall'
        }
      },
      {
        path: '/1',
        name: '1',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        mate: {
          title: '智能家',
          icon: 'home'
        }
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
