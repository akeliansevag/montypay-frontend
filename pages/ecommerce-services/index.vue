<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 end-0 top-0 rtl:rotate-180" />

        <div class="ms-container-align with-padding">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl lg:text-5xl leading-[1.3] lg:!leading-[1.5]">Build Your Brand Online  With Your Trusted <i>shopify</i> Partner </h1>
                    <p class="text-xl">End-to-end solutions for startups, growing brands, and large enterprises looking to strengthen their online presence. </p>
                    <div>
                        <NuxtLinkLocale to="https://prechecklist.montypay.com/website/" target="_blank" class="inline-block mp-button-quaternary">Get a Free Audit</NuxtLinkLocale>  
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
                <h2 class="text-3xl mb-2">Building Strong Online Brands with Seamless Payments </h2>
                <p>MontyPay delivers complete eCommerce solutions designed for performance, scalability, and global reach. From early-stage startups to established enterprises, MontyPay equips every business with the tools needed to build, launch, and scale. </p> 
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
                    <h2 class="text-white text-center font-medium text-balance text-3xl">Designed to increase traffic, strengthen brand presence, and boost online sales. </h2>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-16 pt-10">
        <div class="container">
            <div class="max-w-[800px] mx-auto text-center">
                <h3 class="text-2xl font-bold mb-2 text-balance">One Partner Tailoring Solutions For Your Business </h3>
                <p>MontyPay offers a fully connected ecosystem that brings eCommerce, payments, and digital growth together. </p>
            </div>
            <img class="mx-auto mt-16" src="/one-partner.webp" />
            
        </div>
    </section>

    <div class="lg:py-16 max-lg:py-10">
        <div class="container">
            <h2 class="text-2xl font-bold text-center">{{t('Pages.eCommerce Services.Section 8.Title')}}</h2>

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

    <Accordion :data="faq" :title="t('Pages.eCommerce Services.Section 7.Title')" /> 
    
    
    <BlueSection title="Unified Dashboard for eCommerce Performance " subtitle="All website transactions, analytics, and payment activity accessible through MontyPay’s unified dashboard. Businesses gain clear insight into their online performance in real time, accessible via web and mobile for full flexibility." :buttonText="t('General.Buttons.Request a Demo')" buttonLink="https://prechecklist.montypay.com/website" target="_blank" image="/unified-dashboard.webp"/>
    
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
        title: 'Shopify Website Design & Development ',
        description: 'Modern, responsive, and conversion-focused eCommerce stores built for both B2B and B2C. MontyPay creates scalable online stores that reflect each brand’s identity and deliver smooth shopping experiences across all channels. ',
        image: '/shopify-website.webp',
        items: [
            {
                svg: '/shopify-website-1.svg',
                title: 'Custom Shopify theme design'
            },
            {
                svg: '/shopify-website-2.svg',
                title: 'User-friendly layout and navigation '
            },
            {
                svg: '/shopify-website-3.svg',
                title: 'Mobile-optimized structure '
            },
            {
                svg: '/shopify-website-4.svg',
                title: 'High-performance product pages '
            },
            {
                svg: '/shopify-website-5.svg',
                title: 'Tailored Checkout that converts '
            },
            {
                svg: '/shopify-website-6.svg',
                title: 'Localization for international markets '
            }
        ]
    },
    {
        title: 'Payment Gateway Integration ',
        description: 'Seamless, secure, and multi-currency payments powered by MontyPay. Businesses can accept card and wallet payments globally with a fully integrated MontyPay  checkout designed for speed, reliability, and increased conversions. ',
        image: '/payment-gateway-integration.webp',
        items: [
            {
                svg: '/payment-gateway-integration-1.svg',
                title: 'Multi-currency support '
            },
            {
                svg: '/payment-gateway-integration-2.svg',
                title: 'Fast processing & real-time reporting '
            },
            {
                svg: '/payment-gateway-integration-3.svg',
                title: 'Fraud protection '
            },
            {
                svg: '/payment-gateway-integration-5.svg',
                title: 'Local & international payment methods '
            },
            {
                svg: '/payment-gateway-integration-6.svg',
                title: 'Smooth integration with Shopify and custom websites '
            }
        ]
    },
    {
        title: 'Website Audit & Cost Analysis ',
        description: 'Comprehensive evaluation to understand business needs, platform requirements, and cost structure. MontyPay provides clear, data-backed insights to help businesses plan their eCommerce scale efficiently. ',
        image: '/website-audit.webp',
        items: [
            {
                svg: '/website-audit-1.svg',
                title: 'UX & design recommendations '
            },
            {
                svg: '/website-audit-2.svg',
                title: 'Performance & speed checks '
            },
            {
                svg: '/website-audit-3.svg',
                title: 'SEO readiness '
            },
            {
                svg: '/website-audit-4.svg',
                title: 'TCO Analysis'
            },
            {
                svg: '/website-audit-5.svg',
                title: 'Cost breakdown & timeline guidance '
            }
        ]
    },
    {
        title: 'Full-Service Digital Growth ',
        description: 'End-to-end digital marketing solutions to grow online visibility and convert more customers. ',
        image: '/full-service-digital-growth.webp',
        items: [
            {
                svg: '/full-service-digital-growth-1.svg',
                title: 'Performance marketing '
            },
            {
                svg: '/full-service-digital-growth-2.svg',
                title: 'Content creation & brand storytelling '
            },
            {
                svg: '/full-service-digital-growth-3.svg',
                title: 'SEO strategy & implementation '
            },
            {
                svg: '/full-service-digital-growth-4.svg',
                title: 'Social media management '
            },
            {
                svg: '/full-service-digital-growth-5.svg',
                title: 'Campaign performance reporting '
            }
        ]
    }
]

const faq = [
    {
        question: t('Pages.eCommerce Services.Section 7.Items[0].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[0].Answer')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[1].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[1].Answer')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[2].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[2].Answer')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[3].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[3].Answer')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[4].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[4].Answer')
    },
    // {
    //     question: t('Pages.eCommerce Services.Section 7.Items[5].Question'),
    //     answer: t('Pages.eCommerce Services.Section 7.Items[5].Answer')
    // },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[6].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[6].Answer')
    }
]

const sliderOne = [
    {
        title: t('Pages.eCommerce Services.Section 2.Items[0].Title'),
        description: t('Pages.eCommerce Services.Section 2.Items[0].Description'),
        image: '/24-7-availability.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 2.Items[1].Title'),
        description: t('Pages.eCommerce Services.Section 2.Items[1].Description'),
        image: '/broaden-your-reach.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 2.Items[2].Title'),
        description: t('Pages.eCommerce Services.Section 2.Items[2].Description'),
        image: '/boost-sales.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 2.Items[3].Title'),
        description: t('Pages.eCommerce Services.Section 2.Items[3].Description'),
        image: '/enhanced-brand-visibility.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 2.Items[4].Title'),
        description: t('Pages.eCommerce Services.Section 2.Items[4].Description'),
        image: '/simplified-operations.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 2.Items[5].Title'),
        description: t('Pages.eCommerce Services.Section 2.Items[5].Description'),
        image: '/delight-your-customers.webp',
    },
    
];

const clients = [
    '/ozey.webp','/leiak.webp','/marios.webp', '/lost.webp', '/beydee.webp'
]
const duplicatedMarqueeList = computed(() => [...clients, ...clients, ...clients]);


</script>

<style lang="sass" scoped>
   
</style>