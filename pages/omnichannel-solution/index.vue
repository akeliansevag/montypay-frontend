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
                <div class="justify-self-end">
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
</script>

<style lang="">
    
</style>