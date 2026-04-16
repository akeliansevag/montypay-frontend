<template>
    <section class="bg-white lg:py-52 max-lg:py-16">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Thank You for Reaching Out.</h1>
            <p class="text-lg text-gray-700">Our team is already reviewing your request, and we’ll get back to you as soon as possible.</p>
            <NuxtLinkLocale to="/" class="mp-button-quaternary mt-5 inline-block">Return to Home</NuxtLinkLocale>
        </div>
    </section>
</template>

<script setup>
useSeoMeta({
    title: 'Thank You',
    ogTitle: 'Thank You',
    description: 'Thank You',
    ogDescription: 'Thank You',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

onMounted(() => {
  const fireConversion = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17262217251/jX-xCKyd8pccEKOQoqdA'
      })
      return true
    }
    return false
  }

  // Try immediately
  if (!fireConversion()) {
    // Retry until gtag is ready
    const interval = setInterval(() => {
      if (fireConversion()) {
        clearInterval(interval)
      }
    }, 300)

    // Stop after 5s (safety)
    setTimeout(() => clearInterval(interval), 5000)
  }
})
</script>

<style lang="scss" scoped>

</style>