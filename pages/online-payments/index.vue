<template>
   <section class="relative max-lg:py-10 lg:py-20">
        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 end-0 top-0" />

        <div class="ms-container-align">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">{{ t('Pages.Online Payments.Banner.Title') }}</h1>
                    <p class="text-xl">{{ t('Pages.Online Payments.Banner.Description') }}</p>
                    <div class="">
                        <NuxtLink to="/contact-us" class="inline-block mp-button-quaternary">{{ t('General.Buttons.Request a Demo') }}</NuxtLink>
                    </div>
                </div>
                <div class="lg:w-[50%]">
                    <img src="/accept-payments-anywhere-banner.webp" alt="QCheck Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <PaddingWhiteSlider :data="sliderFour" :title="t('Pages.Online Payments.Section 2.Title')" />

    <section class="relative max-lg:py-10 lg:py-24 bg-[#E9ECF4D9]">
        <div class="container">
            <h2 class="text-3xl font-bold">{{t('Pages.Online Payments.Section 3.Title')}}</h2>
        
            <div class="mt-12">
                <!-- Top horizontal layout -->
                <Card
                    layout="horizontal"
                    image="/online-and-mobile-checkouts.webp"
                    :title="t('Pages.Online Payments.Section 3.Cards 1[0].Title')"
                    :description="t('Pages.Online Payments.Section 3.Cards 1[0].Description')"
                />

                <!-- Bottom grid layout with vertical cards -->
                <div class="grid lg:grid-cols-2 gap-6 mt-6">
                    <Card
                        image="/images/customizable-checkout-options.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[1].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[1].Description')"
                    />
                    <Card
                        image="/images/pay-by-link.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[2].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[2].Description')"
                    />
                    <Card
                        image="/images/qr-pay.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[3].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[3].Description')"
                    />
                    <Card
                        image="/images/customer-invoice-links.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[4].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[4].Description')"
                    />
                    <Card
                        image="/images/recurring-billing.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[5].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[5].Description')"
                    />
                    <Card
                        image="/images/installements.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[6].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[6].Description')"
                    />
                    <Card
                        image="/images/smart-routing-and-cascading.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[7].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[7].Description')"
                    />
                    <Card
                        image="/images/crypto-payments.webp"
                        :title="t('Pages.Online Payments.Section 3.Cards 1[8].Title')"
                        :description="t('Pages.Online Payments.Section 3.Cards 1[8].Description')"
                    />
                </div>
            </div>
        </div>
    </section>

    <section class="relative max-lg:py-10 lg:py-24">
        <div class="container">
            <h2 class="text-3xl font-bold">{{ t('Pages.Online Payments.Section 4.Title') }}</h2>
            <p class="lg:w-2/3 mt-6 text-xl">{{ t('Pages.Online Payments.Section 4.Description') }}</p>
            <h3 class="text-xl font-bold mt-6">{{ t('Pages.Online Payments.Section 4.Sub Title') }}</h3>

            <div class="flex flex-col lg:flex-row gap-6 mt-12">
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <img class="flex-shrink-0" src="/images/mobile-ready-checkout.svg" alt="Mobile-Ready Checkout" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">{{ t('Pages.Online Payments.Section 4.Cards 1[0].Title') }}</h3>
                    <p v-html="t('Pages.Online Payments.Section 4.Cards 1[0].Description')" class="text-xl" />
                </div>
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <img class="flex-shrink-0" src="/images/host-to-host-integration.svg" alt="Host to Host Integration" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">{{ t('Pages.Online Payments.Section 4.Cards 1[1].Title') }}</h3>
                    <p v-html="t('Pages.Online Payments.Section 4.Cards 1[1].Description')" class="text-xl" />
                </div>
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <img class="flex-shrink-0" src="/images/social-commerce.svg" alt="Social Commerce" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">{{ t('Pages.Online Payments.Section 4.Cards 1[2].Title') }}</h3>
                    <p v-html="t('Pages.Online Payments.Section 4.Cards 1[2].Description')" class="text-xl" />
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl mt-6">
                <div class="flex flex-col gap-6 lg:w-3/5">
                    <img class="flex-shrink-0" src="/images/cms-plugins.svg" alt="CMS Plugins" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">{{ t('Pages.Online Payments.Section 4.Cards 1[3].Title') }}</h3>
                    <p v-html="t('Pages.Online Payments.Section 4.Cards 1[3].Description')" class="text-xl lg:w-1/2" />
                </div>
                
                <div class="lg:w-2/5 grid grid-cols-3 place-items-center gap-4 lg:gap-8">
                    <img src="/images/magento2.svg" alt="Magento 2" width="139" height="139" />
                    <img src="/images/prestashop.svg" alt="Prestashop" width="139" height="139" />
                    <img src="/images/highlevel.svg" alt="Highlevel" width="139" height="139" />
                    <img src="/images/woocommerce.svg" alt="Woo Commerce" width="139" height="139" />
                    <img src="/images/opencart.svg" alt="Opencart" width="139" height="139" />
                    <img src="/images/easy-digital-downloads.svg" alt="Easy Digital Downloads" width="139" height="139" />
                    <img src="/images/nopcommerce.svg" alt="NopCommerce" width="139" height="139" />
                    <img src="/images/shopify.svg" alt="Shopify" width="139" height="139" />
                    <img src="/images/ecwid.svg" alt="ECWID" width="139" height="139" />
                </div>

            </div>

            <div class="flex flex-col lg:flex-row gap-6 mt-6">
                <div class="lg:w-1/2 flex flex-col justify-between gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <div class="flex flex-col gap-6">
                        <img class="flex-shrink-0" src="/images/mobile-sdk.svg" alt="Mobile-Ready Checkout" width="121" height="121" />
                        <h3 class="text-2xl font-semibold">{{ t('Pages.Online Payments.Section 4.Cards 1[4].Title') }}</h3>
                        <p v-html="t('Pages.Online Payments.Section 4.Cards 1[4].Description')" class="text-xl" />
                    </div>
                    <div class="grid grid-cols-3 place-items-center gap-2 lg:gap-4 mt-6">
                        <img src="/images/flutter.svg" alt="flutter" width="210" height="90" />
                        <img src="/images/android.svg" alt="Android" width="210" height="90" />
                        <img src="/images/ios.svg" alt="IOS" width="210" height="90" />
                    </div>
                </div>
                <div class="lg:w-1/2 flex flex-col justify-between gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <div class="flex flex-col gap-6">
                        <img class="flex-shrink-0" src="/images/platform-integration.svg" alt="Platform Integration" width="121" height="121" />
                        <h3 class="text-2xl font-semibold">{{ t('Pages.Online Payments.Section 4.Cards 1[5].Title') }}</h3>
                        <p v-html="t('Pages.Online Payments.Section 4.Cards 1[5].Description')" class="text-xl" />
                    </div>
                    <div class="grid grid-cols-4 place-items-center gap-2 mt-6">
                        <img src="/images/igloorooms.svg" alt="IglooRooms" width="210" height="90" />
                        <img src="/images/kangaroo.svg" alt="Kangaroo" width="210" height="90" />
                        <img src="/images/quickseat.svg" alt="QuickSeat" width="210" height="90" />
                        <img src="/images/suppy.svg" alt="Suppy" width="210" height="90" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <MerchantMobileApp />

    <section class="max-lg:py-10 lg:py-24 bg-white">
        <div class="container">
            <div class="text-center">
                <h2 class="text-3xl font-bold">{{t('Pages.Online Payments.Section 6.Title 1')}}</h2>
                <h3 class="text-xl font-bold mt-6">{{t('Pages.Online Payments.Section 6.Sub Title')}}</h3>
                <p class="lg:w-2/3 mt-6 text-xl mx-auto">{{t('Pages.Online Payments.Section 6.Description 1')}}</p>
            </div>
            <div class="flex max-lg:flex-col gap-7 lg:mt-24 max-lg:mt-10">
                <div class="w-full bg-[#E9ECF4D9] lg:min-h-[360px] rounded-md p-8 items-center justify-center flex">
                    <div class="flex flex-col gap-10">
                        <img class="mx-auto max-w-[400px] drop-shadow-xl w-full" src="/omnichannel-solution.webp" alt="Omnichannel Solution">
                        <h3 class="text-2xl text-center font-bold">{{t('Pages.Online Payments.Section 6.Cards 1[0].Title')}}</h3>
                    </div>
                </div>
                <div class="w-full bg-[#E9ECF4D9] lg:min-h-[360px] rounded-md p-8 items-center justify-center flex">
                    <div class="flex flex-col gap-10">
                        <img class="mx-auto max-w-[400px] w-full" src="/unified-solution2.webp" alt="Unified Solution">
                        <h3 class="text-2xl text-center font-bold">{{t('Pages.Online Payments.Section 6.Cards 1[1].Title')}}</h3>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="max-lg:pb-10 lg:pb-24 bg-white relative overflow-hidden">
        <img src="/shape-bg.svg" alt="Shapte" class="absolute top-0 lg:-end-[200px] max-lg:hidden" />
        <div class="container">
            <div class="flex max-lg:flex-col gap-6">
                <div class="w-full">
                    <h2 class="text-3xl font-bold">{{t('Pages.Online Payments.Section 6.Title 2')}}</h2>
                    <p class="mt-6 text-xl">{{t('Pages.Online Payments.Section 6.Description 2')}}</p>

                    <div class="flex flex-col gap-7 mt-7">
                        <div class="flex max-lg:flex-col gap-5 p-4 lg:p-8 bg-white rounded-xl border border-[#D9D9D980] drop-shadow-sm" v-for="(solution,inx) in solutions" :key="inx">
                            <div>
                                <img :src="solution.icon" :alt="solution.title"/>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold leading-none mb-2">{{ solution.title }}</h4>
                                <p>{{ solution.description }}</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-xl font-normal mt-10">{{t('Pages.Online Payments.Section 6.Description 3')}}</p>
                </div>
                <div class="w-full">
                    <img class="w-full" src="/unified-solution-for.webp" alt="Unified Solution">
                </div>
            </div>
        </div>
    </section>

    <section class="lg:py-24 max-lg:py-10 bg-[#0F0C22] relative text-white">
        <img src="/blue-bg-2.webp" alt="BG" class="top-0 start-0 w-full h-full absolute object-cover">
        <div class="container">
            <h2 class="text-3xl font-bold">{{t('Pages.Online Payments.Section 7.Title')}}</h2>
            <div class="mt-10 flex max-lg:flex-col gap-7 max-lg:gap-10">
                <div v-for="(perk,ind) in perks" :key="ind">
                    <img :src="perk.icon" :alt="perk.title"/>
                    <h3 class="text-xl font-bold mt-4">{{ perk.title }}</h3>
                    <p class="mt-4">{{ perk.description }}</p>
                </div>
            </div>
        </div>
    </section>

    <Accordion :data="faq" :title="t('Pages.Online Payments.Section 8.Title')" /> 
    
    <BlueSection :title="t('Pages.Online Payments.Section 9.Title')"" :subtitle="t('Pages.Online Payments.Section 9.Description')" :buttonText="t('General.Buttons.Request a Demo')" buttonLink="/contact-us" image="/lets-grow-your-business-together.webp"/>

    <PaymentSolutions />

