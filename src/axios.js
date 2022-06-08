import axios from 'axios'
import store from './store'

const axiosClient = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
   }
})

axiosClient.interceptors.request.use(config => {
   config.headers.Authorization = `Bearer ${store.state.auth.user.token}`
   return config
})

export default axiosClient
