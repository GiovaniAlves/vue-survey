export default {
   SET_REPORT_DATA(state, data) {
      state.reports.data = data
   },

   SET_LOADING_REPORT(state, status) {
      state.reports.loading = status
   }
}
