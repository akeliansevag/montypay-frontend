// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/sass/global.sass', 
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - MontyPay',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-64x64.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-16x16.png' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/images/apple-touch-icon-180x180.png' }
      ],
      meta: [
        { name: 'theme-color' , content:'#00F7F7' }
      ]
    },
  },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    'nuxt-gtag',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-swiper'
  ],
  image: {
    // dir: 'assets/images'
  },
  plugins: [
    { src: '~/plugins/mobileCheck.js', mode: 'client' }
  ],
  googleFonts: {
    families: {
      Manrope: '400..700'
    }
  },
  devServer: {
    host: '0.0.0.0',
    https: false,
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    modules: ['effect-fade', 'pagination'], // all modules are imported by default
  }
})