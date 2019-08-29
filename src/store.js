import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentYear: 1999
    },
    mutations: {
        setCurrentYear(state, year) {
            state.currentYear = year
        },
    },
    actions: {

    },
    getters: {
        getCurrentYear(state) {
            return state.currentYear
        }
    }
})