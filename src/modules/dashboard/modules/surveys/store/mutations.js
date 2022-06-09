export default {
   SET_SURVEYS: (state, surveys) => {
      state.surveys.data = surveys.data
      state.surveys.links = surveys.meta.links
   },

   SET_CURRENT_SURVEY: (state, survey) => {
      state.currentSurvey.data = survey
   },

   SET_SURVEYS_LOADING: (state, status) => {
      state.surveys.loading = status
   },

   SET_CURRENT_SURVEY_LOADING: (state, status) => {
      state.currentSurvey.loading = status
   }
}
