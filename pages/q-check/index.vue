<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 end-0 rtl:rotate-180" />

        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[50%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">{{t('Pages.QCheck.Banner.Title')}}</h1>
                    <p class="text-xl">{{t('Pages.QCheck.Banner.Description')}}</p>
                    <!-- <div class="relative">
                        <input required type="text" placeholder="" class="border border-[#D9D9D9] w-full rounded-xl px-5 py-4 lg:pe-[170px] shadow-md" />
                        <button class="mp-button-quaternary lg:absolute max-lg:mt-1 max-lg:w-full lg:end-1 lg:h-[85%] lg:top-1/2 lg:-translate-y-1/2 max-lg:mt-4">Request a Demo</button>
                    </div> -->
                </div>
                <div class="lg:w-[35%]">
                    <img src="/qcheck-banner.webp" alt="QCheck Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <FadeSlider :data="sliderOne" :title="t('Pages.QCheck.Section 2.Title')"/>
    <div class="container">
        <div class="separator"></div>
    </div>

    <FadeSlider :data="sliderTwo" noPadding="true" :subtitle="t('Pages.QCheck.Section 3.Description')" :title="t('Pages.QCheck.Section 3.Title')" reverse="true"/>
    <div class="container">
        <div class="separator"></div>
    </div>


    <FadeSliderTwo :data="sliderThree" :title="t('Pages.QCheck.Section 4.Title')" :subtitle="t('Pages.QCheck.Section 4.Description')"/>
    <div class="container">
        <div class="separator"></div>
    </div>
    
    <section class="max-lg:pb-10 lg:pb-20">
        <div class="container">
            <h2 class="text-2xl">{{t('Pages.QCheck.Section 5.Title')}}</h2>

            <div class="marquee overflow-hidden">
                <div class="wrapper grid grid-flow-col auto-cols-[12rem] lg:auto-cols-[15rem] justify-items-center items-center mt-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite] rtl:[animation-direction:reverse]">
                    <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                        <img :src="marquee.image" :alt="marquee.title" />
                    </template>
                </div>
            </div>
        </div>
    </section>
    
    <section class="max-lg:pb-10 lg:pb-20">
        <div class="container">
            <h2 class="text-2xl">{{t('Pages.QCheck.Section 6.Title')}}</h2>
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
    
    <Accordion :data="faq" :title="t('Pages.QCheck.Section 7.Title')" /> 
    
    <BlueSection :title="t('Pages.QCheck.Section 8.Title')" :subtitle="t('Pages.QCheck.Section 8.Description')" :buttonText="t('General.Buttons.Request a Demo')" buttonLink="/contact-us" image="/its-just-one-scan-away.webp"/>
    
    <PaymentSolutions />
</template>

<script setup>
const { t, locale, setLocale } = useI18n()
useSeoMeta({
    title: 'QCheck Verification | Secure Customer Screening',
    ogTitle: 'QCheck Verification | Secure Customer Screening',
    description: 'QCheck helps businesses verify customer identities quickly and securely. Enhance trust and protect your payment operations with MontyPay.',
    ogDescription: 'QCheck helps businesses verify customer identities quickly and securely. Enhance trust and protect your payment operations with MontyPay.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const faq = [
    {
        question: t('Pages.QCheck.Section 7.Items[0].Question'),
        answer: t('Pages.QCheck.Section 7.Items[0].Answer')
    },
    {
        question: t('Pages.QCheck.Section 7.Items[1].Question'),
        answer: t('Pages.QCheck.Section 7.Items[1].Answer')
    },
    {
        question: t('Pages.QCheck.Section 7.Items[2].Question'),
        answer: t('Pages.QCheck.Section 7.Items[2].Answer')
    },
    {
        question: t('Pages.QCheck.Section 7.Items[3].Question'),
        answer: t('Pages.QCheck.Section 7.Items[3].Answer')
    },
    {
        question: t('Pages.QCheck.Section 7.Items[4].Question'),
        answer: t('Pages.QCheck.Section 7.Items[4].Answer')
    }
]

const why = [
    [t('Pages.QCheck.Section 6.Items[0][0]'),t('Pages.QCheck.Section 6.Items[0][1]'),t('Pages.QCheck.Section 6.Items[0][2]')],
    [t('Pages.QCheck.Section 6.Items[1][0]'),t('Pages.QCheck.Section 6.Items[1][1]'),t('Pages.QCheck.Section 6.Items[1][2]')],
    [t('Pages.QCheck.Section 6.Items[2][0]'),t('Pages.QCheck.Section 6.Items[2][1]'),t('Pages.QCheck.Section 6.Items[2][2]')],
    [t('Pages.QCheck.Section 6.Items[3][0]'),t('Pages.QCheck.Section 6.Items[3][1]'),t('Pages.QCheck.Section 6.Items[3][2]')],
    [t('Pages.QCheck.Section 6.Items[4][0]'),t('Pages.QCheck.Section 6.Items[4][1]'),t('Pages.QCheck.Section 6.Items[4][2]')],
    [t('Pages.QCheck.Section 6.Items[5][0]'),t('Pages.QCheck.Section 6.Items[5][1]'),t('Pages.QCheck.Section 6.Items[5][2]')],
    [t('Pages.QCheck.Section 6.Items[6][0]'),t('Pages.QCheck.Section 6.Items[6][1]'),t('Pages.QCheck.Section 6.Items[6][2]')]
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
        title: t('Pages.QCheck.Section 2.Items[0].Title'),
        description: t('Pages.QCheck.Section 2.Items[0].Description'),
        image: '/faster-checkout.webp',
        category: t('Pages.QCheck.Section 2.Items[0].Category'),
    },
    {
        title: t('Pages.QCheck.Section 2.Items[1].Title'),
        description: t('Pages.QCheck.Section 2.Items[1].Description'),
        image: '/seamless-experience.webp',
        category: t('Pages.QCheck.Section 2.Items[1].Category'),
    },
    {
        title: t('Pages.QCheck.Section 2.Items[2].Title'),
        description: t('Pages.QCheck.Section 2.Items[2].Description'),
        image: '/simple-and-secure-payments.webp',
        category: t('Pages.QCheck.Section 2.Items[2].Category'),
    },
    {
        title: t('Pages.QCheck.Section 2.Items[3].Title'),
        description: t('Pages.QCheck.Section 2.Items[3].Description'),
        image: '/multiple-payment-options.webp',
        category: t('Pages.QCheck.Section 2.Items[3].Category'),
    },
];

const sliderTwo = [
    {
        title: t('Pages.QCheck.Section 3.Items[0].Title'),
        description: t('Pages.QCheck.Section 3.Items[0].Description'),
        image: '/scan-the-qr-code.webp',
        category: t('Pages.QCheck.Section 3.Items[0].Category'),
    },
    {
        title: t('Pages.QCheck.Section 3.Items[1].Title'),
        description: t('Pages.QCheck.Section 3.Items[1].Description'),
        image: '/split-the-bill.webp',
        category: t('Pages.QCheck.Section 3.Items[1].Category'),
    },
    {
        title: t('Pages.QCheck.Section 3.Items[2].Title'),
        description: t('Pages.QCheck.Section 3.Items[2].Description'),
        image: '/add-a-tip.webp',
        category: t('Pages.QCheck.Section 3.Items[2].Category'),
    },
    {
        title: t('Pages.QCheck.Section 3.Items[3].Title'),
        description: t('Pages.QCheck.Section 3.Items[3].Description'),
        image: '/pay-the-bill.webp',
        category: t('Pages.QCheck.Section 3.Items[3].Category'),
    },
];

const sliderThree = [
    {
        title: t('Pages.QCheck.Section 4.Items[0].Title'),
        description: t('Pages.QCheck.Section 4.Items[0].Description'),
        image: '/integration-1.webp',
    },
    {
        title: t('Pages.QCheck.Section 4.Items[1].Title'),
        description: t('Pages.QCheck.Section 4.Items[1].Description'),
        image: '/integration-2.webp',
    },
    {
        title: t('Pages.QCheck.Section 4.Items[2].Title'),
        description: t('Pages.QCheck.Section 4.Items[2].Description'),
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
            @apply text-start font-bold text-2xl p-8
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