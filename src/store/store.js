import Vue from "vue"
import Vuex from "vuex"
import usersData from "./../data/usersData.js"
import courses from './modules/courses.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setData(state) {
      const storageUpdate = JSON.parse(localStorage.getItem('storage_update'))
      if(storageUpdate){
        state.users = storageUpdate
      } else {
        state.users = usersData
      }
    },
    updateUser(state, payload) {
      const user = state.users.find(user => {
        return user.email === payload.email
       })
      if(payload.name) {
        user.name = payload.name
      }
      if(payload.email) {
        user.email = payload.email
      }
      if(payload.status) {
        user.status = payload.status
      }
      localStorage.setItem('storage_update', JSON.stringify(state.users))
    },
    addUsersData(state, payload) {
      state.users.splice(0, 0, payload)
      localStorage.setItem('storage_update', JSON.stringify(state.users))
    }
  },
  actions: {
    initData ({commit}) {
      commit('setData', usersData)
    },
    updateUsersData({commit}, payload ) {
      commit('updateUser', payload)
    },
    addUsersData({commit}, payload ) {
      commit('addUsersData', payload)
    }
  },
  getters: {
    getUsers (state) {
      return state.users
    }
  },
  modules: {
    courses
  }
})

export default store
