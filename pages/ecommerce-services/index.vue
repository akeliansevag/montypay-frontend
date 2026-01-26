<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 end-0 top-0 rtl:rotate-180" />

        <div class="ms-container-align with-padding">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl lg:text-5xl leading-[1.3] lg:!leading-[1.5]" v-html="t('Pages.eCommerce.Banner.Title')" />
                    <p class="text-xl">{{ t('Pages.eCommerce.Banner.Description') }}</p>
                    <div>
                        <NuxtLinkLocale to="https://prechecklist.montypay.com/website/" target="_blank" class="inline-block mp-button-quaternary">{{ t('Pages.eCommerce.Banner.Button Text') }}</NuxtLinkLocale>  
                    </div>
                </div>
                <div class="lg:w-[50%]">
                    <img src="/ecommerce-banner-2.webp" alt="ecommerce Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="max-w-[1130px]">
                <h2 class="text-3xl mb-2">{{ t('Pages.eCommerce.Section 2.Title') }}</h2>
                <p>{{ t('Pages.eCommerce.Section 2.Description') }}</p> 
            </div>
           
        </div>
    </section>
    
    <section class="py-16">
        <div class="container">
            <div class="flex flex-col gap-16">
                <div v-for="(item,index) in items" :class="(index%2)>0 ? 'flex-row-reverse' : 'flex-row'" class="flex max-lg:flex-col max-lg:gap-10 lg:gap-32 items-center">
                    <div class="w-full">
                        <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                        <ul class="flex flex-col gap-5 mt-10">
                            <li v-for="list in item.items" class="flex items-center gap-2">
                                <span>
                                   <img :src="list.svg" />
                                </span>
                                <span>
                                    {{ list.title }}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full">
                        <div class="px-10 py-20 w-full h-full bg-[linear-gradient(89.6deg,_rgba(0,51,131,0.1)_5.21%,_rgba(0,223,223,0.1)_134.35%)]">
                            <img :src="item.image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-16">
        <div class="container">
            <div class="relative overflow-hidden flex items-center justify-center lg:py-24 max-lg:py-16 w-full rounded-lg px-10">
                <img src="/ecommerce-section-bg.webp" class="w-full h-full absolute top-0 left-0 object-cover"/>
                <div class="bg-[#003383]/75 backdrop-blur-[4px] absolute w-full h-full z-10"></div>
                <div class="relative z-20 lg:max-w-[80%]">
                    <h2 class="text-white text-center font-medium text-balance text-3xl">{{ t('Pages.eCommerce.Section 7.Title') }}</h2>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-16 pt-10">
        <div class="container">
            <div class="max-w-[800px] mx-auto text-center">
                <h3 class="text-2xl font-bold mb-2 text-balance">{{ t('Pages.eCommerce.Section 8.Title') }}</h3>
                <p>{{ t('Pages.eCommerce.Section 8.Description') }}</p>
            </div>
            <img class="mx-auto mt-16" src="/one-partner.webp" />
            
        </div>
    </section>

    <div class="lg:py-16 max-lg:py-10">
        <div class="container">
            <h2 class="text-2xl font-bold text-center">{{t('Pages.eCommerce.Section 9.Title')}}</h2>

            <div class="marquee1 overflow-hidden mt-10">
                <div class="wrapper grid grid-flow-col auto-cols-[8rem] lg:auto-cols-[18rem] justify-items-center items-center mt-10 animate-[marquee1_20s_linear_infinite] lg:animate-[marquee1lg_20s_linear_infinite] rtl:[animation-direction:reverse]"">
                    <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                        <img :src="marquee" alt="Client" />
                    </template>
                </div>
            </div>

        </div>
        
    </div>
    <div class="separator mb-0"></div>

    <Accordion :data="faq" :title="t('Pages.eCommerce.Section 10.Title')" /> 
    
    
    <BlueSection :title="t('Pages.eCommerce.Section 11.Title')" :subtitle="t('Pages.eCommerce.Section 11.Description')" :buttonText="t('General.Buttons.Request a Demo')" buttonLink="https://prechecklist.montypay.com/website" target="_blank" image="/unified-dashboard.webp"/>
    
    <PaymentSolutions />
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'E-Commerce Payment Services for Online Businesses',
    ogTitle: 'E-Commerce Payment Services for Online Businesses',
    description: 'Empower your online store with MontyPay’s e-commerce payment services—secure checkout, global payment methods, and seamless customer experiences.',
    ogDescription: 'Empower your online store with MontyPay’s e-commerce payment services—secure checkout, global payment methods, and seamless customer experiences.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

