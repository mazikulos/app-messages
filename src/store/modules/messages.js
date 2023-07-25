export const messages = {
    state: {
        messages: [],
        isLoading: false
    },
    mutations: {
        SET_MESSAGES(state, payload) {
            state.messages = payload
        }
    },
    actions: {
        async fetchMessages({ state, commit, dispatch }) {
            try {
                state.isLoading = true
                const data = await dispatch('getData', { 
                    endpoint: 'conversation',
                    shouldError: false
                })
                commit('SET_MESSAGES', JSON.parse(data))
            } catch(err) {
                console.log('error fetching messages')
            } finally {
                state.isLoading = false
            }
        },
        async sendMessage({ commit, dispatch, state, getters }, payload) {
            const now = new Date()
            const year = now.getFullYear()
            const month = String(now.getMonth() + 1).padStart(2, '0')
            const day = String(now.getDate()).padStart(2, '0')
            const hours = String(now.getHours()).padStart(2, '0')
            const minutes = String(now.getMinutes()).padStart(2, '0')
            const seconds = String(now.getSeconds()).padStart(2, '0')
            const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

            const user = getters.getUser
            const messages = [...state.messages]
            const lastId = messages[messages.length - 1]?.id || 0
            const newMessage = {
                date: formattedDateTime,
                from: user,
                id: lastId + 1,
                message: payload
            }

            commit('SET_MESSAGES', [...messages, newMessage])
            
            try {
                await dispatch('postData', {
                    shouldError: false
                })
            } catch(err) {
                commit('SET_MESSAGES', messages)
                alert('error sending message')
                console.log(err)
            }
        }
    },
    getters: {
        getMessages: state => state.messages,
        getMessagesStatus: state => state.isLoading
    }
}
