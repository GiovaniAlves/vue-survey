import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../modules/dashboard/views/Dashboard.vue'
import Surveys from '../modules/dashboard/views/Surveys.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import store from '../store'

import authRoutes from './../modules/auth/router'

const routes = [
   {
      path: '/',
      redirect: '/dashboard',
      component: DashboardLayout,
      meta: {requiresAuth: true},
      children: [
         {path: '/dashboard', name: 'Dashboard', component: Dashboard},
         {path: '/surveys', name: 'Surveys', component: Surveys}
      ]
   },
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
