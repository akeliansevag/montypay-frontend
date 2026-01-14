<template lang="">
    <Page v-if="locale == 'en'" slug="privacy-policy" />
    <Page v-if="locale == 'ar'" slug="privacy-policy-ar" />
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
    useSeoMeta({
        title: 'Privacy Policy | Data Protection & User Rights',
        ogTitle: 'Privacy Policy | Data Protection & User Rights',
        description: 'Learn how MontyPay collects, protects, and manages your personal data. Review our privacy practices, user rights, and security standards.',
        ogDescription: 'Learn how MontyPay collects, protects, and manages your personal data. Review our privacy practices, user rights, and security standards.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="">
    
</style>