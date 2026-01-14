<template>
    <div>
        <Hero breadcrumbs="Solutions / Payment Services" :title="t('Pages.News.Banner.Title')"
            :paragraph="t('Pages.News.Banner.Description')" button="Get Started"
            image="omnichannel" hero="11"/>
    </div>
    <Posts category="7" detailPath="news"/>
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'MontyPay News | Latest Updates & Partnerships',
    ogTitle: 'MontyPay News | Latest Updates & Partnerships',
    description: 'Stay updated with MontyPay’s latest news, product releases, partnerships, and milestones shaping the future of digital payments.',
    ogDescription: 'Stay updated with MontyPay’s latest news, product releases, partnerships, and milestones shaping the future of digital payments.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script>

<style lang="" scoped></style>