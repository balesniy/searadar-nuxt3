export default defineNuxtPlugin(() => {
    return {
        provide: {
            chat: {
                open() {
                    if (window?.jivo_api !== undefined) {
                        return window.jivo_api.open();
                    }
                    console.log('jivo not loaded')
                }
            }
        }
    }
})
