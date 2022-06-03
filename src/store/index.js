import {createStore} from 'vuex'

import auth from './../modules/auth/store'
import survey from './../modules/dashboard/modules/surveys/store'

const store = createStore({
   state: {},
   getters: {},
   actions: {},
   mutations: {},
   modules: {
      auth,
      survey
   }
})

export default store
