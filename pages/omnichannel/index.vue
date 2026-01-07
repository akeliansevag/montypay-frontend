<template>
    <section class="relative max-lg:py-10 lg:py-20">

        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 end-0 top-0" />

        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">Omnichannel Payments</h1>
                    <p class="text-xl">Bring all your online, in-store, and mobile transactions into one seamless platform. Withreal-time insights, advanced reporting, and effortless management, you’ll deliver consistent, exceptional customer experiences while bringing your sales channels to their full potential.</p>
                    <div class="">
                        <NuxtLink to="/contact-us" class="inline-block mp-button-quaternary">Request a Demo</NuxtLink>
                    </div>
                </div>
                <div class="lg:w-[50%]">
                    <img class="w-full" src="/omnichannel-banner.webp" alt="Omnichannel Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <PaddingWhiteSlider :data="sliderFour" title="Why MontyPay’s Omnichannel Is Your Go-to Solution" />
    
    <section class="lg:py-16 max-lg:py-10 bg-[#E9ECF4D9]">
        <div class="container">
            <h2 class="text-3xl font-bold">Your Business, But Smarter</h2>

            <div class="flex flex-col lg:gap-16 max-lg:gap-10">

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-2xl font-bold mt-10">Know Your Business Better</h3>
                        <p class="text-xl mt-4">Success starts with understanding your business. Our advanced reporting tools give you real-time insights into in-store and online transactions, sales trends, and customer behavior with our centralized dashboard, helping you make informed decisions and refine your strategies. </p>               
                    </div>
                    <div class="flex max-lg:flex-col gap-7 mt-12">
                        <div class="lg:w-1/3 blue-box">
                            <h4 class="text-2xl">Live sales data & transaction tracking </h4>
                            <img src="/live-sales-data.webp" alt="">
                        </div>

                        <div class="lg:w-2/3 white-box">
                            <h4 class="text-2xl">Performance analytics for smarter decision-making </h4>
                            <img class="w-4/5" src="/performance-analytics.webp" alt="">
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-7 mt-7">
                        <div class="lg:w-2/3 white-box">
                            <h4 class="text-2xl">Web & mobile dashboards for 24/7 access  </h4>
                            <img class="w-2/3" src="/web-and-mobile-dashboards.webp"alt="">
                        </div>

                        <div class="lg:w-1/3 white-box">
                            <h4 class="text-2xl">Customer insights to improve service & loyalty </h4>
                            <img class="w-2/3 mt-16" src="/customer-insights.webp" alt="">
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-2xl font-bold mt-10">Merchant Mobile App – Business in Your Hands </h3>
                        <p class="text-xl mt-4">Stay connected wherever you are. MontyPay’s Merchant Mobile App lets you manage transactions, track revenue, and access business tools on the go.</p>               
                    </div>
                    <div class="mt-12 flex gap-7 max-lg:flex-col">
                        <div class="flex flex-col gap-7">
                            <div class="white-box lg:h-1/2">
                                <h4 class="text-2xl">Monitor transactions in real time</h4>
                                <div class="image-wrapper">
                                    <img src="/monitor-transaction-in-real-time.webp" />
                                </div>
                                
                            </div>
                            <div class="white-box lg:h-1/2">
                                <h4 class="text-2xl">Generate & send invoices instantly</h4>
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
                                    <h4 class="text-2xl lg:w-1/2">Accept payments via Pay by Link & QR codes </h4>
                                    <img class="lg:w-1/2 mt-0" src="/accept-payments-via-pay.webp" />     
                                </div>
                            </div>
                            <div class="white-box lg:h-full">
                                <h4 class="text-2xl">Stay connected with customers & sales data </h4>
                                <div>
                                    <img class="max-w-[300px] mx-auto" src="/stay-connected-with-customers.webp" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-3xl font-bold mt-10">Seamless Payment Options for Every Business</h3>
                        <p class="text-xl mt-4">Accept a variety of payment methods effortlessly, including: </p>               
                    </div>
                    <div class="mt-12">
                        <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full">
                                <h4 class="text-2xl">Credit & debit cards </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px] mx-auto" src="/credit-and-debit-cards.webp" alt="" />
                                </div>
                            </div>
                            <div class="white-box w-full">
                                <h4 class="text-2xl">Digital wallets </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px] mx-auto" src="/digital-wallets.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="flex max-lg:flex-col gap-7 mt-7">
                            <div class="white-box w-full lg:w-2/3">
                                <h4 class="text-2xl">QR code payments & Pay by Link  for remote transactions </h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/qr-code-payments.webp" alt="" />
                                </div>
                                
                            </div>
                            <div class="white-box w-full lg:w-1/3">
                                <h4 class="text-2xl">Multi-currency support for cross-border payments </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[350px] mx-auto" src="/multi-currency-support.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-3xl font-bold mt-10">Turn Any Device into a Payment Terminal </h3>
                        <p class="text-xl mt-4">With Soft POS technology, your smartphone or tablet becomes a fully functional payment terminal. Accept in-store payments instantly and give your customers more ways to pay with payment links, invoices, or QR codes, without any extra hardware.  </p>               
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
                        <h3 class="text-3xl font-bold mt-10">Security You Can Trust</h3>
                        <p class="text-xl mt-4">MontyPay ensures every transaction is secure and compliant, so you can protect your business without the risks. </p>               
                    </div>
                    <div class="mt-12">
                       <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full">
                                <h4 class="text-2xl">PCI DSS Level 1 compliance </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px]" src="/shopping-card.webp" alt="">    
                                </div>
                            </div>
                            <div class="white-box w-full">
                                <h4 class="text-2xl">Intelligent routing for cost-efficient, high-acceptance transactions </h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/intelligent-routing.webp" alt="">
                                </div>          
                            </div>
                       </div>
                       <div class="flex max-lg:flex-col gap-7 mt-7">
                            <div class="white-box w-full">
                                <h4 class="text-2xl">3D Secure 2.0 authentication for extra protection </h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/3d-secure.webp" alt="">  
                                </div>
                                
                            </div>
                            <div class="white-box w-full">
                                <h4 class="text-2xl">Advanced fraud detection using AI & machine learning </h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/advanced-fraud.webp" alt="">
                                </div>                     
                            </div>
                       </div>
                    </div>
                </div>
                
                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-3xl font-bold mt-10">Works Everywhere You Do</h3>
                        <p class="text-xl mt-4">MontyPay integrates effortlessly with your existing POS systems, e-commerce platforms, and mobile applications, so you don’t have to change how you work. Just plug in and start optimizing. </p>               
                    </div>
                    <div class="mt-12">
                       <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full pb-14">
                                <h4 class="text-2xl">Connect to your existing systems hassle-free </h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/connect-to-you-existing.webp" alt="">    
                                </div>
                            </div>
                            <div class="white-box w-full pb-14">
                                <h4 class="text-2xl">Expand globally with 100+ payment methods</h4>
                                <div class="image-wrapper">
                                    <img class="lg:w-4/5" src="/expand-globally.webp" alt="">
                                </div>          
                            </div>
                            <div class="white-box w-full pb-14">
                                <h4 class="text-2xl">Automate processes & reduce manual work </h4>
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

    <Accordion :data="faq" title="All You Need to Know" /> 
    
    <BlueSection title="Let’s make payments simple!" subtitle="Unify your payments, maximize efficiency, and deliver unforgettable customer experiences with MontyPay’s Omnichannel solution." buttonText="Request a Demo" buttonLink="/contact-us" image="/many-phones.webp"/>
   
   <PaymentSolutions />
