import {createStore} from 'vuex'

import auth from './../modules/auth/store'
import survey from './../modules/dashboard/modules/surveys/store'
import report from './../modules/dashboard/store'

const store = createStore({
   state: {
      notification: {
         show: false,
         type: null,
         message: ''
      }
   },
   getters: {},
   actions: {},
   mutations: {
      SET_NOTIFY: (state, {type = 'success', message}) => {
         state.notification.show = true
         state.notification.type = type
         state.notification.message = message

         setTimeout(() => {
            state.notification.show = false
         }, 3000)
      }
   },
   modules: {
      auth,
      survey,
      report
   }
})

export default store
