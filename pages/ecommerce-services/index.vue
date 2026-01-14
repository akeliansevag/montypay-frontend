<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 end-0 top-0" />

        <div class="ms-container-align with-padding">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">{{ t('Pages.eCommerce Services.Banner.Title') }}</h1>
                    <p class="text-xl">{{ t('Pages.eCommerce Services.Banner.Description') }}</p>
                    <div>
                        <NuxtLinkLocale to="https://prechecklist.montypay.com/website/" target="_blank" class="inline-block mp-button-quaternary">{{ t('Pages.eCommerce Services.Banner.Button Text') }}</NuxtLinkLocale>  
                    </div>
                </div>
                <div class="lg:w-[50%]">
                    <img src="/ecommerce-banner.webp" alt="ecommerce Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <FadeSwiper :reverse="true" :data="sliderOne" :title="t('Pages.eCommerce Services.Section 2.Title')" :subtitle="t('Pages.eCommerce Services.Section 2.Description')"/>

    <div class="container">
        <div class="separator"></div>
    </div>

    <section>
        <div class="container">
            <h2 class="text-3xl">{{t('Pages.eCommerce Services.Section 3.Title')}}</h2>
            <p class="text-xl mt-4">{{ t('Pages.eCommerce Services.Section 3.Description') }}</p>
            <img class="mt-12 mx-auto drop-shadow-2xl" src="/what-we-bring-to-the-table.webp" alt="What we bring to the table" />
        </div>
    </section>

    <div class="container">
        <div class="separator"></div>
    </div>

    <FadeSwiper :reverse="true" :data="sliderTwo" :noPadding="true" :title="t('Pages.eCommerce Services.Section 4.Title')" :subtitle="t('Pages.eCommerce Services.Section 4.Description')"/>

    <div class="container">
        <div class="separator"></div>
    </div>

    <PaddingSlider :data="sliderThree" :title="t('Pages.eCommerce Services.Section 5.Title')" :subtitle="t('Pages.eCommerce Services.Section 5.Description')"/>
    <div class="container mt-12">
        <NuxtLinkLocale to="https://prechecklist.montypay.com/website/" target="_blank" class="inline-block mp-button-quaternary">{{t('Pages.eCommerce Services.Section 5.Button Text')}}</NuxtLinkLocale>  
    </div>

    <div class="container">
        <div class="separator"></div>
    </div>

    <FadeSwiper :reverse="true" :data="sliderFour" :noPadding="true" :title="t('Pages.eCommerce Services.Section 6.Title')" :subtitle="t('Pages.eCommerce Services.Section 6.Description')"/>

    <div class="separator mb-0"></div>

    <Accordion :data="faq" :title="t('Pages.eCommerce Services.Section 7.Title')" /> 
    <div class="lg:py-16 max-lg:py-10">
        <div class="container">
            <h2 class="text-2xl font-bold text-center">{{t('Pages.eCommerce Services.Section 8.Title')}}</h2>

            <div class="marquee1 overflow-hidden mt-10">
                <div class="wrapper grid grid-flow-col auto-cols-[8rem] lg:auto-cols-[18rem] justify-items-center items-center mt-10 animate-[marquee1_20s_linear_infinite] lg:animate-[marquee1lg_20s_linear_infinite]">
                    <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                        <img :src="marquee" alt="Client" />
                    </template>
                </div>
            </div>

        </div>
        
    </div>
    
    <BlueSection :title="t('Pages.eCommerce Services.Section 9.Title')" :subtitle="t('Pages.eCommerce Services.Section 9.Description')" :buttonText="t('General.Buttons.Request a Demo')" buttonLink="https://prechecklist.montypay.com/website" target="_blank" image="/ready-to-transform.webp"/>
    
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

const faq = [
    {
        question: t('Pages.eCommerce Services.Section 7.Items[0].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[0].Question')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[1].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[1].Question')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[2].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[2].Question')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[3].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[3].Question')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[4].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[4].Question')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[5].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[5].Question')
    },
    {
        question: t('Pages.eCommerce Services.Section 7.Items[6].Question'),
        answer: t('Pages.eCommerce Services.Section 7.Items[6].Question')
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

const sliderTwo = [
    {
        title: t('Pages.eCommerce Services.Section 4.Items[0].Title'),
        image: '/enjoy-intuitive-controls.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 4.Items[1].Title'),
        image: '/improve-seo.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 2.Items[2].Title'),
        image: '/easily-create.webp',
    },
];

const sliderThree = [
    {
        title: t('Pages.eCommerce Services.Section 5.Items[0].Title'),
        image: '/develop-engaging.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 5.Items[1].Title'),
        image: '/boost-visibility.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 5.Items[2].Title'),
        image: '/create-marketing.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 5.Items[3].Title'),
        image: '/build-a-photo-library.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 5.Items[4].Title'),
        image: '/engage-and-convert.webp',
    }

];

const sliderFour = [
    {
        title: t('Pages.eCommerce Services.Section 6.Items[0].Title'),
        image: '/accept-over-100.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 6.Items[1].Title'),
        image: '/enable-mobile-payments.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 6.Items[2].Title'),
        image: '/offer-flexible-payment-methods.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 6.Items[3].Title'),
        image: '/enjoy-reliable.webp',
    },
    {
        title: t('Pages.eCommerce Services.Section 6.Items[4].Title'),
        image: '/integrate-into-your-website.webp',
    }

];

const clients = [
    '/ozey.webp','/leiak.webp','/marios.webp', '/lost.webp', '/beydee.webp'
]
const duplicatedMarqueeList = computed(() => [...clients, ...clients, ...clients]);


</script>

<style lang="sass" scoped>
   
</style>