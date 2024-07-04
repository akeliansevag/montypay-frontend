<template lang="">
    <div>
        <Hero 
            breadcrumbs="Solutions / Payment Services"
            title="Omnichannel Solution"
            paragraph="Manage all of your transactions in real time with advanced analytics and reporting tools."
            button="Get Started"
            image="omnichannel"
        />
    </div>

    <section class="py-16 lg:py-32">
        <div class="container">
            <ContentBlock 
                title="Global Payments"
                paragraph="MontyPay provides you with international payment solutions and methods that will streamline your payment processes and scale your revenues."
                class="text-center w-full lg:w-1/2 lg:mx-auto"
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
                paragraph="A powerful tool that delivers in-depth insights and real-time data analysis to help you make informed decisions, track performance, and drive business growth."
                class="text-center w-full lg:w-1/2 lg:mx-auto"
            />
            <div class="mt-16 grid lg:grid-cols-2 gap-20">
                <div class="grid grid-cols-2 gap-5">
                    <div class="bg-white p-5 rounded-lg" v-for="(item,index) in advancedReporting" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <NuxtPicture class="w-full" :imgAttrs="{class:'w-full -mt-5'}"  format="png" src="images/advanced-reporting.png" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32">
        <div class="container">
            <ContentBlock 
                title="Merchant Mobile App"
                class="text-center w-full lg:w-1/2 lg:mx-auto"
                paragraph="A comprehensive solution that offers a seamless experience for merchants, allowing them to keep track of all transactions, enhance customer experience and satisfaction, and provide seamless access to essential business tools on the go."
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
                    <NuxtPicture format="png" src="images/merchant-mobile-app.png" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32 bg-[#0f0c22]">
        <div class="container">
            <ContentBlock 
                title="Advanced Risk Managment"
                class="text-center w-full lg:w-2/3 lg:mx-auto text-white"
                paragraph="Cutting-edge risk assessment tools, designed to identify and mitigate potential threats, ensuring secure and reliable transactions."
            />
            <div class="items-center mt-16 lg:mt-14 flex gap-10 max-w-[900px] m-auto">
                <div>
                    <NuxtPicture class="w-full" :imgAttrs="{class:'mx-auto w-full -mt-5'}"  format="svg" src="/images/advanced-risk-management.png" />
                </div>
                <div class="flex flex-col gap-5">
                    <div class="bg-white p-5 rounded-lg" v-for="(item,index) in advancedRiskManagement" :key="index">
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
                title="Lending and Loyalty"
                class="text-center w-full lg:w-2/3 lg:mx-auto"
                paragraph="Boost your sales and increase your revenue with MontyPay’s exclusive loyalty program and diverse lending services."
            />
            <div class="grid lg:grid-cols-3 w-full lg:w-2/3 mx-auto gap-6 mt-16">
                <div class="flex flex-col gap-4 bg-white border pb-5 rounded-[2rem]">
                    <img src="/images/ll-acs.png" />
                    <div class="px-4">
                        <img src="/images/credit-card-plus.svg" alt="Increased sales" width="35" height="35" />
                        <p class="mt-4 text-base">Advanced Credit Scoringnsactions</p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 bg-white border pb-5 rounded-[2rem]">
                    <img src="/images/ll-pblp.png" />
                    <div class="px-4">
                        <img src="/images/sticker-circle.svg" alt="Increased sales" width="35" height="35" />
                        <p class="mt-4 text-base">Points-Based Loyalty Program</p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 bg-white border pb-5 rounded-[2rem]">
                    <img src="/images/ll-tlp.png" />
                    <div class="px-4">
                        <img src="/images/coins-hand.svg" alt="Increased sales" width="35" height="35" />
                        <p class="mt-4 text-base">Tailored Lending Program</p>
                    </div>
                </div>
            </div>

            <ContentBlock 
                class="mt-16 text-center w-full lg:w-2/3 lg:mx-auto"
                paragraph="Collect points through our loyalty program and meet our criteria to qualify for loans from MontyPay."
            />
        </div>
    </section>

    

    <!-- <section class="py-16 lg:py-32 container">
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
    </section> -->

    <section class="py-16 lg:py-32">
        <div class="container">
            <ContentBlock 
                title="24/7 Live Chat Support"
                class="text-center w-full lg:w-1/2 lg:mx-auto"
                paragraph="MontyPay is by your side around the clock, you can reach out to us via"
            />
            <div class="mt-16 grid md:grid-cols-4 max-w-[1200px] m-auto">
                <div class="flex flex-col gap-5 justify-center">
                    <div class="p-5 rounded-lg border border-[#d9d9d9]" v-for="(item,index) in liveChat1" :key="index">
                        <div class="mb-2">
                            <NuxtPicture format="svg" :src="item.icon" class="w-full" />
                        </div>
                        <div>
                            <h5>{{item.title }}</h5>
                        </div>
                    </div>
                </div>
                <NuxtPicture class="w-full col-span-2" :imgAttrs="{class:'w-full'}"  format="png" src="images/24-7-live-chat-support.png" />
                <div class="flex flex-col gap-5 justify-center">
                    <div class="p-5 rounded-lg border border-[#d9d9d9]" v-for="(item,index) in liveChat2" :key="index">
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

       <div class="container">
            <section class="mb-16 lg:mb-32 py-16 lg:py-32 bg-black">
                    <div class="absolute w-full h-full top-0">
                        <img src="/acceptancebg.png" class="object-cover w-full h-full"/>
                    </div>
                    <div class="w-full lg:w-2/3 mx-auto">
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
        </div>
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
            icon: '/images/receipt.svg',
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

    const liveChat1 = [
        {
            icon: '/phone-01.svg',
            title: 'Merchant mobile application'
        },
        {
            icon: '/clapperboard.svg',
            title: 'Website'
        },
    ];

    const liveChat2 = [
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