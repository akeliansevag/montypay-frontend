<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 right-0 top-0" />

        <div class="ml-container-align with-padding">
            <div class="flex max-lg:flex-col max-lg:gap-5 lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-12">
                    <h1 class="text-5xl !leading-[1.5]">Build Your Website <br /> And Start <span class="text-[#233F94]">Selling Online</span> <br />in Less Than 30 Days</h1>
                    <p class="text-xl">Create a powerful online presence with MontyPay’s expert e-commerce solutions. From design to payment integration, we handle it all to bring your vision to life.</p>
                </div>
                <div class="lg:w-[50%] flex justify-end">
                    <img src="/ecommerce-banner.webp" alt="ecommerce Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <FadeSwiper :reverse="true" :data="sliderOne" title="Reach Your Businesses' Full Potential" subtitle="Stay ahead of the competition with an e-commerce platform that unlocks endless opportunities for your business:"/>

    <div class="container">
        <div class="separator"></div>
    </div>

    <section>
        <div class="container">
            <h2 class="text-3xl">What We Bring to the Table</h2>
            <p class="text-xl mt-4">We transform your vision into reality by building custom websites from scratch in less than a month, designed to meet your unique business needs. With full customization options, you can tailor your online store to reflect your brand and cater to global audiences.</p>
            <img class="mt-12 mx-auto drop-shadow-2xl" src="/what-we-bring-to-the-table.webp" alt="What we bring to the table" />
        </div>
    </section>

    <div class="container">
        <div class="separator"></div>
    </div>

    <FadeSwiper :reverse="true" :data="sliderTwo" :noPadding="true" title="Master Your Content" subtitle="Take full control of your website’s content and updates:"/>

    <div class="container">
        <div class="separator"></div>
    </div>

    <PaddingSlider :data="sliderThree" title="Create, Captivate, Convert" subtitle="Pair your e-commerce platform with expert social media services and high-quality visual content:"/>

    <div class="container">
        <div class="separator"></div>
    </div>

    <FadeSwiper :reverse="true" :data="sliderFour" :noPadding="true" title="Tap Into the Power of Payments" subtitle="MontyPay’s seamless payment solutions ensure your customers can check out quickly and securely:"/>

    <div class="separator mb-0"></div>

    <Accordion :data="faq" title="All You Need to Know" /> 
    <div class="lg:py-16 max-lg:py-10">
        <div class="container">
            <h2 class="text-2xl font-bold text-center">Our Clients</h2>

            <div class="marquee1 overflow-hidden mt-10">
                <div class="wrapper grid grid-flow-col auto-cols-[8rem] lg:auto-cols-[18rem] justify-items-center items-center mt-10 animate-[marquee1_20s_linear_infinite] lg:animate-[marquee1lg_20s_linear_infinite]">
                    <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                        <img :src="marquee" alt="Client" />
                    </template>
                </div>
            </div>

        </div>
        
    </div>
    <BlueSection title="Ready to Transform Your Online Presence?" subtitle="Let’s bring your vision to life! Reach out to us today,
and let’s get started building your e-commerce platform with MontyPay. Your future customers are waiting." buttonText="Request a demo" buttonLink="/contact-us" image="/ready-to-transform.webp"/>
    <PaymentSolutions />
</template>

<script setup>
useSeoMeta({
    title: 'eCommerce Services',
    ogTitle: 'eCommerce Services',
    description: 'eCommerce Services ',
    ogDescription: 'eCommerce Services',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const faq = [
    {
        question: 'Can I customize the design of my online store?',
        answer: 'Absolutely. We build a website that reflects your brand’s personality and vision'
    },
    {
        question: 'How can I accept payments on my e-commerce store?',
        answer: 'With MontyPay’s integrated, secure payment gateway, you can accept payments with ease.'
    },
    {
        question: 'Is my checkout secure?',
        answer: 'Yes, MontyPay is PCI DSS-certified, ensuring top-tier security.'
    },
    {
        question: 'Can I integrate more than one language?',
        answer: 'Yes, we offer multi-language support for a truly global reach.'
    },
    {
        question: 'Can I use multiple currencies?',
        answer: 'Definitely! We support payments in multiple currencies to cater to customers around the world.'
    },
    {
        question: 'Is the website mobile-friendly?',
        answer: 'Absolutely! We ensure your website is fully responsive, providing a seamless experience across all devices.'
    },
    {
        question: 'How many payment options are supported?',
        answer: 'Over 100, including credit cards, digital wallets, and even cryptocurrency.'
    }
]

const sliderOne = [
    {
        title: '24/7 Availability',
        description: 'Your store never sleeps, ready to serve customers globally',
        image: '/24-7-availability.webp',
    },
    {
        title: 'Broaden Your Reach',
        description: 'Attract a wider audience beyond your local market',
        image: '/broaden-your-reach.webp',
    },
    {
        title: 'Boost Sales',
        description: 'Leverage analytics and targeted strategies to convert visitors into loyal customers',
        image: '/boost-sales.webp',
    },
    {
        title: 'Enhanced Brand Visibility',
        description: 'Create a memorable online presence that reflects your brand’s unique identity',
        image: '/enhanced-brand-visibility.webp',
    },
    {
        title: 'Simplified Operations',
        description: 'Manage inventory, track orders, and monitor sales in one place.',
        image: '/simplified-operations.webp',
    },
    {
        title: 'Delight Your Customers',
        description: 'Secure, intuitive, and mobile-friendly shopping tailored to your customers’ needs.',
        image: '/delight-your-customers.webp',
    },
    
];

const sliderTwo = [
    {
        title: 'Enjoy intuitive controls to keep your site fresh and updated',
        image: '/enjoy-intuitive-controls.webp',
    },
    {
        title: 'Improve SEO and increase visibility with built-in optimization tools.',
        image: '/improve-seo.webp',
    },
    {
        title: 'Easily create, edit, and publish content',
        image: '/easily-create.webp',
    },
];

const sliderThree = [
    {
        title: 'Develop engaging, brand-aligned content.',
        image: '/develop-engaging.webp',
    },
    {
        title: 'Boost visibility and engagement across platforms.',
        image: '/boost-visibility.webp',
    },
    {
        title: 'Create marketing assets to tell your story and captivate your audience.',
        image: '/create-marketing.webp',
    },
    {
        title: 'Build a photo library showcasing your products in the best light, with professional imagery and videography.',
        image: '/build-a-photo-library.webp',
    },
    {
        title: 'Engage and convert shoppers with stunning imagery and professional videography.',
        image: '/engage-and-convert.webp',
    }

];

const sliderFour = [
    {
        title: 'Accept over 100 payment options, including cards, wallets, and cryptocurrencies',
        image: '/accept-over-100.webp',
    },
    {
        title: 'Enable mobile payments for convenience',
        image: '/enable-mobile-payments.webp',
    },
    {
        title: 'Offer flexible payment methods like pay-by-link, QR codes, and recurring billing',
        image: '/offer-flexible-payment-methods.webp',
    },
    {
        title: 'Enjoy reliable, secure transactions backed by PCI DSS compliance',
        image: '/enjoy-reliable.webp',
    },
    {
        title: 'Integrate into your website to start collecting payments immediately.',
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