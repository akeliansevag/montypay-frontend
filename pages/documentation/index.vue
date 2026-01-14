<template lang="">
     <Hero 
            :title="t('Pages.Documentation.Banner.Title')"
            :paragraph="t('Pages.Documentation.Banner.Description')"
            image="documentation"
            hero="66"
        />
    
    <section class="py-16 lg:py-36 bg-black text-white text-center">
        <div class="container max-w-[900px]">
            <ContentBlock 
                :title="t('Pages.Documentation.Section 2.Title')"
                :paragraph="t('Pages.Documentation.Section 2.Description')"
            />
            <NuxtLinkLocale class="mt-5 inline-block text-[#00DFDF] underline" to="https://github.com/MontyPayAPI" target="_blank" external>https://github.com/MontyPayAPI </NuxtLinkLocale>
        </div>
        <div class="container max-w-[1000px] mx-auto mt-14">
            <div class="grid grid-cols-1 sm:grid-cols-2 max-w-[700px] mx-auto gap-8">
                <div class="api-item" v-for="(item,index) in mobileSDK" :key="index">
                    <div class="api-item-icon">
                        <img :src="item.icon" />
                    </div>
                    <div class="api-item-link-wrapper">
                        <NuxtLinkLocale class="api-item-link text-black" target="_blank" external :to="item.buttonLink">{{item.buttonText}}</NuxtLinkLocale>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-36 bg-white text-center">
        <div class="container max-w-[900px]">
            <ContentBlock 
                :title="t('Pages.Documentation.Section 3.Title')"
            />
        </div>
        <div class="container mt-14">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div class="api-item" v-for="(item,index) in ecommercePlugins" :key="index">
                    <div class="api-item-icon">
                        <img :src="item.icon" />
                    </div>
                    <div v-if="item.buttonLink" class="api-item-link-wrapper">
                        <NuxtLinkLocale class="api-item-link" target="_blank" external :to="item.buttonLink">{{item.buttonText}}</NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'Developer Documentation | SDKs & API Integration',
    ogTitle: 'Developer Documentation | SDKs & API Integration',
    description: 'Explore MontyPay’s developer documentation for SDKs, APIs, and integration guides designed to help businesses launch payments quickly and securely.',
    ogDescription: 'Explore MontyPay’s developer documentation for SDKs, APIs, and integration guides designed to help businesses launch payments quickly and securely.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const mobileSDK = [
    // {
    //     icon: "/images/flutter.svg",
    //     buttonLink: "https://backend.montypay.com/wp-content/uploads/2024/04/MontyPay-FlutterSDK.zip",
    //     buttonText: "Download",
    // },
    {
        icon: "/images/android.svg",
        buttonLink: "https://github.com/MontypayApi/MontyPay-android-sdk",
        buttonText: t('General.Buttons.Link'),
    },
    {
        icon: "/images/ios.svg",
        buttonLink: "https://github.com/MontypayApi/MontyPay-ios-sdk",
        buttonText: t('General.Buttons.Link'),
    }
];

const ecommercePlugins = [
    {
        icon: "/images/magento19.svg",
        buttonLink: "/wpg-magento1-v.0.0.1.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/magento2.svg",
        buttonLink: "/Magento.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/prestashop.svg",
        buttonLink: "/prestashop.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/woocommerce.svg",
        buttonLink: "/woocommerce-web-payment-gateway2.0.7e.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/opencart.svg",
        buttonLink: "/montypay-extension3035.ocmod_.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/easy-digital-downloads.svg",
        buttonLink: "/MontyPay-edd-payment-gateway-V1.0.0.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/nopcommerce.png",
        buttonLink: "/Payments.MontyPay-V1.00.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/ecomz.svg",
        buttonLink: "/montypay_sdk-1.0.9.zip",
        buttonText: t('General.Buttons.Download'),
    },
    {
        icon: "/images/ecwid.svg",
        buttonLink: "https://www.ecwid.com/apps/featured/montypay-payment-gateway",
        buttonText: t('General.Buttons.Connect'),
    },
    {
        icon: "/images/high-level.png",
        buttonLink: "https://marketplace.gohighlevel.com/integration/66e93c73340adb16801e16f4",
        buttonText: t('General.Buttons.Connect'),
    },
];
</script>
<style lang="sass">
    
                
</style>