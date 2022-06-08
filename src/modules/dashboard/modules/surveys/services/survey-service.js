import axiosClient from '../../../../../axios'

const authenticatedRoute = '/auth/survey'

const destroy = async id => {
   return axiosClient.delete(`${authenticatedRoute}/${id}`)
}

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
   destroy,
   get,
   save
}
