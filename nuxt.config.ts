import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: [{ path: '~/components', extensions: ['vue'] }],
    buildModules: ['@intlify/nuxt3', '@pinia/nuxt'],
    // config for `@intlify/nuxt3`
    intlify: {
        localeDir: 'langs',
        vueI18n: 'vue-i18n.mjs'
    },
    css: ['~/assets/scss/style.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/scss/_variables.scss";',
                },
            },
        },
    },
    typescript: {
        shim: false
    }
})
