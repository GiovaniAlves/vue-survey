const SurveyHome = () => import('./../views/SurveyHome.vue')
const SurveyForm = () => import('./../views/SurveyForm.vue')

export default [
   {
      path: 'surveys',
      name: 'Surveys',
      component: SurveyHome
   },
   {
      path: 'survey/create',
      name: 'SurveyCreate',
      component: SurveyForm
   },
   {
      path: 'survey/:id',
      name: 'SurveysEdit',
      component: SurveyForm
   }
]
