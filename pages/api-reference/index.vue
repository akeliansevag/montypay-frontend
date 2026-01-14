<template lang="">
    <div>
        <Hero 
            :title="t('Pages.API Reference.Banner.Title')"
            :paragraph="t('Pages.API Reference.Banner.Description')"
            image="api-reference"
            hero="22"
        />

        <section id="section-2" class="py-16 lg:py-36">
            <div class="container">
                <div class="container mt-14">
                    <div class="grid grid-cols-1 gap-8 text-center">
                        <div class="api-item" v-for="(item,index) in apis" :key="index">
                            <div>
                                <ContentBlock 
                                    :title="item.title"
                                    :paragraph="item.paragraph"
                                    class="mb-5"
                                />
                            </div>
                            <div class="api-item-link-wrapper">
                                <NuxtLinkLocale class="api-item-link" target="_blank" external :to="item.buttonLink">{{item.buttonText}}</NuxtLinkLocale>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </div>
</template>

<script setup>
const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'API Reference | Developer Integration Guide',
    ogTitle: 'API Reference | Developer Integration Guide',
    description: 'Explore MontyPay’s API reference for developers—featuring integration guides, endpoints, authentication methods, and payment flow documentation.',
    ogDescription: 'Explore MontyPay’s API reference for developers—featuring integration guides, endpoints, authentication methods, and payment flow documentation.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});

const apis = [
    {
        title: t('Pages.API Reference.Section 2.Items[0].Title'),
        paragraph: t('Pages.API Reference.Section 2.Items[0].Paragraph'),
        buttonLink: "https://docs.montypay.com/s2s_card",
        buttonText: t('General.Buttons.Link'),
    },
    {
        title: t('Pages.API Reference.Section 2.Items[1].Title'),
        paragraph: t('Pages.API Reference.Section 2.Items[1].Paragraph'),
        buttonLink: "/MontyPay_Generating-a-Certificate-Signing-Request.pdf",
        buttonText: t('General.Buttons.Download PDF'),
    },
    {
        title: t('Pages.API Reference.Section 2.Items[2].Title'),
        paragraph: t('Pages.API Reference.Section 2.Items[2].Paragraph'),
        buttonLink: "https://docs.montypay.com/s2s_apm#credit2virtual-request",
        buttonText: t('General.Buttons.Link'),
    },
    {
        title: t('Pages.API Reference.Section 2.Items[3].Title'),
        paragraph: t('Pages.API Reference.Section 2.Items[3].Paragraph'),
        buttonLink: "https://docs.montypay.com/",
        buttonText: t('General.Buttons.Link'),
    },
    {
        title: t('Pages.API Reference.Section 2.Items[4].Title'),
        paragraph: t('Pages.API Reference.Section 2.Items[4].Paragraph'),
        buttonLink: "/MontyPay_API_Credit_VA_Protocol_v1_1new.pdf",
        buttonText: t('General.Buttons.Download PDF'),
    },
];

</script>

<style lang="sass">

</style>