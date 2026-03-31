<template lang="">
    <Page v-if="locale == 'en'" slug="customer-acceptance-policy" />
    <Page v-if="locale == 'ar'" slug="customer-acceptance-policy-ar" />
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
    useSeoMeta({
        title: 'Customer Acceptance Policy | Compliance & Onboarding',
        ogTitle: 'Customer Acceptance Policy | Compliance & Onboarding',
        description: 'Read MontyPay’s Customer Acceptance Policy outlining eligibility, verification processes, and compliance guidelines for all merchants.',
        ogDescription: 'Read MontyPay’s Customer Acceptance Policy outlining eligibility, verification processes, and compliance guidelines for all merchants.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="">
    
</style>