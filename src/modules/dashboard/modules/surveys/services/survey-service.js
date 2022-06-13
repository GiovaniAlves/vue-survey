import axiosClient from '../../../../../axios'

const authenticatedRoute = '/auth/survey'

const destroy = id => {
   return axiosClient.delete(`${authenticatedRoute}/${id}`)
}

const index = (url) => {
   url = url || authenticatedRoute
   return axiosClient.get(`${url}`)
}

const get = id => {
   return axiosClient.get(`${authenticatedRoute}/${id}`)
}

const getBySlug = slug => {
   return axiosClient.get(`/survey-by-slug/${slug}`)
}

const save = survey => {
   if (survey.id) {
      return axiosClient.put(`${authenticatedRoute}/${survey.id}`, survey)
   } else {
      return axiosClient.post(`${authenticatedRoute}`, survey)
   }
}

const saveAnswers = ({surveyId}, answers) => {
   return axiosClient.post(`/survey/${surveyId}/answer`, answers)
}

export default {
   destroy,
   index,
   get,
   getBySlug,
   save,
   saveAnswers
}
