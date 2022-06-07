export default {
   SAVE_SURVEY: (state, survey) => {
      state.surveys = [...state.surveys, survey]
   },

   UPDATE_SURVEY: (state, survey) => {
      state.surveys.map((s) => {
         if (s.id === survey.id) {
            return survey
         }
         return s
      })
   }
}
