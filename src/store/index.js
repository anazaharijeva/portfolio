import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const LINKEDIN_URL = 'https://www.linkedin.com/in/ana-zaharijeva-558b32236/'

export default new Vuex.Store({
  state: {
    theme: 'light',
    linkedInUrl: LINKEDIN_URL,
  },
  getters: {
    isDark: (state) => state.theme === 'dark',
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme === 'dark' ? 'dark' : 'light'
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('portfolio-theme', state.theme)
      }
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', state.theme)
      }
    },
    toggleTheme(state) {
      const next = state.theme === 'light' ? 'dark' : 'light'
      state.theme = next
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('portfolio-theme', next)
      }
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', next)
      }
    },
  },
  actions: {
    initTheme({ commit }) {
      const saved = typeof localStorage !== 'undefined'
        ? localStorage.getItem('portfolio-theme')
        : null
      commit('setTheme', saved === 'dark' ? 'dark' : 'light')
    },
  },
})
