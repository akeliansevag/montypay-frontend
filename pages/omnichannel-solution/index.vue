<template lang="">
    <div>
        <Hero 
            breadcrumbs="Solutions / Payment Services"
            title="Omnichannel Solution"
            paragraph="Our Omnichannel Solution allows you to manage all of your transactions in real time with advanced analytics and reporting tools."
            button="Get Started"
            image="omnichannel"
        />
    </div>

    <section class="py-16 lg:py-32">
        <div class="container">
            <ContentBlock 
                title="Global Payments"
                class="text-center"
            />
            <div class="mt-16 grid md:grid-cols-3 gap-7 max-w-[1000px] m-auto">
                <div class="flex flex-col gap-5 justify-between">
                    <div class="p-5 rounded-lg border border-[#d9d9d9]" v-for="(item,index) in globalPayments" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-2">
                    <NuxtPicture class="w-full" :imgAttrs="{class:'w-full'}"  format="png" src="/global-payments.png" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32 bg-[#f6f6f6]">
        <div class="container">
            <ContentBlock 
                title="Advanced Reporting"
                class="text-center"
            />
            <div class="mt-16 grid lg:grid-cols-2 gap-20">
                <div class="grid grid-cols-2 gap-5">
                    <div class="bg-white p-5 rounded-lg shadow-md" v-for="(item,index) in advancedReporting" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <NuxtPicture class="w-full" :imgAttrs="{class:'w-full -mt-5'}"  format="png" src="/advanced-reporting.png" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32">
        <div class="container">
            <ContentBlock 
                title="Merchant Mobile App"
                class="text-center"
            />
            <div class="mt-16 grid lg:grid-cols-2 gap-20 items-center">
                <div class="grid grid-cols-2 gap-5">
                    <div class="bg-white p-5 rounded-lg border border-[#d9d9d9]" v-for="(item,index) in merchantMobileApp" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
                <div class="lg:justify-self-end">
                    <NuxtPicture format="png" src="/Device-14PM.png" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32 bg-[#f6f6f6]">
        <div class="container">
            <ContentBlock 
                title="Advanced Risk Managment"
                class="text-center"
            />
            <div class="items-center mt-16 lg:mt-24 gap-20 m-auto">
                <div>
                    <NuxtPicture class="w-full" :imgAttrs="{class:'max-w-[200px] mx-auto w-full -mt-5'}"  format="svg" src="/Vector.svg" />
                </div>
                <div class="grid grid-cols-3 gap-5 lg:mt-12 ">
                    <div class="bg-white p-5 rounded-lg shadow-md" v-for="(item,index) in advancedRiskManagement" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32 container">
        <div class="absolute w-full h-full top-0 left-0">
            <NuxtPicture class="w-full" :imgAttrs="{class:'object-cover w-full h-full rounded-lg'}"  format="svg" src="images/extensive-connectivity.png" />
        </div>
        <div class="py-36">
            <ContentBlock 
                title="Extensive Connectivity"
                class="text-center text-white"
            />
            <div class="mt-16 lg:mt-2 px-16">
                <div class="grid md:grid-cols-4 gap-5 mt-16">
                    <div class="text-white bg-black p-5 rounded-lg border border-[#D9D9D9]" v-for="(item,index) in extensiveConnectivity" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32">
        <div class="container">
            <ContentBlock 
                title="24/7 Live Chat Support"
                class="text-center"
            />
            <div class="mt-16 grid md:grid-cols-3 gap-7 max-w-[1200px] m-auto">
                <div class="flex flex-col gap-5 justify-between">
                    <div class="p-5 rounded-lg border border-[#d9d9d9]" v-for="(item,index) in liveChat" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-2">
                    <NuxtPicture class="w-full" :imgAttrs="{class:'w-full'}"  format="png" src="/livechat.png" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32 bg-black">
        <div class="absolute w-full h-full top-0">
            <img src="/acceptancebg.png" class="object-cover w-full h-full"/>
        </div>
        <div class="container">
            <ContentBlock 
                title="Higher Acceptance Rate"
                class="text-center text-white"
            />
            <div class="mt-16 lg:mt-2">
                <div class="grid md:grid-cols-3 gap-5 mt-16">
                    <div class="bg-white p-5 rounded-lg" v-for="(item,index) in acceptance" :key="index">
                        <div class="mb-16">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'Omnichannel Solution',
        ogTitle: 'Omnichannel Solution',
        description: 'Omnichannel Solution description',
        ogDescription: 'Omnichannel Solution description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const globalPayments = [
        {
            icon: '/credit-card-refresh.svg',
            title: 'Seamless transactions worldwide'
        },
        {
            icon: '/coins-stacked-02.svg',
            title: '100+ payment methods'
        },
        {
            icon: '/globe-02.svg',
            title: 'Global currency support'

        }
    ];

    const advancedReporting = [
        {
            icon: '/credit-card-up.svg',
            title: 'Payment transactions'
        },
        {
            icon: '/user-01.svg',
            title: 'Customer behavior'
        },
        {
            icon: '/presentation-chart-02.svg',
            title: 'Business performance'

        },
        {
            icon: '/line-chart-up-02.svg',
            title: 'Real-time analytics'

        },
        {
            icon: '/check-done-02.svg',
            title: 'Data-driven decisions'

        },
        {
            icon: '/bar-line-chart.svg',
            title: 'Enhance strategies'

        },
        {
            icon: '/sale-03.svg',
            title: 'Maintain a competitive edge'

        }
    ];

    const merchantMobileApp = [
        {
            icon: '/bank-note-03.svg',
            title: 'Manage transactions'
        },
        {
            icon: '/line-chart-up-02.svg',
            title: 'Track revenue'
        },
        {
            icon: '/wallet-01.svg',
            title: 'Send invoices'

        },
        {
            icon: '/qr-code-01.svg',
            title: 'Leverage the Pay by Link feature'

        },
        {
            icon: '/users-01.svg',
            title: 'Stay in touch with your customers'

        },
        {
            icon: '/bar-chart-04.svg',
            title: 'Gain valuable insights'

        },
    
    ];

    const advancedRiskManagement = [
        {
            icon: '/lock-02.svg',
            title: 'Guaranteed security'
        },
        {
            icon: '/folder-shield.svg',
            title: 'PCI DSS compliant'
        },
        {
            icon: '/cpu-chip-01.svg',
            title: 'Artificial Intelligence & Machine Learning'

        },
    
    ];

    const extensiveConnectivity = [
        {
            icon: '/server-05.svg',
            title: 'Latest technology'
        },
        {
            icon: '/dataflow-03.svg',
            title: '170+ connectors'
        },
        {
            icon: '/ext3.svg',
            title: 'Vast network of patterns & payment gateways'

        },
        {
            icon: '/dataflow-04.svg',
            title: 'Robust network'

        },
    
    ];

    const liveChat = [
        {
            icon: '/phone-01.svg',
            title: 'Merchant mobile application'
        },
        {
            icon: '/clapperboard.svg',
            title: 'Website'
        },
        {
            icon: '/grid-01.svg',
            title: 'Dashboard'

        },
        {
            icon: '/whatsapp.svg',
            title: 'Whatsapp'

        },
    
    ];

    const acceptance = [
        {
            icon: '/safe.svg',
            title: 'Cost-effective routes'
        },
        {
            icon: '/calendar-check-01.svg',
            title: 'Real-time and direct transactions accordingly'
        },
        {
            icon: '/route.svg',
            title: 'Routes with higher chance of acceptance'

        },
    
    ];
</script>

<style lang="">
    
</style>