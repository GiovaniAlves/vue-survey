const Login = () => import('./../views/Login.vue')
const Register = () => import('./../views/Register.vue')

export default [
   {
      path: '',
      component: () => import('./../../../layouts/AuthLayout.vue'),
      meta: {isGuest: true},
      children: [
         {
            path: '/login',
            name: 'Login',
            component: Login
         },
         {
            path: '/register',
            name: 'Register',
            component: Register
         },
      ]
   }
]
