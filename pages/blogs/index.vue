<template>
    <div>
        <Hero breadcrumbs="Solutions / Payment Services" :title="t('Pages.Blogs.Banner.Title')"
            paragraph="" button="Get Started"
            image="omnichannel" hero="33"/>
    </div>
    <Posts category="8" detailPath="blogs"/>
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'MontyPay Blog | Payment Trends, Insights & Updates',
    ogTitle: 'MontyPay Blog | Payment Trends, Insights & Updates',
    description: 'Explore expert insights, fintech trends, and product updates on the MontyPay Blog. Stay informed about the digital payments industry.',
    ogDescription: 'Explore expert insights, fintech trends, and product updates on the MontyPay Blog. Stay informed about the digital payments industry.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script>

<style lang="" scoped></style>