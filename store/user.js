import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            currency: '',
            token: '123'
        }
    },
    actions: {},
})
