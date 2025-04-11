<template>
  <Preloader />
  <div>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter :pageName="pageName" />
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const pageName = ref('')

  // Get the route and router instances
  const route = useRoute()
  const router = useRouter()

  // Function to update the page name based on the current route
  const updatePageName = () => {
    pageName.value = route.name || 'Unnamed Page'
  }

  // Watch for route changes and update the page name accordingly
  watch(route, () => {
    updatePageName()
  }, { immediate: true })

  // Alternatively, listen to the router's afterEach hook
  router.afterEach((to) => {
    pageName.value = to.name || 'Unnamed Page'
  })

  // Initialize the page name on first load
  updatePageName()
  
  useHead(() => {
    const baseUrl = 'https://montypay.com' // Change this to your actual domain
    const canonical = `${baseUrl}${route.fullPath.split('?')[0]}`

    return {
      link: [
        {
          rel: 'canonical',
          href: canonical
        }
      ]
    }
  })
</script>

<style lang="sass">

</style>
