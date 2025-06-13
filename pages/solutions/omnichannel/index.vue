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
                                <div class="image-wrapper">
                                    <img src="/monitor-transaction-in-real-time.webp" />
                                </div>
                                
                            </div>
                            <div class="white-box lg:h-1/2">
                                <h4>Generate & send invoices instantly</h4>
                                <div class="image-wrapper">
                                    <img src="/generate-and-send-invoices.webp" alt="">
                                </div>
                                
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center white-box">
                            <img src="/montypay-screenshot.webp" alt="">
                        </div>

                        <div class="flex flex-col gap-7">
                            <div class="white-box">
                                <div class="flex max-lg:flex-col">
                                    <h4 class="lg:w-1/2">Accept payments via Pay by Link & QR codes </h4>
                                    <img class="lg:w-1/2 mt-0" src="/accept-payments-via-pay.webp" />     
                                </div>
                                
                            </div>
                            <div class="white-box">
                                <h4>Stay connected with customers & sales data </h4>
                                <div>
                                    <img class="" src="/stay-connected-with-customers.webp" alt="">
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-xl font-bold mt-10">Seamless Payment Options for Every Business</h3>
                        <p class="mt-4">Accept a variety of payment methods effortlessly, including: </p>               
                    </div>
                    <div class="mt-7">
                        <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full">
                                <h4>Credit & debit cards </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px] mx-auto" src="/credit-and-debit-cards.webp" alt="" />
                                </div>
                                
                            </div>
                            <div class="white-box w-full">
                                <h4>Digital wallets </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px] mx-auto" src="/digital-wallets.webp" alt="" />
                                </div>
                                
                            </div>
                        </div>

                        <div class="flex max-lg:flex-col gap-7 mt-7">
                            <div class="white-box w-full lg:w-2/3">
                                <h4>QR code payments & Pay by Link  for remote transactions </h4>
                                <div class="image-wrapper">
                                    <img src="/qr-code-payments.webp" alt="" />
                                </div>
                                
                            </div>
                            <div class="white-box w-full lg:w-1/3">
                                <h4>Multi-currency support for cross-border payments </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[350px] mx-auto" src="/multi-currency-support.webp" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-xl font-bold mt-10">Turn Any Device into a Payment Terminal </h3>
                        <p class="mt-4">With Soft POS technology, your smartphone or tablet becomes a fully functional payment terminal. Accept in-store payments instantly and give your customers more ways to pay with payment links, invoices, or QR codes, without any extra hardware.  </p>               
                    </div>
                    <div class="mt-7">
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
                        <h3 class="text-xl font-bold mt-10">Security You Can Trust</h3>
                        <p class="mt-4">MontyPay ensures every transaction is secure and compliant, so you can protect your business without the risks. </p>               
                    </div>
                    <div class="mt-7">
                       <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full">
                                <h4>PCI DSS Level 1 compliance </h4>
                                <div class="image-wrapper">
                                    <img class="max-w-[400px]" src="/shopping-card.webp" alt="">    
                                </div>
                            </div>
                            <div class="white-box w-full">
                                <h4>Intelligent routing for cost-efficient, high-acceptance transactions </h4>
                                <div class="image-wrapper">
                                    <img src="/intelligent-routing.webp" alt="">
                                </div>          
                            </div>
                       </div>
                       <div class="flex max-lg:flex-col gap-7 mt-7">
                            <div class="white-box w-full">
                                <h4>3D Secure 2.0 authentication for extra protection </h4>
                                <div class="image-wrapper">
                                    <img src="/3d-secure.webp" alt="">  
                                </div>
                                
                            </div>
                            <div class="white-box w-full">
                                <h4>Advanced fraud detection using AI & machine learning </h4>
                                <div class="image-wrapper">
                                    <img src="/advanced-fraud.webp" alt="">
                                </div>                     
                            </div>
                       </div>
                    </div>
                </div>
                
                
                <div>
                    <div class="max-w-[800px]">
                        <h3 class="text-xl font-bold mt-10">Works Everywhere You Do</h3>
                        <p class="mt-4">MontyPay integrates effortlessly with your existing POS systems, e-commerce platforms, and mobile applications, so you don’t have to change how you work. Just plug in and start optimizing. </p>               
                    </div>
                    <div class="mt-7">
                       <div class="flex max-lg:flex-col gap-7">
                            <div class="white-box w-full">
                                <h4>Connect to your existing systems hassle-free </h4>
                                <div class="image-wrapper">
                                    <img src="/connect-to-you-existing.webp" alt="">    
                                </div>
                            </div>
                            <div class="white-box w-full">
                                <h4>Expand globally with 100+ payment methods</h4>
                                <div class="image-wrapper">
                                    <img src="/expand-globally.webp" alt="">
                                </div>          
                            </div>
                            <div class="white-box w-full">
                                <h4>Automate processes & reduce manual work </h4>
                                <div class="image-wrapper">
                                    <img src="/automate-processes.webp" alt="">
                                </div>          
                            </div>
                       </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="bg-white lg:py-24 max-lg:py-10">
        <div class="container">
            <img src="/we-ensure-your-business.webp" class="w-full drop-shadow-2xl " alt="">
        </div>
    </section>



    <Accordion :data="faq" title="All You Need to Know" /> 
    
    <BlueSection title="Let’s make payments simple!" subtitle="Unify your payments, maximize efficiency, and deliver unforgettable customer experiences with MontyPay’s Omnichannel solution." buttonText="Request a demo" buttonLink="/contact-us" image="/many-phones.webp"/>
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
    }
];
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