import axiosClient from '../../../axios'

const reports = async () => {
   return await axiosClient.get('/auth/dashboard')
}

export default {
   reports
}
