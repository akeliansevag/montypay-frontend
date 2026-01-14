<template>
    <section class="relative max-lg:py-10 lg:py-20">
        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">{{t('Pages.Payment Orchestration Network.Banner.Title')}}</h1>
                    <p class="text-xl">{{t('Pages.Payment Orchestration Network.Banner.Description')}}</p>
                    <div>
                        <NuxtLinkLocale to="/contact-us" class="inline-block mp-button-quaternary">{{t('General.Buttons.Request a Demo')}}</NuxtLinkLocale>
                    </div>
                </div>
                <div class="lg:w-[60%]">
                    <img src="/payment-orchestration-network-banner.webp" alt="Omnichannel Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <section class="relative lg:py-16 max-lg:py-16 bg-[#0E153A]">
        <img src="/blue-shape-bg.webp" class="absolute z-0 top-0 start-0 w-full h-full object-cover" alt="blue-bg"/>
        <div class="container">
            <div class="max-w-[800px]">
                <h2 class="text-white text-3xl font-bold">{{t('Pages.Payment Orchestration Network.Section 2.Title')}}</h2>
                <p class="text-xl text-white mt-7">{{t('Pages.Payment Orchestration Network.Section 2.Description')}}</p>   
            </div>

            <div class="flex max-lg:flex-col gap-7 mt-12">
                <div class="bg-white p-4 lg:p-8 rounded-xl flex flex-col justify-between w-full">
                    <div>
                        <h4 class="text-2xl font-bold mt-4">{{t('Pages.Payment Orchestration Network.Section 2.Items[0].Title')}}</h4>
                        <p class="mt-4">{{t('Pages.Payment Orchestration Network.Section 2.Items[0].Description')}}</p>
                    </div>
                    
                    <div class="bg-[#E6EEF5] rounded-2xl max-lg:h-[200px] lg:h-[300px] p-5 flex items-center justify-center mt-7">
                        <img class="w-full h-full object-contain" src="/smarter-payments.webp"  />
                    </div>
                    
                </div>

                <div class="bg-white p-4 lg:p-8 rounded-xl flex flex-col justify-between w-full">
                    <div>
                        <h4 class="text-2xl font-bold mt-4">{{t('Pages.Payment Orchestration Network.Section 2.Items[1].Title')}}</h4>
                        <p class="mt-4">{{t('Pages.Payment Orchestration Network.Section 2.Items[1].Description')}}</p>
                    </div>
                    
                    <div class="bg-[#E6EEF5] rounded-2xl max-lg:h-[200px] lg:h-[300px] p-5 flex items-center justify-center mt-7">
                        <img class="w-full h-full object-contain" src="/think-global.webp"  />
                    </div>
                    
                </div>

                <div class="bg-white p-4 lg:p-8 rounded-xl flex flex-col justify-between w-full">
                    <div>
                        <h4 class="text-2xl font-bold mt-4">{{t('Pages.Payment Orchestration Network.Section 2.Items[2].Title')}}</h4>
                        <p class="mt-4">{{t('Pages.Payment Orchestration Network.Section 2.Items[2].Description')}}</p>
                    </div>
                    
                    <div class="bg-[#E6EEF5] rounded-2xl max-lg:h-[200px] lg:h-[300px] p-5 flex items-center justify-center mt-7">
                        <img class="w-full h-full object-contain" src="/payments-in-every-language.webp"  />
                    </div>
                    
                </div>
            </div>

            <div class="mt-7">
                <div class="bg-white p-4 lg:p-8 rounded-xl flex max-lg:flex-col items-center justify-between w-full gap-10">
                    <div class="w-full">
                        <img class="w-full h-full object-contain" src="/wherever-you-do-business.webp"  />
                    </div>
                    <div class="w-full">
                        <p v-html="t('Pages.Payment Orchestration Network.Section 2.Items[3].Description')" class="text-xl lg:p-12" />
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- <PinnedSection /> -->
    <section class="relative max-lg:py-16 lg:py-24 bg-white">
        <div class="container">
            <h2 class="lg:sticky lg:top-32 text-3xl text-center">{{t('Pages.Payment Orchestration Network.Section 3.Title')}}</h2>
            <div class="max-lg:flex max-lg:flex-col max-lg:gap-7 stack-cards js-stack-cards mt-20">
                <div v-for="(item, index) in items" :key="index" class="lg:js-stack-cards__item lg:sticky lg:top-[var(--space-sm)] lg:origin-[center_top] bg-[#E9EEF5] flex max-lg:flex-col gap-7 items-center justify-between p-5 rounded-lg">
                    <div class="bg-[#ffffff]/40 p-3 rounded-lg w-full h-full">
                        <img class="w-full h-full object-contain" :src="item.image" :alt="item.title" />
                    </div>
                    <div class="w-full lg:px-12">
                        <h4 class="text-2xl font-bold">{{ item.title }}</h4>
                        <p class="text-xl mt-2">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <BlueSection :title="t('Pages.Payment Orchestration Network.Section 4.Title')" :subtitle="t('Pages.Payment Orchestration Network.Section 4.Description')" :buttonText="t('General.Buttons.Request a Demo')" buttonLink="/contact-us" image="/optimize-your-entire-payment.webp"/>
    <PaymentSolutions />
    <Accordion :data="faq" :title="t('Pages.Payment Orchestration Network.Section 5.Title')" /> 
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
    useSeoMeta({
        title: 'Payment Orchestration Network for Global Businesses',
        ogTitle: 'Payment Orchestration Network for Global Businesses',
        description: 'Streamline your payments with MontyPay’s orchestration network—unify gateways, reduce failures, optimize routing, and scale globally with one platform.',
        ogDescription: 'Streamline your payments with MontyPay’s orchestration network—unify gateways, reduce failures, optimize routing, and scale globally with one platform.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const items = [
        {
            image: '/everything-in-one-place.webp',
            title: t('Pages.Payment Orchestration Network.Section 3.Items[0].Title'),
            description: t('Pages.Payment Orchestration Network.Section 3.Items[0].Description')
        },
        {
            image: '/smarter-transactions.webp',
            title: t('Pages.Payment Orchestration Network.Section 3.Items[1].Title'),
            description: t('Pages.Payment Orchestration Network.Section 3.Items[1].Description')
        },
        {
            image: '/unified-solution.webp',
            title: t('Pages.Payment Orchestration Network.Section 3.Items[2].Title'),
            description: t('Pages.Payment Orchestration Network.Section 3.Items[2].Description')
        },
        {
            image: '/security-you-can-count-on.webp',
            title: t('Pages.Payment Orchestration Network.Section 3.Items[3].Title'),
            description: t('Pages.Payment Orchestration Network.Section 3.Items[3].Description')
        },
        {
            image: '/real-time-insights.webp',
            title: t('Pages.Payment Orchestration Network.Section 3.Items[4].Title'),
            description: t('Pages.Payment Orchestration Network.Section 3.Items[4].Description')
        },
        {
            image: '/central-point-of-contact.webp',
            title: t('Pages.Payment Orchestration Network.Section 3.Items[5].Title'),
            description: t('Pages.Payment Orchestration Network.Section 3.Items[5].Description')
        }
    ]

    const faq = [
        {
            question: t('Pages.Payment Orchestration Network.Section 5.Items[0].Question'),
            answer: t('Pages.Payment Orchestration Network.Section 5.Items[0].Answer')
        },
        {
            question: t('Pages.Payment Orchestration Network.Section 5.Items[1].Question'),
            answer: t('Pages.Payment Orchestration Network.Section 5.Items[1].Answer')
        },
        {
            question: t('Pages.Payment Orchestration Network.Section 5.Items[2].Question'),
            answer: t('Pages.Payment Orchestration Network.Section 5.Items[2].Answer')
        },
        {
            question: t('Pages.Payment Orchestration Network.Section 5.Items[3].Question'),
            answer: t('Pages.Payment Orchestration Network.Section 5.Items[3].Answer')
        },
        {
            question: t('Pages.Payment Orchestration Network.Section 5.Items[4].Question'),
            answer: t('Pages.Payment Orchestration Network.Section 5.Items[4].Answer')
        },
    ]

    const sliderFour = [
        {
            title: 'Unified Payments Across All Channels ',
            description: 'Forget juggling multiple payment systems. MontyPay centralizes online, in-store, and mobile payments, ensuring a smooth, frictionless checkout experience for your customers while making it easier to manage transactions. ',
            image: '/unified-payments.webp',
        },
        {
            title: 'Consistent Experience. Happier Customers',
            description: 'A smooth checkout experience across all channels builds trust, keeps customers coming back, and makes your business shine.',
            image: '/consistent-experience.webp',
        },
        {
            title: 'Global Payments at Hand’s Reach',
            description: 'Accept payments from anywhere with 100+ methods including cards, digital wallets, QR codes, and pay-by-link, with support for multiple currencies. Your business can reach the world.',
            image: '/global-payments.webp',
        },
        {
            title: 'Multi-User Access for Smarter Teamwork',
            description: 'Empower your staff with customizable administrative roles and multiple user access. From finance teams to customer service, ensure the right people have the right access to manage transactions efficiently.',
            image: '/multi-user-access.webp',
        }
    ];

    onMounted(async () => {
        if (process.client) {
            const module = await import('@/assets/js/stack-cards.js')
        }
    })
</script>

<style lang="css" scoped>
   .white-box{
     @apply bg-white p-6 rounded-lg overflow-hidden flex flex-col;
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
        @apply mx-auto mt-7 w-full max-lg:max-w-[400px];
   }

   .blue-box h4{
    @apply text-white;
   }




</style>