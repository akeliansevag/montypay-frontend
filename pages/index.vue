<template lang="">
    <HeroBanner 
        :subtitle="''"
        :title="'Discover the future of payments with MontyPay'"
        :paragraph="'With MontyPay, you gain access to cutting-edge technology, a secure and user-friendly platform, and a team dedicated to your success.'"
        :button="'Get Started'" 
        :image="'hero-home'" 
    />
</template>

<script setup>
    useSeoMeta({
        title: 'Homepage',
        ogTitle: 'Homepage',
        description: 'Homepage description',
        ogDescription: 'Homepage description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="">
   
</style>