</template>

<script setup>
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
        question: 'What is an omnichannel payment solution?',
        answer: 'Think of it as your one-stop shop for all payments! With MontyPay, you can manage every transaction in real time, track your sales, and get powerful insights, all from one platform.'
    },
    {
        question: 'How does MontyPay unify in-store and online payments? ',
        answer: 'We make it simple by connecting your sales channels through one seamless platform, keeping everything running smoothly and giving you full control.'
    },
    {
        question: 'Can MontyPay integrate with my existing POS or e-commerce platform?',
        answer: 'Can MontyPay integrate with my existing POS or e-commerce platform? Absolutely! MontyPay offers a wide range of connectors compatible with major POS systems and e-commerce platforms for effortless integration.'
    },
    {
        question: 'What payment methods and currencies are supported?',
        answer: 'We’ve got you covered with 100+ payment options, including cards, digital wallets, QR payments, or anything in between, as well as multi-currency support for global transactions.'
    },
    {
        question: 'How do I access centralized reporting and analytics?',
        answer: 'All the insights you need are right there! You can easily view real-time data and insights through our user-friendly app or dashboard, designed to make business management simple.'
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
    },
    {
        title: 'Always Stay in the Loop',
        description: 'Never miss an important update. Get real-time alerts on transactions, approvals, chargebacks, and fraud warnings, to better manage operations, respond quickly, and always stay one step ahead. ',
        image: '/always-stay-in-the-loop.webp',
    },
    {
        title: 'Build Real Loyalty',
        description: 'Reward your customers with our integrated loyalty program, turning one-time shoppers into repeat customers.',
        image: '/build-real-loyalty.webp',
    },
    {
        title: 'Access Financial Support',
        description: 'When you find yourself in need of a boost, our lending services help your business grow and thrive with the extra support it deserves.<br />Tailored credit scoring for financing eligibility and Custom lending programs to scale your business',
        image: '/access-financial-support.webp',
    },
    {
        title: 'Always Here When You Need Us',
        description: 'You\'re never alone, our expert support team is available 24/7 via live chat on the app, dashboard, or website for instant help and technical guidance.',
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