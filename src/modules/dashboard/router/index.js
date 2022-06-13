const Dashboard = () => import('../views/Dashboard.vue')
const Reports = () => import('../views/Reports.vue')
const SurveyPublicView = () => import('../modules/surveys/views/SurveyPublicView.vue')

import surveysRoutes from './../modules/surveys/router'

export default [
   {
      path: '',
      redirect: '/dashboard',
      component: () => import('./../../../layouts/DashboardLayout.vue'),
      meta: {requiresAuth: true},
      children: [
         {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            children: [
               {
                  path: 'reports',
                  name: 'DashboardReports',
                  alias: '/dashboard',
                  component: Reports
               },
               ...surveysRoutes
            ]
         }
      ]
   },
   {
      //is here because component can't load default layout
      path: '/view/survey/:slug',
      name: 'SurveyPublicView',
      component: SurveyPublicView
   }
]
