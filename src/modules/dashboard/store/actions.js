import ReportService from '../services/report-service'

export default {
   async getReports ({commit}) {
      commit('SET_LOADING_REPORT', true)
      try {
         const response = await ReportService.index()
         commit('SET_REPORT_DATA', response.data)
         return response
      } catch (e) {
         console.log('Error getReports: ', e)
      } finally {
         commit('SET_LOADING_REPORT', false)
      }
   }
}
