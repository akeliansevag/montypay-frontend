<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 end-0 top-0" />

        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">{{ t('Pages.Omnichannel Payments.Banner.Title') }}</h1>
                    <p class="text-xl">{{ t('Pages.Omnichannel Payments.Banner.Description') }}</p>
                    <div class="">
                        <NuxtLinkLocale to="/contact-us" class="inline-block mp-button-quaternary">{{ t('General.Buttons.Request a Demo') }}</NuxtLinkLocale>
                    </div>
                </div>
                <div class="lg:w-[50%]">
                    <img class="w-full" src="/omnichannel-banner.webp" alt="Omnichannel Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <PaddingWhiteSlider :data="sliderFour" :title="t('Pages.Omnichannel Payments.Section 2.Title')" />
    
    <section class="lg:py-16 max-lg:py-10 bg-[#E9ECF4D9]">
        <div class="container">
            <h2 class="text-3xl font-bold">{{t('Pages.Omnichannel Payments.Section 3.Title')}}</h2>

            <div class="flex flex-col lg:gap-16 max-lg:gap-10">

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-2xl font-bold mt-10">{{ t('Pages.Omnichannel Payments.Section 3.Sub Title 1') }}</h3>
                        <p class="text-xl mt-4">{{ t('Pages.Omnichannel Payments.Section 3.Description 1') }}</p>               
                    </div>
                    <div class="flex max-lg:flex-col gap-7 mt-12">
                        <div class="lg:w-1/3 blue-box">
                            <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 1[0].Title') }}</h4>
                            <img src="/live-sales-data.webp" alt="">
                        </div>

                        <div class="lg:w-2/3 white-box">
                            <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 1[1].Title') }}</h4>
                            <img class="w-4/5" src="/performance-analytics.webp" alt="">
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-7 mt-7">
                        <div class="lg:w-2/3 white-box">
                            <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 1[2].Title') }}</h4>
                            <img class="w-2/3" src="/web-and-mobile-dashboards.webp"alt="">
                        </div>

                        <div class="lg:w-1/3 white-box">
                            <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 1[3].Title') }}</h4>
                            <img class="w-2/3 mt-16" src="/customer-insights.webp" alt="">
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-2xl font-bold mt-10">{{ t('Pages.Omnichannel Payments.Section 3.Sub Title 2') }}</h3>
                        <p class="text-xl mt-4">{{ t('Pages.Omnichannel Payments.Section 3.Description 2') }}</p>               
                    </div>
                    <div class="mt-12 flex gap-7 max-lg:flex-col">
                        <div class="flex flex-col gap-7">
                            <div class="white-box lg:h-1/2">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 2[0].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img src="/monitor-transaction-in-real-time.webp" />
                                </div>
                                
                            </div>
                            <div class="white-box lg:h-1/2">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 2[2].Title') }}</h4>
                                <div class="image-wrapper pb-14">
                                    <img src="/generate-and-send-invoices.webp" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center white-box">
                            <img src="/montypay-screenshot.webp" alt="">
                        </div>

                        <div class="flex flex-col gap-7">
                            <div class="white-box lg:h-full">
                                <div class="flex max-lg:flex-col gap-8">
                                    <h4 class="text-2xl lg:w-1/2">{{ t('Pages.Omnichannel Payments.Section 3.Cards 2[1].Title') }}</h4>
                                    <img class="lg:w-1/2 mt-0" src="/accept-payments-via-pay.webp" />     
                                </div>
                            </div>
                            <div class="white-box lg:h-full">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 2[3].Title') }}</h4>
                                <div>
                                    <img class="max-w-[300px] mx-auto" src="/stay-connected-with-customers.webp" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-3xl font-bold mt-10">{{ t('Pages.Omnichannel Payments.Section 3.Sub Title 3') }}</h3>
                        <p class="text-xl mt-4">{{ t('Pages.Omnichannel Payments.Section 3.Description 3') }}</p>               
                    </div>
                    <div class="mt-12">
                        <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 3[0].Title') }} </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px] mx-auto" src="/credit-and-debit-cards.webp" alt="" />
                                </div>
                            </div>
                            <div class="white-box w-full">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 3[1].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px] mx-auto" src="/digital-wallets.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="flex max-lg:flex-col gap-7 mt-7">
                            <div class="white-box w-full lg:w-2/3">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 3[2].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/qr-code-payments.webp" alt="" />
                                </div>
                                
                            </div>
                            <div class="white-box w-full lg:w-1/3">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 3[3].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[350px] mx-auto" src="/multi-currency-support.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-3xl font-bold mt-10">{{ t('Pages.Omnichannel Payments.Section 3.Sub Title 4') }}</h3>
                        <p class="text-xl mt-4">{{ t('Pages.Omnichannel Payments.Section 3.Description 4') }}</p>               
                    </div>
                    <div class="mt-12">
                        <div class="flex max-lg:flex-col gap-7 mt-7">
                            <div class="white-box w-full flex items-center justify-center lg:w-2/3">
                                <img class="max-w-[600px] mx-auto" src="/two-phones.webp" alt="" />
                            </div>
                            <div class="white-box w-full lg:w-1/3 flex items-center justify-center">
                                <img class="max-w-[350px] mx-auto" src="/soft-pos-card.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-3xl font-bold mt-10">{{ t('Pages.Omnichannel Payments.Section 3.Sub Title 5') }}</h3>
                        <p class="text-xl mt-4">{{ t('Pages.Omnichannel Payments.Section 3.Description 5') }}</p>               
                    </div>
                    <div class="mt-12">
                       <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 5[0].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px]" src="/shopping-card.webp" alt="">    
                                </div>
                            </div>
                            <div class="white-box w-full">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 5[1].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/intelligent-routing.webp" alt="">
                                </div>          
                            </div>
                       </div>
                       <div class="flex max-lg:flex-col gap-7 mt-7">
                            <div class="white-box w-full">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 5[2].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/3d-secure.webp" alt="">  
                                </div>
                                
                            </div>
                            <div class="white-box w-full">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 5[3].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/advanced-fraud.webp" alt="">
                                </div>                     
                            </div>
                       </div>
                    </div>
                </div>
                
                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-3xl font-bold mt-10">{{ t('Pages.Omnichannel Payments.Section 3.Sub Title 6') }}</h3>
                        <p class="text-xl mt-4">{{ t('Pages.Omnichannel Payments.Section 3.Description 6') }}</p>               
                    </div>
                    <div class="mt-12">
                       <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full pb-14">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 6[0].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/connect-to-you-existing.webp" alt="">    
                                </div>
                            </div>
                            <div class="white-box w-full pb-14">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 6[1].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/expand-globally.webp" alt="">
                                </div>          
                            </div>
                            <div class="white-box w-full pb-14">
                                <h4 class="text-2xl">{{ t('Pages.Omnichannel Payments.Section 3.Cards 6[2].Title') }}</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/automate-processes.webp" alt="">
                                </div>          
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="relative lg:py-24 max-lg:py-10">
        <div class="absolute -top-40 end-0 opacity-50 -z-10">
            <img src="/shape.svg" class="w-full" alt="">
        </div>
        <div class="container">
            <img src="/we-ensure-your-business.webp" class="w-full drop-shadow-2xl " alt="">
        </div>
    </section>

    <Accordion :data="faq" :title="t('Pages.Omnichannel Payments.Section 4.Title')" /> 
    
    <BlueSection :title="t('Pages.Omnichannel Payments.Section 5.Title')" :subtitle="t('Pages.Omnichannel Payments.Section 5.Description')" :buttonText="t('General.Buttons.Request a Demo')" buttonLink="/contact-us" image="/many-phones.webp"/>
   
   <PaymentSolutions />
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'Omnichannel Payments | Unified Commerce Experience',
    ogTitle: 'Omnichannel Payments | Unified Commerce Experience',
    description: 'Connect online, in-store, and mobile payments into one seamless journey. MontyPay\'s Omnichannel solution enhances customer experience.',
    ogDescription: 'Connect online, in-store, and mobile payments into one seamless journey. MontyPay\'s Omnichannel solution enhances customer experience.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const faq = [
    {
        question: t('Pages.Omnichannel Payments.Section 4.Cards[0].Question'),
        answer: t('Pages.Omnichannel Payments.Section 4.Cards[0].Answer')
    },
    {
        question: t('Pages.Omnichannel Payments.Section 4.Cards[1].Question'),
        answer: t('Pages.Omnichannel Payments.Section 4.Cards[1].Answer')
    },
    {
        question: t('Pages.Omnichannel Payments.Section 4.Cards[2].Question'),
        answer: t('Pages.Omnichannel Payments.Section 4.Cards[2].Answer')
    },
    {
        question: t('Pages.Omnichannel Payments.Section 4.Cards[3].Question'),
        answer: t('Pages.Omnichannel Payments.Section 4.Cards[3].Answer')
    },
    {
        question: t('Pages.Omnichannel Payments.Section 4.Cards[4].Question'),
        answer: t('Pages.Omnichannel Payments.Section 4.Cards[4].Answer')
    },
]

