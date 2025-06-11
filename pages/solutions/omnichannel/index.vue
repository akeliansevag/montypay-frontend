<template>
    <section class="relative max-lg:py-10 lg:py-24">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 right-0 top-0" />

        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-5 lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-7 lg:mt-10">
                    <h1>
                        All Your Payments. One Single Platform.
                    </h1>
                    <p>
                        Bring all your online, in-store, and mobile transactions into one seamless platform. Withreal-time insights, advanced reporting, and effortless management, you’ll deliver consistent, exceptional customer experiences while bringing your sales channels to their full potential.
                    </p>
                    <div class="mt-5">
                        <NuxtLink to="/contact-us" class="mp-button-quad">Request a demo</NuxtLink>
                    </div>
                    
                </div>
                <div class="lg:w-[50%] flex justify-end">
                    <img src="/omnichannel-banner.webp" alt="Omnichannel Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <PaddingWhiteSlider :data="sliderFour" title="Why MontyPay’s Omnichannel Is Your Go-to Solution" />
    


    <section class="lg:py-16 max-lg:py-10 bg-[#E9ECF4D9]">
        <div class="container">
            <h2 class="text-2xl font-bold">Your Business, But Smarter</h2>

            <div class="flex flex-col lg:gap-16 max-lg:gap-10">

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-xl font-bold mt-10">Know Your Business Better</h3>
                        <p class="mt-4">Success starts with understanding your business. Our advanced reporting tools give you real-time insights into in-store and online transactions, sales trends, and customer behavior with our centralized dashboard, helping you make informed decisions and refine your strategies. </p>               
                    </div>
                    <div class="flex max-lg:flex-col gap-7 mt-10">
                        <div class="lg:w-1/3 blue-box">
                            <h4>Live sales data & transaction tracking </h4>
                            <img src="/live-sales-data.webp" alt="">
                        </div>

                        <div class="lg:w-2/3 white-box">
                            <h4>Performance analytics for smarter decision-making </h4>
                            <img src="/performance-analytics.webp" alt="">
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-7 mt-7">
                        <div class="white-box">
                            <h4>Web & mobile dashboards for 24/7 access  </h4>
                            <img src="/web-and-mobile-dashboards.webp"alt="">
                        </div>

                        <div class="white-box">
                            <h4>Customer insights to improve service & loyalty </h4>
                            <img class="max-w-[400px]" src="/customer-insights.webp" alt="">
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-xl font-bold mt-10">Merchant Mobile App – Business in Your Hands </h3>
                        <p class="mt-4">Stay connected wherever you are. MontyPay’s Merchant Mobile App lets you manage transactions, track revenue, and access business tools on the go.</p>               
                    </div>
                    <div class="mt-7 flex gap-7 max-lg:flex-col">
                        <div class="flex flex-col gap-7">
                            <div class="white-box lg:h-1/2">
                                <h4>Monitor transactions in real time</h4>
                                <img src="/monitor-transaction-in-real-time.webp" />
                            </div>
                            <div class="white-box lg:h-1/2">
                                <h4>Generate & send invoices instantly</h4>
                                <img src="/generate-and-send-invoices.webp" alt="">
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center white-box">
                            <img src="/montypay-screenshot.webp" alt="">
                        </div>

                        <div class="flex flex-col gap-7">
                            <div class="white-box lg:h-1/2">
                                <div class="flex">
                                    <h4 class="lg:w-1/2">Accept payments via Pay by Link & QR codes </h4>
                                    <img class="lg:w-1/2 mt-0" src="/accept-payments-via-pay.webp" />     
                                </div>
                                
                            </div>
                            <div class="white-box lg:h-1/2">
                                <h4>Stay connected with customers & sales data </h4>
                                <img src="/stay-connected-with-customers.webp" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <Accordion :data="faq" title="All You Need to Know" /> 
    
    <BlueSection title="Ready to Transform Your Online Presence?" subtitle="Let’s bring your vision to life! Reach out to us today,
and let’s get started building your e-commerce platform with MontyPay. Your future customers are waiting." buttonText="Request a demo" buttonLink="/contact-us" image="/ready-to-transform.webp"/>
    <PaymentSolutions />
</template>

<script setup>
useSeoMeta({
    title: 'Omnichannel',
    ogTitle: 'Omnichannel',
    description: 'Omnichannel ',
    ogDescription: 'Omnichannel',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const faq = [
    {
        question: 'Can I customize the design of my online store?',
        answer: 'Absolutely. We build a website that reflects your brand’s personality and vision '
    },
    {
        question: 'How can I accept payments on my e-commerce store?',
        answer: 'QCheck supports 100+ payment methods, including card and wallet payments.'
    },
    {
        question: 'Is my checkout secure?',
        answer: 'QCheck ensures the highest level of security with PCI DSS compliance and encryption.'
    },
    {
        question: 'Can I integrate more than one language?',
        answer: 'Yes, it integrates seamlessly for uninterrupted operations.'
    },
    {
        question: 'Can I use multiple currencies?',
        answer: 'Absolutely! We provide complete onboarding and training support to ensure success.'
    },
    {
        question: 'How many payment options are supported?',
        answer: 'Absolutely! We provide complete onboarding and training support to ensure success.'
    }
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
</script>

<style lang="css" scoped>
   .white-box{
     @apply bg-white p-6 rounded-lg;
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
        @apply mx-auto mt-7;
   }

   .blue-box h4{
    @apply text-white;
   }



</style>