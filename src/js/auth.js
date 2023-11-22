import { createStore } from 'vuex'

const authentication = createStore({
  state: {
    token: null,
    id: null,
    firstname: null
  },
  mutations: {
    signup( state, data) {
      localStorage.setItem('auth', JSON.stringify(data))
      localStorage.setItem('signupsuccess', true)
      window.location.href = '/'
    },
    start( state ) {
      localStorage.setItem('signupsuccess', false)
      window.location.reload()
    },
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
      window.location.href = '/'
    },
    logout( state ) {
      /*
      state.token = null
      state.id = null
      state.firstname = null
      */

      localStorage.removeItem('auth')
      window.location.href = '/'
    }
  },
  actions: {
    signup({ commit }, data){
      commit('signup', data)
    },
    start ({ commit }) {
      commit('start')
    },
    login({ commit }, data) {
      try {
        commit('login', data)
      } catch (error) {
        console.error(error)
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

const auth = () => {
    let data = JSON.parse(localStorage.getItem('auth'))
    
    return data || false
}

export { authentication, auth }