const sliderFour = [
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[0].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[0].Description'),
        image: '/unified-payments.webp',
    },
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[1].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[1].Description'),
        image: '/consistent-experience.webp',
    },
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[2].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[2].Description'),
        image: '/global-payments.webp',
    },
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[3].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[3].Description'),
        image: '/multi-user-access.webp',
    },
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[4].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[4].Description'),
        image: '/always-stay-in-the-loop.webp',
    },
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[5].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[5].Description'),
        image: '/build-real-loyalty.webp',
    },
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[6].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[6].Description'),
        image: '/access-financial-support.webp',
    },
    {
        title: t('Pages.Omnichannel Payments.Section 2.Cards[7].Title'),
        description: t('Pages.Omnichannel Payments.Section 2.Cards[7].Description'),
        image: '/always-here-when-you-need-us.webp',
    }
];
</script>

<style lang="css" scoped>
   .white-box{
     @apply bg-white p-8 rounded-lg overflow-hidden flex flex-col;
   }
   .white-box .image-wrapper{
    @apply flex flex-col items-center justify-center h-full;
   }
   .blue-box{
        @apply bg-[linear-gradient(178.97deg,_#0B2A6E_28.47%,_#00DFDF_136.64%)]  p-5 rounded-lg;
   }
   .white-box, .blue-box{
     @apply flex flex-col gap-5
   }
   .white-box h4, .blue-box h4{
        @apply font-bold text-xl;
   }

   .white-box img, .blue-box img{
        @apply mx-auto w-full max-lg:max-w-[400px];
   }

   .blue-box h4{
    @apply text-white;
   }




</style>