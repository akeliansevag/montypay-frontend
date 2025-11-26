<template lang="">
    <div>
        <Hero 
            title="API Reference"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants"
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
                                <NuxtLink class="api-item-link" target="_blank" external :to="item.buttonLink">{{item.buttonText}}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </div>
</template>

<script setup>

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
        title: "API Integration (POST)",
        paragraph: "This document describes integration procedures and POST protocol usage for e-commerce merchants. POST protocol implements acquiring payments (purchases) using specific API interactions.",
        buttonLink: "https://docs.montypay.com/s2s_card",
        buttonText: "Link",
    },
    {
        title: "Generating a Certificate Signing Request",
        paragraph: "Here are the steps or how-to to create a Certificate Signing Request (CSR). The example is given specifically for Centos based systems.",
        buttonLink: "/MontyPay_Generating-a-Certificate-Signing-Request.pdf",
        buttonText: "Download PDF",
    },
    {
        title: "Integration API CREDIT_VA",
        paragraph: "This document describes integration procedures and CREDIT2VIRTUAL protocol usage for e-commerce merchants. CREDIT2VIRTUAL protocol implements money transfer transactions to the customer's account, using specific API interactions.",
        buttonLink: "https://docs.montypay.com/s2s_apm#credit2virtual-request",
        buttonText: "Link",
    },
    {
        title: "Checkout API",
        paragraph: "Checkout service is a fast and easy way to create a secure payment page. It enables the collection and submission of payments, and their forwarding for processing. To use the checkout service in your Website, you must integrate it using the Checkout API. The API requires to send request data in json format and responds back with json return url string.",
        buttonLink: "https://docs.montypay.com/",
        buttonText: "Link",
    },
    {
        title: "PostMan Request Sending",
        paragraph: "These step-by-step instructions describe how to send authentication requests using Postman. Result if such request is response, which contains “redirect URL”. “redirect URL” is the link used to send user to payment page (Checkout page).",
        buttonLink: "/MontyPay_API_Credit_VA_Protocol_v1_1new.pdf",
        buttonText: "Download PDF",
    },
];

</script>

<style lang="sass">

</style>