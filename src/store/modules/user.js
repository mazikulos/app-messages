export const user = {
    state: {
        user: null,
        isLoading: false
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        }
    },
    actions: {
        fetchUser({ commit }) {
            commit('SET_USER', JSON.parse(currentUser))
        },
        async fetchUser({ state, commit, dispatch }) {
            try {
                state.isLoading = true
                const data = await dispatch('getData', {
                    endpoint: 'currentUser',
                    shouldError: false
                })
                commit('SET_USER', JSON.parse(data))
            } catch(err) {
                console.log('error fetching messages')
            } finally {
                state.isLoading = false
            }
        },
    },
    getters: {
        getUser: state => state.user,
        isCurrentUser: state => id => {
            if (state.user) return state.user.id === id
        },
        getUserStatus: state => state.isLoading
    }
}