</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
    useSeoMeta({
        title: 'Online Payment Solutions | Global Payment Processing',
        ogTitle: 'Online Payment Solutions | Global Payment Processing',
        description: 'Accept online payments with MontyPay’s secure gateway. Support cards, wallets, and local payment methods across global markets.',
        ogDescription: 'Accept online payments with MontyPay’s secure gateway. Support cards, wallets, and local payment methods across global markets.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const perks = [
        {
            icon: '/risk-management.svg',
            title: t('Pages.Online Payments.Section 7.Cards[0].Title'),
            description: t('Pages.Online Payments.Section 7.Cards[0].Description')
        },
        {
            icon: '/dedicated-support.svg',
            title: t('Pages.Online Payments.Section 7.Cards[1].Title'),
            description: t('Pages.Online Payments.Section 7.Cards[1].Description')
        },
        {
            icon: '/loyalty-and-lending.svg',
            title: t('Pages.Online Payments.Section 7.Cards[2].Title'),
            description: t('Pages.Online Payments.Section 7.Cards[2].Description')
        },
    ]

    const solutions = [
        {
            icon: '/seamless-sales.svg',
            title: t('Pages.Online Payments.Section 6.Cards 2[0].Title'),
            description: t('Pages.Online Payments.Section 6.Cards 2[0].Description')
        },
        {
            icon: '/unified-dashboard.svg',
            title: t('Pages.Online Payments.Section 6.Cards 2[1].Title'),
            description: t('Pages.Online Payments.Section 6.Cards 2[1].Description')
        },
        {
            icon: '/effortless-cross-channel.svg',
            title: t('Pages.Online Payments.Section 6.Cards 2[2].Title'),
            description: t('Pages.Online Payments.Section 6.Cards 2[2].Description')
        },
    ]

    const sliderFour = [
        {
            title: t('Pages.Online Payments.Section 2.Cards[0].Title'),
            description: t('Pages.Online Payments.Section 2.Cards[0].Description'),
            image: '/fast-smooth-transaction.webp',
        },
        {
            title: t('Pages.Online Payments.Section 2.Cards[1].Title'),
            description: t('Pages.Online Payments.Section 2.Cards[1].Description'),
            image: '/advanced-security-you-can-trust.webp',
        },
        {
            title: t('Pages.Online Payments.Section 2.Cards[2].Title'),
            description: t('Pages.Online Payments.Section 2.Cards[2].Description'),
            image: '/100-payment-methods-mutliple-currencies.webp',
        },
        {
            title: t('Pages.Online Payments.Section 2.Cards[3].Title'),
            description: t('Pages.Online Payments.Section 2.Cards[3].Description'),
            image: '/build-trust-boost-satisfaction.webp',
        },
        {
            title: t('Pages.Online Payments.Section 2.Cards[4].Title'),
            description: t('Pages.Online Payments.Section 2.Cards[4].Description'),
            image: '/powerful-insights-smarter-decisions.webp',
        }
    ];

    const faq = [
        {
            question: t('Pages.Online Payments.Section 8.Cards[0].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[0].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[1].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[1].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[2].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[2].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[3].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[3].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[4].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[4].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[5].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[5].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[6].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[6].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[7].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[7].Answer')
        },
        {
            question: t('Pages.Online Payments.Section 8.Cards[8].Question'),
            answer: t('Pages.Online Payments.Section 8.Cards[8].Answer')
        }
    ]

    const cards = [
        {
            title: 'Mobile-Ready Checkout',
            description:
            'Say goodbye to abandoned carts! Our mobile-ready checkout guarantees a seamless payment process, ensuring customers breeze through their purchases and boosting your conversion rates!',
            icon: '/icons/mobile-checkout.png',
            images: [],
            layout: 'vertical'
        },
        {
            title: 'Host-2-Host Integration',
            description:
            'Make it your own! With MontyPay’s Host-2-Host integration, merchants can now accept payment information on their personalized payment pages.',
            icon: '/icons/host-to-host.png',
            images: [],
            layout: 'vertical'
        },
        {
            title: 'Social Commerce',
            description:
            'MontyPay is not only a secure financial haven but also a thriving marketplace for freelancers and social media enthusiasts.',
            icon: '/icons/social-commerce.png',
            images: [],
            layout: 'vertical'
        },
        {
            title: 'CMS Plugins',
            description:
            'No fuss, just solutions! Our ready-to-go plugins for popular CMS streamline integration for merchants.',
            icon: '/icons/cms.png',
            images: [
                '/logos/magento1.png',
                '/logos/magento2.png',
                '/logos/prestashop.png'
            ],
            layout: 'horizontal'
        },
        {
            title: 'Mobile SDK',
            description:
            'Our iOS and Android SDKs give merchants the power to accept payments within their mobile applications.',
            icon: '/icons/sdk.png',
            images: [
                '/logos/flutter.png', 
                '/logos/android.png', 
                '/logos/ios.png'
            ],
            layout: 'vertical'
        },
        {
            title: 'Platform Integration',
            description:
            'Our integrations with cutting-edge platforms mark the beginning of a robust ecosystem.',
            icon: '/icons/integration.png',
            images: [
                '/logos/igloo.png', 
                '/logos/kangaroo.png'
            ],
            layout: 'vertical'
        }
    ]

</script>