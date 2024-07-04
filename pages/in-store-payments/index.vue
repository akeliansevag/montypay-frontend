<template lang="">
    <div>
        <Hero 
            title="In-Store Payment"
            paragraph="MontyPay is proud to unveil our cutting-edge in-store payment solutions, revolutionizing the way you shop and pay. With MontyPay, making payments in-store has never been easier or more secure."
            image="in-store-payment"
            hero="2"
        />

        <section id="section-3" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="w-full lg:w-full mx-auto bg-primary p-4 lg:p-20 before:content('') before:absolute before:top-0 before:right-0 before:w-[300px] before:h-[300px] before:lg:w-[600px] before:lg:h-[600px] before:bg-secondary before:blur-3xl before:-z-10 after:content('') after:absolute after:bottom-0 after:left-0 after:w-[300px] after:h-[300px] after:lg:w-[600px] after:lg:h-[600px] after:bg-secondary after:blur-3xl after:-z-10">
                    <ContentBlock 
                        title="Smart POS"
                        paragraph="Accept a wide range of payment methods, from credit cards to digital wallets."
                        class="text-center"
                    />

                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/smart-pos.png" 
                        class="w-full"
                        :imgAttrs="{class:'w-full lg:w-1/2 mt-16 mx-auto'}" 
                    />

                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                            <img src="/images/sale.svg" alt="Sales trends" width="50" height="50" />
                            <h2 class="text-base">Sales trends</h2>
                        </div>
                        <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                            <img src="/images/file-minus.svg" alt="Valuable insights into" width="50" height="50" />
                            <h2 class="text-base">Valuable insights</h2>
                        </div>
                        <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                            <img src="/images/calendar-check.svg" alt="Real-time reporting" width="50" height="50" />
                            <h2 class="text-base">Real-time reporting</h2>
                        </div>
                        <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                            <img src="/images/intersect-square.svg" alt="Seamless integration" width="50" height="50" />
                            <h2 class="text-base">Seamless integration</h2>
                        </div>
                        <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                            <img src="/images/file-question.svg" alt="Inventory management" width="50" height="50" />
                            <h2 class="text-base">Inventory management</h2>
                        </div>
                        <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                            <img src="/images/switch-horizontal.svg" alt="Real-time transaction data" width="50" height="50" />
                            <h2 class="text-base">Real-time transaction data</h2>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <div class="flex flex-col gap-4 bg-white border pb-5 rounded-[2rem]">
                        <img src="/images/isp-st.png" />
                        <p class="px-4">Tap to Pay for Swift Transactions</p>
                    </div>
                    <div class="flex flex-col gap-4 bg-white border pb-5 rounded-[2rem]">
                        <img src="/images/isp-bc-wp.png" />
                        <p class="px-4">Support for Both Card and Wallet Payments</p>
                    </div>
                    <div class="flex flex-col gap-4 bg-white border pb-5 rounded-[2rem]">
                        <img src="/images/isp-bps.png" />
                        <p class="px-4">Bill Payment Services</p>
                    </div>
                    <div class="flex flex-col gap-4 bg-white border pb-5 rounded-[2rem]">
                        <img src="/images/isp-mtd.png" />
                        <p class="px-4">Rapid Response Times to Minimize Transactions Durations</p>
                    </div>
                </div>

            </div>
        </section>

        <section id="section-5" class="mt-16 lg:mt-36 py-16 lg:py-36 bg-quaternary text-white overflow-hidden">
            <div class="container">
                <div class="max-w-[800px] mx-auto">
                    <div class="w-full">
                        <ContentBlock 
                            title="Customer Loyalty Program"
                            subtitle=""
                            paragraph="Designed to enhance shopping experiences and show appreciation for your customers' continued support, our Customer Loyalty Program unlocks a world of perks, rewards, and exclusive offers."
                            button="Get Started"
                        />
                    </div>
                    <div class="flex flex-col gap-10 mt-32 w-full">
                        <Blob />

                        <template  
                            v-for="(item, index) in customer_loyalty_program" 
                            :key="index"
                        >
                            <div class="flex flex-col md:flex-row gap-10 items-center md:items-start">
                                <div class="flex flex-col items-center gap-10">
                                    <div class="flex items-center justify-center bg-black w-[130px] h-[130px] rounded-full">
                                        <img :src="`/images/${item.icon}`" alt="eCommerce Services" width="45" height="45" />
                                    </div>
                                    <svg v-if="index !== customer_loyalty_program.length - 1" class="hidden md:block" width="1" height="83" viewBox="0 0 1 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" y1="83" x2="0.499996" y2="2.18557e-08" stroke="white"/>
                                    </svg>
                                </div>

                                <ContentBlock 
                                    :title="item.title"
                                    :paragraph="item.paragraph"
                                />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'Online Payments Services',
        ogTitle: 'Online Payments Services',
        description: 'Online Payments Services description',
        ogDescription: 'Online Payments Services description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
    
    const activeTab = ref(0);

    const show = (index) => {
        activeTab.value = index;
    };

    const customer_loyalty_program = [
        {
            title: 'Customized Loyalty Solutions',
            paragraph: 'Create tailor-made loyalty programs for your customers using MontyPay\'s flexible tools. Develop programs that suit your brand and resonate with your customers preferences.',
            icon: 'sliders.svg'
        },
        {
            title: 'Loyalty Rewards',
            paragraph: 'Offer various loyalty rewards to your customers, from points-based systems to exclusive discounts and cashback. Design rewards that drive repeat purchases and increase customer retention.',
            icon: 'heart-hand.svg'
        },
        {
            title: 'Data-Driven Insights',
            paragraph: 'Utilize the power of customer behavior insights. Understand your customers spending habits, preferred products, and purchase frequency to refine and optimize your loyalty program strategies.',
            icon: 'bar-chart.svg'
        },
        {
            title: 'Special Promotions',
            paragraph: 'Run targeted promotions through the MontyPay loyalty program. Drive customer engagement and increase sales by offering special promotions exclusively to your loyal customers.',
            icon: 'announcement.svg'
        },
        {
            title: 'Seamless Integration',
            paragraph: 'Seamlessly integrate the loyalty program into your existing system. No hassle, no extra work—simply leverage MontyPay\'s easy integration to set up your loyalty program swiftly.',
            icon: 'seamless-integration.svg'
        },
        // {
        //     title: 'Soft POS',
        //     icon: 'sliders.svg'
        // }
    ]
</script>

<style lang="">
    
</style>