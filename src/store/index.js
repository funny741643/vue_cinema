import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movies: []
    },
    mutations: {
        moviesChange(state, movies) {
            state.movies = movies
        }
    }
})
