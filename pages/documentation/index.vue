<template lang="">
     <Hero 
            title="Documentation"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants"
            image="documentation"
        />
    
    <section class="py-16 lg:py-36 bg-black text-white text-center">
        <div class="container max-w-[900px]">
            <ContentBlock 
                title="Mobile SDK"
                paragraph="MontyPay offers implementation of in-app payments for any smart device – smart watches, wearables, smart TV – you name it, with an easy integration into Mobile apps. <br>It allows a simplified payment experience, by allowing clients to pay on the spot while using your application. We’ve implemented all of our extensive payment experience into the development of a smooth mobile-friendly checkout, to decrease your card abandonment rate."
            />
            <NuxtLink class="mt-5 inline-block text-[#00DFDF] underline" to="https://github.com/MontyPayAPI" target="_blank" external>https://github.com/MontyPayAPI </NuxtLink>
        </div>
        <div class="container max-w-[1000px] mt-14">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div class="api-item" v-for="(item,index) in mobileSDK" :key="index">
                    <div class="api-item-icon">
                        <img :src="item.icon" />
                    </div>
                    <div class="api-item-link-wrapper">
                        <NuxtLink class="api-item-link" target="_blank" external :to="item.buttonLink">{{item.buttonText}}</NuxtLink>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-36 bg-white text-center">
        <div class="container max-w-[900px]">
            <ContentBlock 
                title="Ecommerce Plugins"
            />
        </div>
        <div class="container mt-14">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div class="api-item" v-for="(item,index) in ecommercePlugins" :key="index">
                    <div class="api-item-icon">
                        <img :src="item.icon" />
                    </div>
                    <div class="api-item-link-wrapper">
                        <NuxtLink class="api-item-link" target="_blank" external :to="item.buttonLink">{{item.buttonText}}</NuxtLink>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
useSeoMeta({
    title: 'Documentation',
    ogTitle: 'Documentation',
    description: 'Documentation',
    ogDescription: 'Documentation',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const mobileSDK = [
    {
        icon: "/images/flutter.svg",
        buttonLink: "/MontyPay-FlutterSDK.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/android.svg",
        buttonLink: "https://github.com/MontypayApi/MontyPay-android-sdk",
        buttonText: "Link",
    },
    {
        icon: "/images/ios.svg",
        buttonLink: "https://github.com/MontypayApi/MontyPay-ios-sdk",
        buttonText: "Link",
    }
];

const ecommercePlugins = [
    {
        icon: "/images/magento19.svg",
        buttonLink: "/wpg-magento1-v.0.0.1.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/magento2.svg",
        buttonLink: "/Magento.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/prestashop.svg",
        buttonLink: "/prestashop1.0.2.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/woocommerce.svg",
        buttonLink: "/woocommerce-web-payment-gateway2.0.7e.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/opencart.svg",
        buttonLink: "/montypay-extension3035.ocmod_.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/easy-digital-downloads.svg",
        buttonLink: "/MontyPay-edd-payment-gateway-V1.0.0.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/nopcommerce.png",
        buttonLink: "/Payments.MontyPay-V1.00.zip",
        buttonText: "Download",
    },
    {
        icon: "/images/ecomz.svg",
        buttonLink: "/montypay_sdk-1.0.9.zip",
        buttonText: "Download",
    },
];
</script>
<style lang="sass">
    
                
</style>