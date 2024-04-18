<template lang="">
    <div>
        <Hero 
            title="API References"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants"
            image="api-reference"
        />

        <section id="section-2" class="py-16 lg:py-36">
            <div class="container">
                <div class="mt-16 lg:mt-20 flex-col flex gap-5 lg:px-20">
                    <div class="bg-transparent border p-10 rounded-lg text-center flex flex-col gap-5 items-center">
                        <ContentBlock
                            title="API Integration (POST)"
                            paragraph="This document describes integration procedures and POST protocol usage for e-commerce merchants. POST protocol implements acquiring payments (purchases) using specific API interactions."
                        />
                        <a class="mp-button-primary border border-black mx-auto mt-5" href="" download>Download PDF</a>
                    </div>
                    <div class="bg-transparent border p-10 rounded-lg text-center flex flex-col gap-5 items-center">
                        <ContentBlock
                            title="Generating a Certificate Signing Request"
                            paragraph="Here are the steps or how-to to create a Certificate Signing Request (CSR). The example is given specifically for Centos based systems."
                        />
                        <a class="mp-button-primary border border-black mx-auto mt-5" href="" download>Download PDF</a>
                    </div>
                    <div class="bg-transparent border p-10 rounded-lg text-center flex flex-col gap-5 items-center">
                        <ContentBlock
                            title="Integration API CREDIT_VA"
                            paragraph="This document describes integration procedures and CREDIT2VIRTUAL protocol usage for e-commerce merchants. CREDIT2VIRTUAL protocol implements money transfer transactions to the customer's account, using specific API interactions."
                        />
                        <a class="mp-button-primary border border-black mx-auto mt-5" href="" download>Download PDF</a>
                    </div>
                    <div class="bg-transparent border p-10 rounded-lg text-center flex flex-col gap-5 items-center">
                        <ContentBlock
                            title="Checkout API"
                            paragraph="Checkout service is a fast and easy way to create a secure payment page. It enables the collection and submission of payments, and their forwarding for processing. To use the checkout service in your Website, you must integrate it using the Checkout API. The API requires to send request data in json format and responds back with json return url string."
                        />
                        <a class="mp-button-primary border border-black mx-auto mt-5" href="" download>Link</a>
                    </div>
                    <div class="bg-transparent border p-10 rounded-lg text-center flex flex-col gap-5 items-center">
                        <ContentBlock
                            title="PostMan Request Sending"
                            paragraph="These step-by-step instructions describe how to send authentication requests using Postman. Result if such request is response, which contains “redirect URL”. “redirect URL” is the link used to send user to payment page (Checkout page)."
                        />
                        <a class="mp-button-primary border border-black mx-auto mt-5" href="" download>Download PDF</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

import { register } from 'swiper/element/bundle';
register();

useSeoMeta({
    title: 'White Label For PSP/Acquirer',
    ogTitle: 'White Label For PSP/Acquirer',
    description: 'White Label For PSP/Acquirer description',
    ogDescription: 'White Label For PSP/Acquirer description',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});

const values = [
    {
        id: 1,
        title: "Transparency",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience.<br><br>MontyPay is here to help all merchants capitalize on their global business by supporting worldwide currencies and different payment type."
    },
    {
        id: 2,
        title: "Innovation",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience.<br><br>MontyPay is here to help all merchants capitalize on their global business by supporting worldwide currencies and different payment type."
    },
    {
        id: 3,
        title: "Flexibility",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience.<br><br>MontyPay is here to help all merchants capitalize on their global business by supporting worldwide currencies and different payment type."
    },
    {
        id: 4,
        title: "Honesty & Integrity",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience.<br><br>MontyPay is here to help all merchants capitalize on their global business by supporting worldwide currencies and different payment type."
    },
]

const solutions_items = [
    {
        title: 'Payment Gateway'
    },
    {
        title: 'Merchant Management System'
    },
    {
        title: 'Merchant Mobile App'
    },
    {
        title: 'QR Code Self Service Checkout'
    }
]

const merchant_items = [
    {
        title: 'Track transactions and monitor revenue'
    },
    {
        title: 'Send invoice links'
    },
    {
        title: 'Utilize the pay-by-link feature for convenient payments  anytime, anywhere'
    },
    {
        title: 'Request support'
    },
    {
        title: 'Customize payment options based on client needs'
    },
    {
        title: 'Display QR codes for efficient payments at your physical location'
    },
    {
        title: 'Collect payments easily with the QR pay feature'
    },
]

const connectors = [
    {
        image: 'google.svg'
    },
    {
        image: 'shopify.svg'
    },
    {
        image: 'netflix.svg'
    },
    {
        image: 'creative-market.svg'
    },
    {
        image: 'dropbox.svg'
    },
    {
        image: 'evernote.svg'
    },
    {
        image: 'spotify.svg'
    },
    {
        image: 'asana.svg'
    },
    {
        image: 'airbnb.svg'
    },
    {
        image: 'youtube.svg'
    },

]

const activeTab = ref(0);

const show = (index) => {
    activeTab.value = index;
};
</script>

<style lang="sass">
    .swiper-scrollbar-drag 
        @apply bg-quaternary h-full rounded-full
</style>