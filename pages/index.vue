<template lang="">
    <div>
        <HeroBanner class="text-primary"
            title="Beyond Payments"
            paragraph="With MontyPay, you gain access to cutting-edge technology, a secure and user-friendly platform, and a team dedicated to your success."
            button="Get Started" 
            image="montypay-banner" 
        />

        <section id="section-2" class="py-16 lg:py-36 bg-quaternary text-primary">
            <div class="container">
                <div class="w-full lg:w-4/5 xl:w-3/5 mx-auto flex flex-col items-center gap-12 text-center">
                    <h3>Discover MontyPay</h3>
                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/discover-montypay.png" 
                        class="w-full lg:w-2/3"
                        :imgAttrs="{class:'w-full'}" 
                    />
                    <h2>A secure and user-friendly platform, and a team dedicated to your success.</h2>
                    <p>MontyPay is a smarter payment service provider designed to empower businesses of all sizes with the tools they need to thrive in today's digital economy. Our comprehensive suite of services, including:</p>
                </div>
                <div class="flex flex-col sm:flex-row flex-wrap justify-center items-start lg:items-center gap-4 mt-12">
                    <div class="flex justify-center items-center gap-2 font-semibold">
                        <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-[#ffffff1a] rounded-full" />Online payments
                    </div>  
                    <div class="flex justify-center items-center gap-2 font-semibold">
                        <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-[#ffffff1a] rounded-full" />In-store payments
                    </div>  
                    <div class="flex justify-center items-center gap-2 font-semibold">
                        <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-[#ffffff1a] rounded-full" />QCheck services
                    </div>  
                    <div class="flex justify-center items-center gap-2 font-semibold">
                        <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-[#ffffff1a] rounded-full" />eCommerce services
                    </div>  
                </div>
            </div>
        </section>

        <section id="section-3" class="py-16 lg:py-36 text-black overflow-hidden">
            <div class="container flex flex-col lg:flex-row gap-8">
                <div class="flex flex-col gap-8 flex-1 justify-between">
                    <ContentBlock 
                        title="Online Payments"
                        subtitle="Dive into the future of digital commerce with MontyPay's Online Payments!"
                        paragraph="It's not just about transactions; it's about creating a sleek and secure payment experience for your digital venture. Whether you're running an online shop, subscription service, or a bustling digital marketplace, our robust payment gateway promises smooth sailings, offering multiple payment methods and customization to reflect your brand. Ride the waves of online competition with MontyPay's payment solutions!"
                        button="Get Started"
                    />
                </div>
                <div class="flex-1 w-full">
                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/online-payments.png" 
                        :imgAttrs="{class:'w-1/2 lg:w-1/2 mx-auto'}" 
                    />
                </div>
            </div>
        </section>

        <section id="section-4" class="text-primary lg:h-screen">
            <NuxtPicture priority
                format="webp,avif" 
                src="/images/in-store-payments.png" 
                class="w-full lg:w-2/3"
                :imgAttrs="{class:'w-full h-full object-cover'}" 
            />
            <div class="lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full flex items-center bg-quaternary lg:bg-quaternary/80 py-14 lg:py-0 lg:px-14">
                <div class="container">
                    <ContentBlock 
                        title="In-store Payments"
                        subtitle="Welcome to a new era of checkout experiences with MontyPay's In-store Payments!"
                        paragraph="Say goodbye to the tedium of traditional transactions. Our Smart POS and Soft POS systems are here to make your physical store payments a breeze. With QR Pay or good old card swipes, MontyPay's in-store solutions mean business by speeding up sales, reducing queue times, and giving customers a checkout that's anything but ordinary."
                        button="Get Started"
                    />
                </div>
            </div>
        </section>

        <section id="section-5" class="py-16 lg:py-36 text-black overflow-hidden">
            <div class="container flex flex-col lg:flex-row gap-8 justify-center items-center">
                <ContentBlock 
                    title="QCheck"
                    subtitle="Get ready for a game-changer in the hospitality industry - QCheck by MontyPay! "
                    paragraph="This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!"
                    button="Get Started"
                    class="flex-1"
                />
                <div class="flex-1 w-full">
                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/q-check.png" 
                        :imgAttrs="{class:'w-full lg:w-3/4 mx-auto'}" 
                    />
                </div>
            </div>
        </section>

        <section id="section-6" class="pt-16 lg:pt-36 bg-quaternary overflow-hidden text-primary lg:text-center">

            <Blob />

            <div class="container flex flex-col gap-32">
                <div class="w-full lg:w-4/5 xl:w-3/5 mx-auto">
                    <ContentBlock 
                        title="eCommerce Store"
                        subtitle="Level up your online business game with MontyPay's eCommerce Store development!"
                        paragraph="It's not just about setting up a website; it's about crafting a whole journey. Our platform offers everything you need, from eCommerce website development, content management, order fulfillment, to mastering social media. Manage your online operations effortlessly, provide top-notch security for transactions, and broaden your customer base, ensuring a seamless shopping adventure!"
                    />
                </div>
                <div class="flex-1 w-full">
                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/e-commerce-store.png" 
                        class="w-full"
                        :imgAttrs="{class:'w-full lg:w-3/4 mx-auto'}" 
                    />
                </div>
            </div>
        </section>

        <section id="section-7" class="py-16 lg:py-36 text-black overflow-hidden">
            <div class="container">
                <h2>Why MontyPay?</h2>
                <div class="flex flex-col lg:flex-row justify-between">
                    <div class="w-full lg:w-3/5 mt-10">
                        <FAQs :faqs="faq" />
                        <a to="/" class="mp-button-secondary mt-10 hover:bg-black hover:text-primary">Learn More <Icon name="fa6-solid:arrow-right" class="icon" /></a>
                    </div>
                    <div class="w-full lg:w-1/3 mt-16 lg:mt-0">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/why-montypay.png" 
                            class="w-full"
                            :imgAttrs="{class:'w-full aspect-video lg:aspect-auto object-cover'}" 
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="section-8" class="py-16 lg:py-36 bg-quaternary text-primary">
            <div class="container flex flex-col lg:flex-row gap-8">
                <div class="flex flex-col gap-8 w-full lg:w-1/2 justify-between">
                    <h3>Customer Stories</h3>
                    <div>
                        <Swiper
                            :slides-per-view="1"
                            :loop="true"
                        >
                            <SwiperSlide>
                                <div class="flex gap-2">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                </div>
                                <p class="text-4xl mt-10">I use the pay by link feature from MontyPay app. it's very easy to use, i even generate QR Codes for face to face payments. Their support is amazing and the team is very supportive.</p>
                                <div class="flex items-center w-full gap-6 mt-10">
                                    <NuxtPicture 
                                        priority
                                        format="webp,avif" 
                                        src="/images/naji-harb.png" 
                                        class="w-1/5 lg:w-1/12"
                                        :imgAttrs="{class:'w-full'}" 
                                    />
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">Naji Harb</span>
                                        <span>Dec 05, 2023</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex gap-2">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                </div>
                                <p class="text-4xl mt-10">I use the pay by link feature from MontyPay app. it's very easy to use, i even generate QR Codes for face to face payments. Their support is amazing and the team is very supportive.</p>
                                <div class="flex items-center w-full gap-6 mt-10">
                                    <NuxtPicture 
                                        priority
                                        format="webp,avif" 
                                        src="/images/naji-harb.png" 
                                        class="w-1/5 lg:w-1/12"
                                        :imgAttrs="{class:'w-full'}" 
                                    />
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">Naji Harb</span>
                                        <span>Dec 05, 2023</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex gap-2">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 0H0.1875V45H45V0Z" fill="#00B67A"/>
                                        <path d="M22.5936 30.3281L29.4088 28.5938L32.2563 37.4063L22.5936 30.3281ZM38.2779 18.9375H26.2812L22.5936 7.59375L18.9059 18.9375H6.90918L16.6186 25.9688L12.9309 37.3125L22.6402 30.2812L28.6152 25.9688L38.2779 18.9375Z" fill="white"/>
                                    </svg>
                                </div>
                                <p class="text-4xl mt-10">I use the pay by link feature from MontyPay app. it's very easy to use, i even generate QR Codes for face to face payments. Their support is amazing and the team is very supportive.</p>
                                <div class="flex items-center w-full gap-6 mt-10">
                                    <NuxtPicture 
                                        priority
                                        format="webp,avif" 
                                        src="/images/naji-harb.png" 
                                        class="w-1/5 lg:w-1/12"
                                        :imgAttrs="{class:'w-full'}" 
                                    />
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">Naji Harb</span>
                                        <span>Dec 05, 2023</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/customer-stories.png" 
                        :imgAttrs="{class:'w-full lg:w-3/4 mx-auto rounded-lg'}" 
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Homepage',
    ogTitle: 'Homepage',
    description: 'Homepage description',
    ogDescription: 'Homepage description',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
// useHead({
//   bodyAttrs: {
//     class: 'dark-header',
//   },
// });
const faq = [
    {
        id: 1,
        question: "Global Payments",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
    {
        id: 2,
        question: "Advanced Reporting",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
    {
        id: 3,
        question: "Merchant Mobile App",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
    {
        id: 4,
        question: "Omnichannel Solution",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
    {
        id: 5,
        question: "Higher Acceptance",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
    {
        id: 6,
        question: "Advanced Risk Management",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
    {
        id: 7,
        question: "Extensive Connectivity",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
    {
        id: 8,
        question: "24/7 Live Chat Support",
        answer: "This self-service checkout wizardry revolutionizes how customers settle their bills at restaurants and hotels. With tip-friendly features, QCheck simplifies payments, elevates customer experience, and even boosts tips for your amazing staff. Say hello to a new age of payment methods and let QCheck set the pace!",
    },
]


</script>

<style lang="">
   
</style>
