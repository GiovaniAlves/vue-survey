import SurveyService from '../services/survey-service'

export default {
   saveSurvey: async ({commit}, survey) => {
      // Deleting this field because is used only in front end, to display the image.
      delete survey.image_url
      const response = await SurveyService.save(survey)
      if (survey.id) {
         commit('UPDATE_SURVEY', response.data)
      } else {
         commit('SAVE_SURVEY', response.data)
      }
      return response
   }
}
