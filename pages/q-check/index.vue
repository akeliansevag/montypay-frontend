<template lang="">
    <div>
        <Hero 
            title="QCheck"
            paragraph="Get ready for the ultimate dining revolution with QCheck, the hospitality industry's game-changing Self-Service Checkout solution!"
            image="qcheck"
            hero="14"
        />

        <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col text-center">
                    <div class="w-full md:w-3/4 mx-auto">
                        <ContentBlock 
                            title="The Future of Dining Made Easy! <br /> Check the menu & pay the bill using the same QR!"
                            paragraph="QCheck spells a new chapter in dining satisfaction! Enjoy seamless bill splitting, great branding, tip-friendly features, and real-time reporting - all designed to elevate the dining experience and wow your guests."
                        />
                    </div>

                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/menu-and-pay.png" 
                        class="w-full mt-14"
                        :imgAttrs="{class:'w-full'}" 
                    />
                </div>
            </div>
        </section>

        <section class="mt-14 lg:mt-36">
            <div class="container lg:px-36">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-0">
                    <div :class="index==(services.length-1) ? 'md:col-span-2' : ''" v-for="(service,index) in services" :key="index">
                        <div class="bg-[#efefef] rounded-[40px] p-10 min-h-[228px]">
                            <h5 class="mb-5">{{service.title}}</h5>
                            <p>{{service.description}}</p>
                        </div>
                    </div>
                </div>
                
                <NuxtPicture
                    format="webp"
                    src="/images/qrcheck-plate.webp"
                    :imgAttrs="{class: 'w-full rounded-[40px] mt-14'}"
                />
                
                <div>
                    <ContentBlock 
                        title="Main Benefits"
                        class="text-center mt-28"
                    />
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
                        <div class="border-[#d9d9d9] flex gap-6 border rounded-lg p-10 h-full" v-for="(benefit,index) in benefits" :key="index">
                            <div>
                                <div class="-mt-4 w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[#233F94]">
                                    <NuxtPicture 
                                        format="svg"
                                        :src="benefit.icon"
                                        :imgAttrs="{class: 'w-[54px]'}"
                                    />
                                </div>
                            </div>
                            <div>
                                <h5 class="mb-5">{{benefit.title}}</h5>
                                <p>{{benefit.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between gap-14 w-full mt-40 pt-40 px-14 bg-gradient-to-b from-[#003383] to-[#0F0C22] rounded-3xl">
                    <NuxtPicture 
                        format="svg"
                        src="/images/qcheck-img1.png"
                        class="-mt-60"
                        :imgAttrs="{class: 'w-full'}"
                    />
                    <NuxtPicture 
                        format="svg"
                        src="/images/qcheck-img2.png"
                        class="-mb-20"
                        :imgAttrs="{class: 'w-full'}"
                    />
                </div>
            </div>
        </section>

        <section id="section-3" class="py-14">
            <div class="container">
                <ContentBlock 
                    title="Connectors"
                    class="text-center mt-28"
                />
                <div class="flex flex-col gap-7 lg:gap-14 mt-8 text-white text-left">
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-36 gap-y-20 items-center mt-16">
                        <div class="px-6" v-for="(connector,index) in connectors" :key="index">
                            <NuxtPicture 
                                priority
                                format="svg" 
                                :src="`/images/${connector.image}`"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'QR Code Scanner Benefits',
        ogTitle: 'QR Code Scanner Benefits',
        description: 'Discover the main benefits of QR code scanner with MontyPay, the dining revolution and hospitality industry\'s game changing self-service checkout solution.',
        ogDescription: 'Discover the main benefits of QR code scanner with MontyPay, the dining revolution and hospitality industry\'s game changing self-service checkout solution.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
    
    const activeTab = ref(0);

    const show = (index) => {
    activeTab.value = index;
    };

    const connectors = [
        {
            image: 'brink-pos.png'
        },
        {
            image: 'dinerware.png'
        },
        {
            image: 'squirrel.png'
        },
        {
            image: 'micros.png'
        },
        {
            image: 'pos-itouch.png'
        },
        {
            image: 'heartland-xpient.png'
        },
        {
            image: 'falcons-soft.png'
        },
        {
            image: 'bimpos.png'
        },
    ]

    const services = [
        {
            title: 'Elevate Your Brand',
            description: 'QCheck replaces clunky EFTPOS machines with custom-designed, branded cards, enhancing your establishment\'s identity and image.'
        },
        {
            title: 'Memorable Impressions',
            description: 'Impress your guests with a visually appealing payment method, leaving a lasting positive impression of your venue.'
        },
        {
            title: 'Enhanced Efficiency',
            description: 'Staff can focus on providing exceptional service rather than dealing with payment complexities.'
        },
        {
            title: 'Faster Dining Experience',
            description: 'QCheck accelerates the payment process, reducing waiting times and enabling quicker table turnovers.'
        },
        {
            title: 'Group-Friendly',
            description: 'QCheck seamlessly splits bills, catering to groups and parties effortlessly.'
        },
        {
            title: 'Individual Control',
            description: 'Each guest can manage their portion of the bill independently, enhancing flexibility.'
        },
        {
            title: 'Increase in Tips',
            description: 'QCheck\'s tip-friendly features have been proven to boost gratuities, further incentivizing excellent service.'
        },
    ]

    const benefits= [
        {
            icon: '/images/clock-check.svg',
            title: 'Faster Checkout',
            description: 'QCheck streamlines the payment process, reducing waiting times and improving overall efficiency.'
        },
        {
            icon: '/images/shield-dollar.svg',
            title: 'Simple and Secure Payments',
            description: 'Guests enjoy a user-friendly payment experience while businesses benefit from enhanced security.'
        },
        {
            icon: '/images/calendar-check-01.svg',
            title: 'Real-Time Reporting',
            description: 'Access real-time transaction data for better business insights and decision-making.'
        },
        {
            icon: '/images/line-chart-up-02.svg',
            title: 'Increase in Tips',
            description: 'QCheck\'s tip-friendly features encourage guests to leave gratuities, increasing staff earnings.'
        },
        {
            icon: '/images/annotation-x.svg',
            title: 'No Monthly Fees',
            description: 'Say goodbye to monthly fees or subscription costs.'
        },
        {
            icon: '/images/heart-circle.svg',
            title: 'Brand Visibility',
            description: 'Design the checkout experience to align with your brand identity, reinforcing brand visibility and recognition.'
        }
    ]

</script>

<style lang="">
    
</style>