useHead({
    script: [
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=AW-17262217251',
            async: true
        },
        {
            children: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17262217251');
            `
        }
    ]
})

const items = [
    {
        title: t('Pages.eCommerce.Section 3.Title'),
        description: t('Pages.eCommerce.Section 3.Description'),
        image: '/shopify-website.webp',
        items: [
            {
                svg: '/shopify-website-1.svg',
                title: t('Pages.eCommerce.Section 3.Items[0].Title')
            },
            {
                svg: '/shopify-website-2.svg',
                title: t('Pages.eCommerce.Section 3.Items[1].Title')
            },
            {
                svg: '/shopify-website-3.svg',
                title: t('Pages.eCommerce.Section 3.Items[2].Title')
            },
            {
                svg: '/shopify-website-4.svg',
                title: t('Pages.eCommerce.Section 3.Items[3].Title')
            },
            {
                svg: '/shopify-website-5.svg',
                title: t('Pages.eCommerce.Section 3.Items[4].Title')
            },
            {
                svg: '/shopify-website-6.svg',
                title: t('Pages.eCommerce.Section 3.Items[5].Title')
            }
        ]
    },
    {
        title: t('Pages.eCommerce.Section 4.Title'),
        description: t('Pages.eCommerce.Section 4.Description'),
        image: '/payment-gateway-integration.webp',
        items: [
            {
                svg: '/payment-gateway-integration-1.svg',
                title: t('Pages.eCommerce.Section 4.Items[0].Title')
            },
            {
                svg: '/payment-gateway-integration-2.svg',
                title: t('Pages.eCommerce.Section 4.Items[1].Title')
            },
            {
                svg: '/payment-gateway-integration-3.svg',
                title: t('Pages.eCommerce.Section 4.Items[2].Title')
            },
            {
                svg: '/payment-gateway-integration-5.svg',
                title: t('Pages.eCommerce.Section 4.Items[3].Title')
            },
            {
                svg: '/payment-gateway-integration-6.svg',
                title: t('Pages.eCommerce.Section 4.Items[4].Title')
            }
        ]
    },
    {
        title: t('Pages.eCommerce.Section 5.Title'),
        description: t('Pages.eCommerce.Section 5.Description'),
        image: '/website-audit.webp',
        items: [
            {
                svg: '/website-audit-1.svg',
                title: t('Pages.eCommerce.Section 5.Items[0].Title')
            },
            {
                svg: '/website-audit-2.svg',
                title: t('Pages.eCommerce.Section 5.Items[1].Title')
            },
            {
                svg: '/website-audit-3.svg',
                title: t('Pages.eCommerce.Section 5.Items[2].Title')
            },
            {
                svg: '/website-audit-4.svg',
                title: t('Pages.eCommerce.Section 5.Items[3].Title')
            },
            {
                svg: '/website-audit-5.svg',
                title: t('Pages.eCommerce.Section 5.Items[4].Title')
            }
        ]
    },
    {
        title: t('Pages.eCommerce.Section 6.Title'),
        description: t('Pages.eCommerce.Section 6.Description'),
        image: '/full-service-digital-growth.webp',
        items: [
            {
                svg: '/full-service-digital-growth-1.svg',
                title: t('Pages.eCommerce.Section 6.Items[0].Title')
            },
            {
                svg: '/full-service-digital-growth-2.svg',
                title: t('Pages.eCommerce.Section 6.Items[1].Title')
            },
            {
                svg: '/full-service-digital-growth-3.svg',
                title: t('Pages.eCommerce.Section 6.Items[2].Title')
            },
            {
                svg: '/full-service-digital-growth-4.svg',
                title: t('Pages.eCommerce.Section 6.Items[3].Title')
            },
            {
                svg: '/full-service-digital-growth-5.svg',
                title: t('Pages.eCommerce.Section 6.Items[4].Title')
            }
        ]
    }
]

const faq = [
    {
        question: t('Pages.eCommerce.Section 10.Items[0].Question'),
        answer: t('Pages.eCommerce.Section 10.Items[0].Answer')
    },
    {
        question: t('Pages.eCommerce.Section 10.Items[1].Question'),
        answer: t('Pages.eCommerce.Section 10.Items[1].Answer')
    },
    {
        question: t('Pages.eCommerce.Section 10.Items[2].Question'),
        answer: t('Pages.eCommerce.Section 10.Items[2].Answer')
    },
    {
        question: t('Pages.eCommerce.Section 10.Items[3].Question'),
        answer: t('Pages.eCommerce.Section 10.Items[3].Answer')
    },
    {
        question: t('Pages.eCommerce.Section 10.Items[4].Question'),
        answer: t('Pages.eCommerce.Section 10.Items[4].Answer')
    },
    // {
    //     question: t('Pages.eCommerce Services.Section 7.Items[5].Question'),
    //     answer: t('Pages.eCommerce Services.Section 7.Items[5].Answer')
    // },
    {
        question: t('Pages.eCommerce.Section 10.Items[6].Question'),
        answer: t('Pages.eCommerce.Section 10.Items[6].Answer')
    }
]

const clients = [
    '/ozey.webp','/leiak.webp','/marios.webp', '/lost.webp', '/beydee.webp'
]
const duplicatedMarqueeList = computed(() => [...clients, ...clients, ...clients]);


</script>

<style lang="sass" scoped>
   
</style>