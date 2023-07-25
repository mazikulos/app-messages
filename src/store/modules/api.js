import * as mock from '../../api/mock'

export const api = {
    actions: {
        getData({ commit }, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (payload.shouldError) {
                    reject(new Error('Failed to get data.'))
                  } else {
                    resolve(mock[payload.endpoint])
                  }
                }, 1000)
            })
        },
        postData({ commit }, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (payload.shouldError) {
                    reject(new Error('Failed to post data.'))
                  } else {
                    resolve()
                  }
                }, 500)
            })
        }
    }
}
