<template>
    <div>
        <Hero breadcrumbs="Solutions / Payment Services" title="Blogs"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants" button="Get Started"
            image="omnichannel" />
    </div>
    <Posts category="8" detailPath="blogs"/>
</template>

<script setup>
useSeoMeta({
    title: 'Blogs',
    ogTitle: 'Blogs',
    description: 'Blogs description',
    ogDescription: 'Blogs description',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script>

<style lang="" scoped></style>