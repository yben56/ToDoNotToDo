import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    id: null,
    firstname: null
  },
  mutations: {
    login( state, data ) {
      /*
      //shortturn, vanish after page refresh
      //{{ $store.state.firstname }}
      state.token = data.token
      state.id = data.id
      state.firstname = data.firstname
      */

      //longturn
      //JSON.parse(localStorage.getItem('auth'))
      localStorage.setItem('auth', JSON.stringify(data))
      window.location.reload()
    },
    logout( state ) {
      /*
      state.token = null
      state.id = null
      state.firstname = null
      */

      localStorage.removeItem('auth')
      window.location.reload()
    }
  },
  actions: {
    async login({ commit }, data) {
      try {
        commit('login', data)

        return { success: true, data: data }
      } catch (error) {
        console.error(error)
        return { success: false, error: error }
      }
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
})