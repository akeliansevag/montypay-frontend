<template>
    <section class="relative">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 right-0" />

        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-1 lg:justify-between">
                <div class="lg:w-[50%] flex flex-col gap-7 my-10">
                    <h1>
                        QCheck: The Self-Service Checkout Solution That Works for You
                    </h1>
                    <p>
                        Flip the floor faster and keep them coming back with QCheck, the ultimate self-service checkout
                        tool. Whether guests are scanning to browse your menu
                        or settling their bill, QCheck is designed for speed, efficiency, and satisfaction.
                    </p>
                    <div>
                        <div class="relative">
                            <input required type="text" placeholder="What's your restaurant's name?"
                                class="border border-[#D9D9D9] w-full rounded-xl px-5 py-4 lg:pr-[170px] shadow-md" />
                            <button
                                class="mp-button-quad lg:absolute max-lg:mt-1 max-lg:w-full lg:right-1 lg:h-[85%] lg:top-1/2 lg:-translate-y-1/2">
                                Request a Demo
                            </button>
                        </div>

                    </div>
                </div>
                <div class="lg:w-[35%]">
                    <img src="/qcheck-banner.webp" alt="QCheck Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <FadeSlider :data="sliderOne" title="Starts With a Scan. Ends With a Smile."/>
    <div class="container">
        <div class="separator"></div>
    </div>

    <FadeSlider title="It’s All Just One Scan Away " reverse="true"/>
    <div class="container">
        <div class="separator"></div>
    </div>
    
</template>

<script setup>
useSeoMeta({
    title: 'QCheck',
    ogTitle: 'QCheck',
    description: 'QCheck ',
    ogDescription: 'QCheck ',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const sliderOne = [
    {
        title: 'Faster Checkout',
        description: 'Save up to 17 minutes per table for faster turnover with QCheck\'s seamless pay-at-table experience.',
        image: '/faster-checkout.webp',
        category: 'Faster',
    },
    {
        title: 'Seamless Experience',
        description: 'Ensure a frictionless journey from menu browsing to bill payment, leaving guests happy and operations smooth.',
        image: '/seamless-experience.webp',
        category: 'Seamless',
    },
    {
        title: 'Simple and Secure Payments',
        description: 'Offer confidence and peace of mind with multiple secure payment options, from mobile wallets to cards.',
        image: '/simple-and-secure-payments.webp',
        category: 'Secure',
    },
    {
        title: 'Multiple Payment Options',
        description: 'Give guests flexibility with wallet payments, card payments, and many more, all in one hassle-free process',
        image: '/multiple-payment-options.webp',
        category: 'Flexible',
    },


];
</script>

<style lang="scss" scoped></style>