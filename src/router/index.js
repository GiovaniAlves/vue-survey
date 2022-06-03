import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'

import authRoutes from './../modules/auth/router'
import dashboardRoutes from './../modules/dashboard/router'

const routes = [
   ...dashboardRoutes,
   ...authRoutes
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

router.beforeEach((to, from, next) => {
   if (to.meta.requiresAuth && !store.state.auth.user.token) {
      next({name: 'Login'})
   } else if (store.state.auth.user.token && to.meta.isGuest) {
      next({name: 'Dashboard'})
   } else {
      next()
   }
})


export default router
