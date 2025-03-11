<template>
    <section class="py-10">
        <div class="container">
            <div class="flex max-lg:flex-col gap-10 justify-between items-center">
                <div class="lg:w-2/5 flex flex-col gap-5">
                    <h1 class="text-balance">
                        Soft POS: Effortless Payment Transactions 
                    </h1>
                    <p>
                        With MontyPay’s SoftPOS, accepting payments is as simple as a tap. Transform compatible smartphones and tablets into payment terminals, enabling contactless 
in-person payments from digital wallets or physical cards, and making transactions quick and easy.
                    </p>
                    <div class="mt-3">
                        <ArrowButton text="Contact Sales" link="/contact-us" />
                    </div>
                  
                </div>
                
                <div class="lg:w-2/5">
                    <img src="/images/soft-pos/soft-pos-1.webp" alt="MontyPay Soft POS - Image 1" class="w-full">
                </div>
            </div>
        </div>
    </section>
    <Section class="overflow-hidden bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat">
        <div class="container">
            <div class="flex justify-between items-center max-lg:flex-col max-lg:gap-14 lg:gap-20">
                <div class="lg:w-1/3">
                    <img src="/images/soft-pos/soft-pos-2.webp" alt="Why SoftPOS?" class="w-full">
                </div>
                <div class="lg:w-2/3 flex flex-col gap-6">
                    <h2 class="text-white text-4xl">Why SoftPOS?</h2>
                    <div v-for="item in whySoftPos" :key="item.title" class="flex gap-5 backdrop-blur-[10px] bg-white/5 p-4 rounded-lg hover:bg-white/20 hover:backdrop-blur-[50px] transition-all">
                        <div>
                            <div v-html="item.icon"></div>
                        </div>
                        <div>
                            <h3 class="text-white text-xl mb-2 font-bold">{{ item.title }}</h3>
                            <p class="text-white">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    <Section class="bg-white">
        <div class="container">
            <div class="text-center max-w-[1100px] mx-auto">
                <h2 class="mb-5 text-4xl">Compatible devices</h2>
                <p>
                    MontyPay’s SoftPOS solution enables smooth contactless payments on iOS and Android, supporting NFC wallets such as Apple Pay, Google Pay, and Samsung Pay, as well as Visa, Mastercard, and American Express cards. 
                </p>
                <div class="flex max-lg:gap-5 lg:gap-10 justify-center mt-5 flex-wrap">
                    <img src="/images/soft-pos/google-pay.svg" alt="Google Pay">
                    <img src="/images/soft-pos/apple-pay.svg" alt="Apple Pay">
                    <img src="/images/soft-pos/visa.svg" alt="Visa">
                    <img src="/images/soft-pos/mastercard.svg" alt="Mastercard">
                    <img src="/images/soft-pos/amex.svg" alt="Amex">
                    <img src="/images/soft-pos/samsung-pay.svg" alt="Samsung Pay">
                </div>
                
            </div>
            <div class="max-w-[1100px] mx-auto">
                <div class="mb-16 flex gap-5 justify-center max-lg:mt-10 lg:mt-20">
                    <Filter @click="handleFilterClick('iPhone')" text="iPhone" :active="activeFilter === 'iPhone'" />
                    <Filter @click="handleFilterClick('Android')" text="Android" :active="activeFilter === 'Android'" />
                </div>
                <div v-if="activeFilter === 'iPhone'"> 
                    <div class="flex items-center max-lg:flex-col gap-10">
                        <div class="lg:w-1/2">
                            <h2 class="mb-3 text-2xl font-bold">Tap to Pay on iPhone is now available in:</h2>
                            <p>Securely accept payments on supported iPhones with built-in Apple security, ensuring no card data is stored on the device or servers.</p>
                            <div class="flex gap-10 mt-5">
                                <ul class="custom-list">
                                    <li>United States</li>
                                    <li>United Kingdom</li>
                                    <li>Canada</li>
                                    <li>Australia</li>
                                    <li>Ireland</li>
                                    <li>Austria</li>
                                </ul>
                                <ul class="custom-list">
                                    <li>Netherlands</li>
                                    <li>France</li>
                                    <li>Germany</li>
                                    <li>Sweden</li>
                                    <li>Czech Republic</li>
                                    <li>Italy</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div class="lg:w-1/2">
                            <img src="/images/soft-pos/iphone-visual.webp" alt="MontyPay Soft POS Payment Successful" class="w-full">
                        </div>
                    </div>
                </div>
                <div v-if="activeFilter === 'Android'">
                    <div class="flex items-center max-lg:flex-col gap-10">
                        <div class="lg:w-1/2">
                            <h2 class="mb-3 text-2xl font-bold">Tap to Pay on Android is now available in:</h2>
                            <p>Leverage NFC-enabled, Google-certified Android devices for broad accessibility across global markets.</p>
                            <div class="flex gap-10 mt-5">
                                <ul class="custom-list">
                                    <li>United States</li>
                                    <li>United Kingdom</li>
                                    <li>Canada</li>
                                    <li>Australia</li>
                                    <li>Ireland</li>
                                    <li>Austria</li>
                                    <li>Belgium</li>
                                    <li>Czech Republic</li>
                                    <li>Italy</li>
                                    <li>Finland</li>
                                    <li>Norway</li>
                                    <li>New Zealand</li>
                                </ul>
                                <ul class="custom-list">
                                    <li>Netherlands</li>
                                    <li>France</li>
                                    <li>Denmark</li>
                                    <li>Switzerland</li>
                                    <li>Germany</li>
                                    <li>Sweden</li>
                                    <li>Luxembourg</li>
                                    <li>Portugal</li>
                                    <li>Spain</li>
                                    <li>Singapore</li>
                                    <li>Malaysia</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:w-1/2">
                            <img src="/images/soft-pos/android-visual.webp" alt="" class="w-full">
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </Section>

    <section class="bg-quaternary lg:flex">
        <div class="lg:w-1/2 relative max-lg:h-[300px]">
            <img src="/images/soft-pos/use-cases.webp" alt="In-Person Payment" class="absolute top-0 left-0 w-full h-full object-cover">
        </div>
        <div class="lg:w-1/2 max-lg:px-5 max-lg:py-20 lg:px-32 lg:py-32">
            <SmallContent 
                subtitle="Use Cases"
                title="Streamlined, In-Person Payments"
                paragraph="MontyPay’s SoftPOS allows businesses to easily accept contactless payments on the go. Seamlessly manage both online and in-person payments from one integrated platform, without the need for traditional POS systems."
                :dark="true"
                :center="true"
            />
        </div>
    </section>

    <Section>
        <div class="container">   
            <div class="flex flex-col max-lg:gap-10 lg:gap-24">
                <div class="flex max-lg:flex-col gap-10 lg:justify-between lg:items-center">
                    <div class="lg:w-1/2">
                        <SmallContent 
                            subtitle="Use Cases"
                            title="Platforms"
                            paragraph="Broaden your reach with mobile payment options through MontyPay's SoftPOS. Ideal for dynamic environments like farmers markets, events, pop-up shops, food trucks, and after-service payments such as home repairs and landscaping, as well as businesses like delivery services, gas stations, and more."
                        />
                    </div>
                    <div class="lg:w-1/2">
                        <img src="/images/soft-pos/platforms.webp" alt="Contactless Payment" class="w-full">
                    </div>
                </div>
                <div class="flex max-lg:flex-col-reverse gap-10 lg:justify-between lg:items-center">
                    <div class="lg:w-1/2">
                        <img src="/images/soft-pos/retailers.webp" alt="Customer Check out" class="w-full">
                    </div>
                    <div class="lg:w-1/2">
                        <SmallContent 
                            subtitle="Use Cases"
                            title="Retailers"
                            paragraph="Enhance the in-store experience with flexible checkout options. </br> Equip your team to serve customers anywhere, reducing lines and enabling smoother seasonal or high traffic purchasing."
                            class="lg:justify-self-end"
                        />
                    </div>
                </div>

                <div class="flex max-lg:flex-col gap-10 lg:justify-between lg:items-center">
                    <div class="lg:w-1/2">
                        <SmallContent 
                            subtitle="Use Cases"
                            title="Unified Solution for Offline & Online Sales"
                            paragraph="Get the power of our Soft POS together with our payment gateway for an all-in-one solution that streamlines your business."
                            class="max-w-[600px]"
                        />
                        <div class="flex flex-col gap-5 mt-10">
                            <div v-for="item in solutions" :key="item.title" class="flex gap-5 bg-white p-4 rounded-lg border border-[#D9D9D9/80] shadow-md">
                                <div>
                                    <div v-html="item.icon"></div>
                                </div>
                                <div>
                                    <h3 class="text-xl mb-2 font-bold">{{ item.title }}</h3>
                                    <p>{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="lg:w-1/2">
                        <img src="/images/soft-pos/unified-solution.webp" alt="SoftPOS solution for online and offline sales" class="w-full max-w-[500px] lg:justify-self-end">
                    </div>
                </div>
            </div>
        </div>
    </Section>
    <Section class="bg-quaternary">
        <div class="container">
            <div class="flex items-center max-lg:flex-col gap-10">
                <div class="lg:w-1/2 text-white flex flex-col gap-5">
                    <h1>Ready to streamline your payment process?</h1>
                    <p>
                        Contact us today to learn more about integrating SoftPOS
into your business and start accepting payments effortlessly!
                    </p>
                    <p class="text-white font-bold">Get started today!</p>
                    <div class="mt-3">
                        <ArrowButton :transparent="true" text="Contact Sales" link="/contact-us" />
                    </div>
                    
                </div>
                <div class="lg:w-1/2">
                    <img src="/images/soft-pos/streamline2.webp" alt="MontyPay Soft POS - Image 2 | MontyPay Dashboard real-time sales performance">
                </div>
            </div>
        </div>
    </Section>
    <PaymentSolutions />
</template>

<script setup>
    const activeFilter = ref('iPhone');
   
    const handleFilterClick = (filter) => {
        activeFilter.value = filter;
    }
    useSeoMeta({
        title: 'Soft POS: Simple & Quick In-Person Payments | MontyPay',
        ogTitle: 'Soft POS: Simple & Quick In-Person Payments | MontyPay',
        description: 'Discover the benefits of MontyPay\'s Soft POS. Accept In-Store payments with an Iphone or Android device and transform your business in a simple tap.',
        ogDescription: 'Discover the benefits of MontyPay\'s Soft POS. Accept In-Store payments with an Iphone or Android device and transform your business in a simple tap.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    
    const whySoftPos = [
        {
            icon: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 7L15.5657 12.4343C15.3677 12.6323 15.2687 12.7313 15.1545 12.7684C15.0541 12.8011 14.9459 12.8011 14.8455 12.7684C14.7313 12.7313 14.6323 12.6323 14.4343 12.4343L12.5657 10.5657C12.3677 10.3677 12.2687 10.2687 12.1545 10.2316C12.0541 10.1989 11.9459 10.1989 11.8455 10.2316C11.7313 10.2687 11.6323 10.3677 11.4343 10.5657L7 15M21 7H17M21 7V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: 'Boost Sales & Expand Reach',
            description: 'Drive more revenue by accepting fast, in-person payments on smartphones. Tap into more markets and make transactions seamless, fast, and modern, meeting the needs of today’s digital-savvy shoppers.',
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.1668 16.9999C31.1668 24.824 24.8242 31.1666 17.0002 31.1666M31.1668 16.9999C31.1668 9.17588 24.8242 2.83325 17.0002 2.83325M31.1668 16.9999H25.5002M17.0002 31.1666C9.17613 31.1666 2.8335 24.824 2.8335 16.9999M17.0002 31.1666V25.4999M2.8335 16.9999C2.8335 9.17588 9.17613 2.83325 17.0002 2.83325M2.8335 16.9999H8.50016M17.0002 2.83325V8.49992" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: 'Quick Setup, Cost-Effective Solution',
            description: 'Get started fast! MontyPay’s SoftPOS app enables payments in minutes with an easy setup. Maximize accessibility and cut costs by transforming smartphones into payment devices, eliminating the need for extra hardware.',
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7498 14.875L15.5832 17.7083L21.9582 11.3333M28.3332 29.75V11.05C28.3332 8.66978 28.3332 7.47967 27.8699 6.57054C27.4625 5.77085 26.8123 5.12068 26.0126 4.71322C25.1035 4.25 23.9134 4.25 21.5332 4.25H12.4665C10.0863 4.25 8.89617 4.25 7.98704 4.71322C7.18736 5.12068 6.53719 5.77085 6.12973 6.57054C5.6665 7.47967 5.6665 8.66978 5.6665 11.05V29.75L9.56234 26.9167L13.104 29.75L16.9998 26.9167L20.8957 29.75L24.4373 26.9167L28.3332 29.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: 'Flexible Payments Options Anywhere',
            description: 'Accept payments seamlessly in dynamic settings like pop-ups, markets, and events with no extra hardware needed. Deliver a faster checkout experience, enhancing customer satisfaction and loyalty for repeat business.',
        }
    ]

    const solutions = [
        {
            icon: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 7L15.5657 12.4343C15.3677 12.6323 15.2687 12.7313 15.1545 12.7684C15.0541 12.8011 14.9459 12.8011 14.8455 12.7684C14.7313 12.7313 14.6323 12.6323 14.4343 12.4343L12.5657 10.5657C12.3677 10.3677 12.2687 10.2687 12.1545 10.2316C12.0541 10.1989 11.9459 10.1989 11.8455 10.2316C11.7313 10.2687 11.6323 10.3677 11.4343 10.5657L7 15M21 7H17M21 7V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: 'Boost Sales & Expand Reach',
            description: 'Drive more revenue by accepting fast, in-person payments on smartphones. Tap into more markets and make transactions seamless, fast, and modern, meeting the needs of today’s digital-savvy shoppers.',
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.1668 16.9999C31.1668 24.824 24.8242 31.1666 17.0002 31.1666M31.1668 16.9999C31.1668 9.17588 24.8242 2.83325 17.0002 2.83325M31.1668 16.9999H25.5002M17.0002 31.1666C9.17613 31.1666 2.8335 24.824 2.8335 16.9999M17.0002 31.1666V25.4999M2.8335 16.9999C2.8335 9.17588 9.17613 2.83325 17.0002 2.83325M2.8335 16.9999H8.50016M17.0002 2.83325V8.49992" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: 'Quick Setup, Cost-Effective Solution',
            description: 'Get started fast! MontyPay’s SoftPOS app enables payments in minutes with an easy setup. Maximize accessibility and cut costs by transforming smartphones into payment devices, eliminating the need for extra hardware.',
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7498 14.875L15.5832 17.7083L21.9582 11.3333M28.3332 29.75V11.05C28.3332 8.66978 28.3332 7.47967 27.8699 6.57054C27.4625 5.77085 26.8123 5.12068 26.0126 4.71322C25.1035 4.25 23.9134 4.25 21.5332 4.25H12.4665C10.0863 4.25 8.89617 4.25 7.98704 4.71322C7.18736 5.12068 6.53719 5.77085 6.12973 6.57054C5.6665 7.47967 5.6665 8.66978 5.6665 11.05V29.75L9.56234 26.9167L13.104 29.75L16.9998 26.9167L20.8957 29.75L24.4373 26.9167L28.3332 29.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: 'Flexible Payments Options Anywhere',
            description: 'Accept payments seamlessly in dynamic settings like pop-ups, markets, and events with no extra hardware needed. Deliver a faster checkout experience, enhancing customer satisfaction and loyalty for repeat business.',
        }
    ]
</script>

<style lang="scss" scoped>

</style>