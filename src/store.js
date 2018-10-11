import Vue from 'vue'
import Vuex from 'vuex'
import AxiosService from '@/services/AxiosService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    error: {}
  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    getContacts({ commit }) {
      return AxiosService.getContacts()
        .then(response => {
          commit('SET_CONTACTS', response.data)
        })
        .catch(error => {
          commit('SET_ERROR', error)
        })
    }
  }
})
