<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 right-0" />

        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[50%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">QCheck: The Self-Service Checkout Solution That Works for You</h1>
                    <p class="text-xl">Flip the floor faster and keep them coming back with QCheck, the ultimate self-service checkout tool. Whether guests are scanning to browse your menu or settling their bill, QCheck is designed for speed, efficiency, and satisfaction.</p>
                    <div class="relative">
                        <input required type="text" placeholder="What's your restaurant's name?" class="border border-[#D9D9D9] w-full rounded-xl px-5 py-4 lg:pr-[170px] shadow-md" />
                        <button class="mp-button-quaternary lg:absolute max-lg:mt-1 max-lg:w-full lg:right-1 lg:h-[85%] lg:top-1/2 lg:-translate-y-1/2 max-lg:mt-4">Request a Demo</button>
                    </div>
                </div>
                <div class="lg:w-[35%]">
                    <img src="/qcheck-banner.webp" alt="QCheck Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <FadeSlider :data="sliderOne" title="Starts With a Scan. Ends With a Smile."/>
    <div class="container">
        <div class="separator"></div>
    </div>

    <FadeSlider :data="sliderTwo" noPadding="true" subtitle="Create a modern, quick, and enjoyable dining experience with QCheck’s intuitive features." title="It’s All Just One Scan Away" reverse="true"/>
    <div class="container">
        <div class="separator"></div>
    </div>


    <FadeSliderTwo :data="sliderThree" title="Integration and Onboarding" subtitle="Getting started with QCheck is quick and hassle-free:"/>
    <div class="container">
        <div class="separator"></div>
    </div>
    
    <section class="max-lg:pb-10 lg:pb-20">
        <div class="container">
            <h2 class="text-2xl">Connectors</h2>

            <div class="marquee overflow-hidden">
                <div class="wrapper grid grid-flow-col auto-cols-[12rem] lg:auto-cols-[15rem] justify-items-center items-center mt-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
                    <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                        <img :src="marquee.image" :alt="marquee.title" />
                    </template>
                </div>
            </div>
        </div>
    </section>
    
    <section class="max-lg:pb-10 lg:pb-20">
        <div class="container">
            <h2 class="text-2xl">Why QCheck?</h2>
            <div>
                <div class="table-wrapper">
                    <table class="custom-table">
                        <tr v-for="(row,index) in why">
                            <th v-if="index==0" v-for="(col,ind) in row">
                                {{ col }}
                            </th>
                            <td v-else v-for="(col,ind) in row">
                                {{ col }}
                            </td>
                        </tr>
                    </table>
                </div>
                
            </div>        
        </div>
    </section>
    
    <Accordion :data="faq" title="All You Need to Know" /> 
    
    <BlueSection title="It’s All Just One Scan Away" subtitle="Create a modern, quick, and enjoyable dining experience with Qcheck’s intuitive features" buttonText="Request a demo" buttonLink="/contact-us" image="/its-just-one-scan-away.webp"/>
    
    <PaymentSolutions />
</template>

<script setup>
useSeoMeta({
    title: 'QCheck',
    ogTitle: 'QCheck',
    description: 'QCheck ',
    ogDescription: 'QCheck ',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const faq = [
    {
        question: 'How does QCheck handle bill splitting?',
        answer: 'Guests can divide their bills equally or itemize them with ease.'
    },
    {
        question: 'What payment methods are supported?',
        answer: 'QCheck supports 100+ payment methods, including card and wallet payments.'
    },
    {
        question: 'How secure are the transactions?',
        answer: 'QCheck ensures the highest level of security with PCI DSS compliance and encryption.'
    },
    {
        question: 'Does QCheck integrate with existing POS systems?',
        answer: 'Yes, it integrates seamlessly for uninterrupted operations.'
    },
    {
        question: 'Is support available for setup and staff training?',
        answer: 'Absolutely! We provide complete onboarding and training support to ensure success.'
    }
]

const why = [
    ['Feature','QCheck','Traditional Checkout'],
    ['Wait time','Less than 2 minutes','10+ minutes'],
    ['Bill splitting','Division and itemized','Manual'],
    ['Payment options','Diverse','Limited'],
    ['Tipping','Increase tips','Average tips'],
    ['Integration','Seamless POS integration','Basic integration'],
    ['Customer satisfaction','High','Average']
]
const connectors = [
    {
        title: 'DinerWare',
        image: '/dinerware.webp'
    },
    {
        title: 'Micros',
        image: '/micros.webp'
    },
    {
        title: 'Brink POS',
        image: '/brink-pos.webp'
    },
    {
        title: 'Heartland Xpient',
        image: '/heartland-xpient.webp'
    },
    {
        title: 'NCR',
        image: '/ncr.webp'
    },
    {
        title: 'Maitred',
        image: '/maitred.webp'
    },
    {
        title: 'POS iTouch',
        image: '/positouch.webp'
    },
]

const duplicatedMarqueeList = computed(() => [...connectors, ...connectors, ...connectors]);

const sliderOne = [
    {
        title: 'Faster Checkout',
        description: 'Save up to 17 minutes per table for faster turnover with QCheck\'s seamless pay-at-table experience.',
        image: '/faster-checkout.webp',
        category: 'Faster',
    },
    {
        title: 'Seamless Experience',
        description: 'Ensure a frictionless journey from menu browsing to bill payment, leaving guests happy and operations smooth.',
        image: '/seamless-experience.webp',
        category: 'Seamless',
    },
    {
        title: 'Simple and Secure Payments',
        description: 'Offer confidence and peace of mind with multiple secure payment options, from mobile wallets to cards.',
        image: '/simple-and-secure-payments.webp',
        category: 'Secure',
    },
    {
        title: 'Multiple Payment Options',
        description: 'Give guests flexibility with wallet payments, card payments, and many more, all in one hassle-free process',
        image: '/multiple-payment-options.webp',
        category: 'Flexible',
    },
];

const sliderTwo = [
    {
        title: 'Scan the QR Code',
        description: 'One code, two benefits! Guests can view your menu and pay the bill without waiting',
        image: '/scan-the-qr-code.webp',
        category: 'Scan',
    },
    {
        title: 'Split the Bill',
        description: 'Simplify group payments with itemized or equal division options',
        image: '/split-the-bill.webp',
        category: 'Split',
    },
    {
        title: 'Add a Tip',
        description: 'Triple staff tips with an easy in-app tipping option during payment',
        image: '/add-a-tip.webp',
        category: 'Tip',
    },
    {
        title: 'Pay the Bill',
        description: 'Offer secure and versatile payment methods for fast, smooth transactions',
        image: '/pay-the-bill.webp',
        category: 'Pay',
    },
];

const sliderThree = [
    {
        title: 'Sync Your POS',
        description: 'Our team ensures seamless integration with your existing POS system',
        image: '/integration-1.webp',
    },
    {
        title: 'Staff Training',
        description: 'Comprehensive training equips your team to use QCheck effortlessly. ',
        image: '/integration-2.webp',
    },
    {
        title: 'Fast Customer Checkout',
        description: 'Your guests can immediately enjoy faster, smoother checkouts.',
        image: '/integration-3.webp',
    }
];
</script>

<style lang="sass" scoped>
    .table-wrapper
        @apply max-lg:overflow-x-auto
    .custom-table
        @apply shadow-xl w-full rounded-xl overflow-hidden mt-10 max-lg:min-w-[1000px]
        th
            @apply text-left font-bold text-2xl p-8
        td
            @apply px-8 py-4
        tr:last-child td
            @apply pb-8
        tr:nth-child(even)
            @apply bg-[#DFE3EF]
        tr:nth-child(odd)
            @apply bg-[#E9ECF4]
        th:first-child
            @apply bg-white
        tr td:first-child
            @apply font-bold bg-white 
        tr td:nth-child(2)
            @apply flex gap-2 items-center before:content-['✓'] before:bg-gradient-to-r before:from-[#003383] before:to-[#00DFDF] before:w-5 before:h-5 before:rounded-full before:text-white before:flex before:justify-center before:items-center before:shrink-0
</style>