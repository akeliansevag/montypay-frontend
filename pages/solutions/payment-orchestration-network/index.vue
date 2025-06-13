<template>
    <section class="relative max-lg:py-10 lg:py-24">


        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-5 lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-7 lg:mt-10">
                    <h1>
                        Payment Orchestration Network
                    </h1>
                    <p>
                        Bring all your payment methods, gateways, and currencies into one easy-to-manage platform. Whether you’re growing globally or streamlining locally, we’re here to help you handle payments like a pro, boost approvals, and keep things running smoothly. Goodbye to payment chaos!
                    </p>
                    <div class="mt-5">
                        <NuxtLink to="/contact-us" class="mp-button-quad">Request a demo</NuxtLink>
                    </div>
                    
                </div>
                <div class="lg:w-[50%] flex justify-end">
                    <img src="/payment-orchestration-network-banner.webp" alt="Omnichannel Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <section class="relative lg:py-16 max-lg:py-16 bg-[#0E153A]">
        <img src="/blue-shape-bg.webp" class="absolute z-0 top-0 left-0 w-full h-full object-cover" alt="blue-bg"/>
        <div class="container">
            <div class="max-w-[800px]">
                <h2 class="text-white text-2xl font-bold">Go Global Without the Growing Pains</h2>
                <p class="text-white mt-7">Expanding your business should be exciting, not exhausting. MontyPay’s Payment
        Orchestration Network takes the complexity out of global payments, helping you scale
        seamlessly, onboard merchants anywhere, and process cross-border transactions like a pro.</p>   
            </div>

            <div class="flex max-lg:flex-col gap-7 lg:mt-10 max-lg:mt-7">
                <div class="bg-white p-4 rounded-xl flex flex-col justify-between w-full">
                    <div>
                        <h4 class="text-xl font-bold mt-4">Smarter Payments, Higher Profits</h4>
                        <p class="mt-4">Boost your acceptance rates and lower transaction costs with intelligent payment
orchestration. By dynamically routing transactions across multiple payment
methods and providers in 50+ countries, we optimize every payment for maximum
efficiency and profitability.</p>
                    </div>
                    
                    <div class="bg-[#E6EEF5] rounded-2xl max-lg:h-[200px] lg:h-[300px] p-5 flex items-center justify-center mt-7">
                        <img class="w-full h-full object-contain" src="/smarter-payments.webp"  />
                    </div>
                    
                </div>

                <div class="bg-white p-4 rounded-xl flex flex-col justify-between w-full">
                    <div>
                        <h4 class="text-xl font-bold mt-4">Think Global, Transact Local</h4>
                        <p class="mt-4">Reduce fees and increase approval rates by routing transactions through MontyPay’s network of local acquirers, ensuring a smooth and compliant payment experience.</p>
                    </div>
                    
                    <div class="bg-[#E6EEF5] rounded-2xl max-lg:h-[200px] lg:h-[300px] p-5 flex items-center justify-center mt-7">
                        <img class="w-full h-full object-contain" src="/think-global.webp"  />
                    </div>
                    
                </div>

                <div class="bg-white p-4 rounded-xl flex flex-col justify-between w-full">
                    <div>
                        <h4 class="text-xl font-bold mt-4">Payments in Every Language</h4>
                        <p class="mt-4">With 100+ payment methods, multi-currency support, and region-specific solutions, your business is ready for any market, anywhere. You can cater to diverse customer preferences while optimizing operational efficiency.</p>
                    </div>
                    
                    <div class="bg-[#E6EEF5] rounded-2xl max-lg:h-[200px] lg:h-[300px] p-5 flex items-center justify-center mt-7">
                        <img class="w-full h-full object-contain" src="/payments-in-every-language.webp"  />
                    </div>
                    
                </div>
            </div>

            <div class="mt-7">
                <div class="bg-white p-4 rounded-xl flex max-lg:flex-col items-center justify-between w-full gap-10">
                    <div class="w-full">
                        <img class="w-full h-full object-contain" src="/wherever-you-do-business.webp"  />
                    </div>
                    <div class="w-full">
                        <p>Wherever you do business, <strong>frictionless expansion, optimized payments,</strong> and a <strong>seamless merchant experience</strong> are at hand’s reach.</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    </section>


    <PinnedSection />
    
    
    <BlueSection title="Optimize Your Entire Payment Ecosystem Today" subtitle="Let MontyPay’s Payment Orchestration Network do the heavy lifting. Manage, optimize, and grow, all from one platform designed to make your life simpler." buttonText="Request a demo" buttonLink="/contact-us" image="/optimize-your-entire-payment.webp"/>
    <PaymentSolutions />
    <Accordion :data="faq" title="All You Need to Know" /> 
</template>

<script setup>
useSeoMeta({
    title: 'Payment Orchestration Network',
    ogTitle: 'Payment Orchestration Network',
    description: 'Payment Orchestration Network ',
    ogDescription: 'Payment Orchestration Network',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const faq = [
    {
        question: 'What is payment orchestration?',
        answer: 'It’s a way to simplify and optimize your payments. MontyPay’s Payment Orchestration Network manages and processes payments across multiple gateways, currencies, and methods from one place.'
    },
    {
        question: 'How does MontyPay improve payment success rates?',
        answer: 'Our intelligent routing picks the best-performing gateway for every transaction, ensuring more approvals and fewer declines.'
    },
    {
        question: 'What payment methods and currencies are supported?',
        answer: 'We’ve got over 100 options for you, including cards, wallets, and multi-currency support.'
    },
    {
        question: 'How does the solution help prevent fraud?',
        answer: 'Our platform includes advanced fraud detection tools, ensuring transactions are secure and risks are minimized.'
    },
    {
        question: 'How do I get started?',
        answer: 'It’s easy! Just reach out to our team, and we’ll guide you through the onboarding process step by step.'
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