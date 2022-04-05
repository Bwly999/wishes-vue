import { acceptHMRUpdate, defineStore } from 'pinia'
import { login as apiLogin } from '~/api/login'
import { setToken } from '~/utils/auth'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true,
  }),

  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user: string, password: string) {
      return new Promise((resolve, reject) => {
        apiLogin(user, password).then((response) => {
          // this.$patch({
          //   name: user,
          // })
          setToken(response.data.data.access_token)
          resolve(response)
        }).catch((e) => {
          reject(e)
        })
      })
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
