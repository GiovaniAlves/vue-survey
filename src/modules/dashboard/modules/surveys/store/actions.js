import SurveyService from '../services/survey-service'

export default {
   // eslint-disable-next-line no-empty-pattern
   deleteSurvey: async ({}, id) => {
      return await SurveyService.destroy(id)
   },

   getSurvey: async ({commit}, id) => {
      commit('SET_CURRENT_SURVEY_LOADING', true)
      try {
         const response = await SurveyService.get(id)
         commit('SET_CURRENT_SURVEY', response.data)
         return response
      } catch (e) {
         const {status} = e.response
         console.log(status)
         console.log('Error getSurvey: ', e)
      } finally {
         commit('SET_CURRENT_SURVEY_LOADING', false)
      }
   },

   getSurveyBySlug: async ({commit}, slug) => {
      commit('SET_CURRENT_SURVEY_LOADING', true)
      try {
         const response = await SurveyService.getBySlug(slug)
         commit('SET_CURRENT_SURVEY', response.data)
         return response
      } catch (e) {
         console.log('Error getSurveyBySlug: ', e)
      } finally {
         commit('SET_CURRENT_SURVEY_LOADING', false)
      }
   },

   getSurveys: async ({commit}, {url = null} = {}) => {
      commit('SET_SURVEYS_LOADING', true)
      try {
         const response = await SurveyService.index(url)
         commit('SET_SURVEYS', response.data)
         return response
      } catch (e) {
         console.log('Error getSurveys: ', e)
      } finally {
         commit('SET_SURVEYS_LOADING', false)
      }
   },

   saveSurvey: async ({commit}, survey) => {
      // Deleting this field because is used only in front end, to display the image.
      delete survey.image_url

      const response = await SurveyService.save(survey)
      if (survey.id) {
         commit('SET_CURRENT_SURVEY', response.data)
      } else {
         commit('SET_CURRENT_SURVEY', response.data)
      }
      return response
   },

   // eslint-disable-next-line no-empty-pattern
   saveSurveyAnswers: async ({}, {surveyId, answers}) => {
      return await SurveyService.saveAnswers(surveyId, answers)
   }
}
