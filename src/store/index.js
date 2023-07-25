import Vue from 'vue'
import Vuex from 'vuex'

import { api } from './modules/api.js'
import { messages } from './modules/messages.js'
import { user } from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        api,
        messages,
        user
    }
})

export default store
