import {createRouter, createWebHistory} from 'vue-router'
import Login from '../modules/auth/views/Login.vue'
import Register from '../modules/auth/views/Register.vue'
import Dashboard from '../modules/dashboard/views/Dashboard.vue'
import Surveys from '../modules/dashboard/views/Surveys.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

const routes = [
   {
      path: '/',
      redirect: '/dashboard',
      name: 'Dashboard',
      component: DashboardLayout,
      children: [
         {path: '/dashboard', name: 'Dashboard', component: Dashboard},
         {path: '/surveys', name: 'Surveys', component: Surveys},
      ]
   },
   {
      path: '/login',
      name: 'Login',
      component: Login
   },
   {
      path: '/register',
      name: 'Register',
      component: Register
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router
