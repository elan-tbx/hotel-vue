// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
    modules: [
        '@nuxtjs/tailwindcss',
        ['nuxt-vuefire', {
            config: {
                apiKey: 'AIzaSyC48eP8eWoMKQws1Hqc31BnOtw-hcrVxOA',
                authDomain: 'hotel-vue-187cf.firebaseapp.com',
                projectId: 'hotel-vue-187cf',
                storageBucket: 'hotel-vue-187cf.appspot.com',
                messagingSenderId: '689192184357',
                appId: '1:689192184357:web:bdf22bf5d315c49aebedcc',
                measurementId: 'G-0B5G676M8R'
            }
        }]
    ],
} )
