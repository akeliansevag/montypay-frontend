export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router

  router.afterEach((to) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'AW-17262217251', {
        page_path: to.fullPath
      })
    }
  })
})