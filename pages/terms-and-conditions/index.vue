<template lang="">
   <Page v-if="locale == 'en'" slug="terms-and-conditions" />
   <Page v-if="locale == 'ar'" slug="terms-and-conditions-ar" />
</template>
<script setup>
const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'Terms & Conditions | Merchant Policies & Guidelines',
    ogTitle: 'Terms & Conditions | Merchant Policies & Guidelines',
    description: 'Review MontyPay’s Terms & Conditions covering service use, merchant responsibilities, compliance requirements, and platform guidelines.',
    ogDescription: 'Review MontyPay’s Terms & Conditions covering service use, merchant responsibilities, compliance requirements, and platform guidelines.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

</script>
<style lang="">
    
</style>