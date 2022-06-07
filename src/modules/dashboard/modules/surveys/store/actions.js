import SurveyService from '../services/survey-service'

export default {
   getSurvey: async ({commit}, id) => {
      commit('SET_CURRENT_SURVEY_LOADING', true)
      try {
         const response = await SurveyService.get(id)
         commit('SET_CURRENT_SURVEY', response.data)
         return response
      }catch (e) {
         console.log('Error getSurvey: ', e)
      } finally {
         commit('SET_CURRENT_SURVEY_LOADING', false)
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
   }
}
