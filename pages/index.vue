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
            <div class="container">
                <ContentBlock 
                    title="Online Payments"
                    paragraph="Dive into the future of digital commerce"
                    class="text-center"
                />

                <div class="grid grid-cols-1 lg:grid-cols-3 gap20 place-items-center mt-16 bg-[#D9D9D933] py-16 px-20 rounded-lg font-bold text-center">
                    <div class="flex flex-col gap-2 items-center justify-center font-bold online w-[300px] h-[300px] py-20 px-10 bg-primary rounded-full">
                        <span class="text-7xl">50+</span>
                        <span>Countries</span>
                    </div>
                    <div class="flex flex-col gap-2 items-center justify-center online w-[300px] h-[300px] py-20 px-10 bg-primary rounded-full">
                        <svg width="72" height="72" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="black"/>
                        </svg>
                        <span>Global Reach</span>
                    </div>
                    <div class="flex flex-col gap-2  items-center justify-center online w-[300px] h-[300px] py-20 px-10 bg-primary rounded-full">
                        <span class="text-7xl">100+</span>
                        <span>Payment Methods</span>
                    </div>
                </div>

                <h2 class="text-2xl text-center mt-16">Features</h2>

                <div class=""></div>
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

<style lang="sass">
    .online
        box-shadow: 0px 4px 24px 0px #0000001A
    
</style>
