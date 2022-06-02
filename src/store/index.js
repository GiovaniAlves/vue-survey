import {createStore} from 'vuex'

import auth from './../modules/auth/store'

const store = createStore({
   state: {},
   getters: {},
   actions: {},
   mutations: {},
   modules: {
      auth
   }
})

export default store
