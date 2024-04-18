<template>
    <div>
        <Hero breadcrumbs="Solutions / Payment Services" title="News"
            paragraph="" button="Get Started"
            image="omnichannel" />
    </div>
    <Posts category="7" detailPath="news"/>
</template>

<script setup>
useSeoMeta({
    title: 'News',
    ogTitle: 'News',
    description: 'News description',
    ogDescription: 'News description',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script>

<style lang="" scoped></style>