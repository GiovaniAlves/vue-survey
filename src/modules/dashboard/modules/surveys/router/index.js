const SurveyHome = () => import('./../views/SurveyHome.vue')
const SurveyForm = () => import('./../views/SurveyForm.vue')

export default [
   {
      path: 'surveys',
      name: 'Surveys',
      component: SurveyHome
   },
   {
      path: 'surveys/create',
      name: 'SurveyCreate',
      component: SurveyForm
   },
   {
      path: 'surveys/:id',
      name: 'SurveysEdit',
      component: SurveyForm
   }
]
