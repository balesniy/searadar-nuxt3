import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            currency: '',
            token: '123',
            userProfile: {}
        }
    },
    getters: {
        isUserAuth(state) {
            return state.userProfile.id && state.userProfile.roles?.includes('ROLE_CAPTAIN');
        },
        isUserIncomplete(state) {
            return state.userProfile.roles?.includes('ROLE_INCOMPLETE')
        }
    },
    actions: {},
})
