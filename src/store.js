import Vue from 'vue'
import Vuex from 'vuex'
import AxiosService from '@/services/AxiosService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    error: '',
    busy: false
  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_BUSY(state, busy) {
      state.busy = busy
    }
  },
  actions: {
    getContacts({ commit }) {
      commit('SET_BUSY', true)

      return AxiosService.getContacts()
        .then(response => {
          commit('SET_BUSY', false)
          commit('SET_CONTACTS', response.data)
        })
        .catch(error => {
          commit('SET_BUSY', false)
          if (error.response) {
            commit(
              'SET_ERROR',
              'The request was made and the server responded with a status code that falls out of the range of 2xx'
            )
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            commit(
              'SET_ERROR',
              'The request was made but no response was received'
            )
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            commit(
              'SET_ERROR',
              'Something happened in setting up the request that triggered an Error'
            )
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    }
  }
})
