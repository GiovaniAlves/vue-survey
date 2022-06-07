import axiosClient from '../../../../../axios'

const authenticatedRoute = '/auth/survey'

const get = async id => {
   return axiosClient.get(`${authenticatedRoute}/${id}`)
}

const save = async survey => {
   if (survey.id) {
      return axiosClient.put(`${authenticatedRoute}/${survey.id}`, survey)
   } else {
      return axiosClient.post(`${authenticatedRoute}`, survey)
   }
}

export default {
   get,
   save
}
