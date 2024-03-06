<template>
  <Preloader />
  <div>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>

</script>

<style lang="sass">
  .page-enter-active,
  .page-leave-active 
    transition: all 0.2s

  .page-enter-from,
  .page-leave-to 
    opacity: 0
    // filter: blur(1rem)
</style>
