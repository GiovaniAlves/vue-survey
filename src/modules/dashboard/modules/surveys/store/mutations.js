export default {
   SET_CURRENT_SURVEY: (state, survey) => {
      state.currentSurvey.data = survey
   },

   SET_CURRENT_SURVEY_LOADING: (state, status) => {
      state.currentSurvey.loading = status
   }
}
