import axiosClient from '../../../axios'

const index = async () => {
   return await axiosClient.get('/auth/dashboard')
}

export default {
   index
}
