<template>
   <section class="relative max-lg:py-10 lg:py-20">
        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 right-0 top-0" />

        <div class="ml-container-align">
            <div class="flex max-lg:flex-col max-lg:gap-8 items-center lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-6 lg:gap-12">
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">Online Payment Solutions</h1>
                    <p class="text-xl">Get paid easily, whether online or in person, and reach customers worldwide. MontyPay makes payments smooth, secure, and hassle-free, so you can focus on growing your business, big or small.</p>
                    <div class="">
                        <NuxtLink to="/contact-us" class="inline-block mp-button-quaternary">Request a Demo</NuxtLink>
                    </div>
                </div>
                <div class="lg:w-[50%]">
                    <img src="/accept-payments-anywhere-banner.webp" alt="QCheck Banner Image" />
                </div>
            </div>
        </div>
    </section>

    <PaddingWhiteSlider :data="sliderFour" title="More Than Payments. Real Business Growth. " />

    <section class="relative max-lg:py-10 lg:py-24 bg-[#E9ECF4D9]">
        <div class="container">
            <h2 class="text-3xl font-bold">Powerful Features for a Powerful Business</h2>
        
            <div class="mt-12">
                <!-- Top horizontal layout -->
                <Card
                    layout="horizontal"
                    image="/online-and-mobile-checkouts.webp"
                    title="Online and Mobile Checkouts"
                    description="Offer seamless, secure checkouts across your website and mobile apps. Let customers complete transactions effortlessly with multiple payment methods, keeping them coming back for more."
                />

                <!-- Bottom grid layout with vertical cards -->
                <div class="grid lg:grid-cols-2 gap-6 mt-6">
                    <Card
                        image="/images/customizable-checkout-options.webp"
                        title="Customizable Checkout Options"
                        description="Make every checkout feel like your checkout. Add your branding and create a payment experience that reflects your business and improves conversions."
                    />
                    <Card
                        image="/images/pay-by-link.webp"
                        title="Pay by Link"
                        description="Even if you don’t have a website, you can generate secure payment links and share them with your customers through email, SMS, or messaging apps. One click and they’re ready to pay. Fast, easy, and secure."
                    />
                    <Card
                        image="/images/qr-pay.webp"
                        title="QR Pay"
                        description="Tap, scan, done! Make payments as easy as a scan. Customers simply scan a QR code at checkout to pay instantly, no need for cash or cards. It’s fast, contactless, and super convenient."
                    />
                    <Card
                        image="/images/customer-invoice-links.webp"
                        title="Customer Invoice Links"
                        description="Send invoices that do the hard work for you. Professional, branded and easy to pay, they make settling bills quick and secure for you and your customers, and help you keep things moving."
                    />
                    <Card
                        image="/images/recurring-billing.webp"
                        title="Recurring Billing"
                        description="No more missing payments. Automate payments for subscriptions, memberships, or installment plans. Keep cash flow steady and ensure your customers never miss a payment."
                    />
                    <Card
                        image="/images/installements.webp"
                        title="Installments"
                        description="Make big buys easier! Let your customers split payments over time with flexible installment options, so they can shop worry-free, and you can boost high-value sales."
                    />
                    <Card
                        image="/images/smart-routing-and-cascading.webp"
                        title="Smart Routing & Cascading"
                        description="Fast payments, fewer fees. Our smart routing tech chooses the fastest most reliable path for every transaction, saving you time and money while keeping things running smoothly."
                    />
                    <Card
                        image="/images/crypto-payments.webp"
                        title="Crypto Payments"
                        description="Bitcoin? Ethereum? You name it! Give your customers cool new ways to pay while keeping it fast, secure, and open to a whole new global audience."
                    />
                </div>
            </div>
        </div>
    </section>

    <section class="relative max-lg:py-10 lg:py-24">
        <div class="container">
            <h2 class="text-3xl font-bold">Fast Integration and Onboarding</h2>
            <p class="lg:w-2/3 mt-6 text-xl">Get started in no time! Our onboarding process ensures you’re up and running immediately. Focus on growing your business while we handle the heavy lifting behind the scenes.</p>
            <h3 class="text-xl font-bold mt-6">Plugins & SDKs</h3>

            <div class="flex flex-col lg:flex-row gap-6 mt-12">
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <img class="flex-shrink-0" src="/images/mobile-ready-checkout.svg" alt="Mobile-Ready Checkout" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">Mobile-Ready Checkout</h3>
                    <p class="text-xl">Say goodbye to abandoned carts! <br /> Our mobile-ready checkout guarantees a seamless payment process, ensuring customers breeze through their purchases and boosting your conversion rates!</p>
                </div>
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <img class="flex-shrink-0" src="/images/host-to-host-integration.svg" alt="Host to Host Integration" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">Host 2 Host Integration</h3>
                    <p class="text-xl">Make it your own! <br /> With MontyPay's Host-2-Host integration, merchants can now accept payment information on their personalized payment pages. Tailor your payment experience to match your brand, strengthening the trust with your customers!</p>
                </div>
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <img class="flex-shrink-0" src="/images/social-commerce.svg" alt="Social Commerce" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">Social Commerce</h3>
                    <p class="text-xl">MontyPay is not only a secure financial haven but also a thriving marketplace for freelancers and social media enthusiasts. We empower freelancers to receive payments seamlessly through our platform, enhancing convenience and ensuring that the hard work translates into tangible rewards.</p>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl mt-6">
                <div class="flex flex-col gap-6 lg:w-3/5">
                    <img class="flex-shrink-0" src="/images/cms-plugins.svg" alt="CMS Plugins" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">CMS Plugins</h3>
                    <p class="lg:w-1/2 text-xl">MaNo fuss, just solutions! <br /> Our ready-to-go plugins for popular Content Management Systems (CMS) streamline integration for merchants. Skip the heavy development work and get your payment system up and running with ease.</p>
                </div>
                
                <div class="lg:w-2/5 grid grid-cols-3 place-items-center gap-4 lg:gap-8">
                    <img src="/images/magento2.svg" alt="Magento 2" width="139" height="139" />
                    <img src="/images/prestashop.svg" alt="Prestashop" width="139" height="139" />
                    <img src="/images/highlevel.svg" alt="Highlevel" width="139" height="139" />
                    <img src="/images/woocommerce.svg" alt="Woo Commerce" width="139" height="139" />
                    <img src="/images/opencart.svg" alt="Opencart" width="139" height="139" />
                    <img src="/images/easy-digital-downloads.svg" alt="Easy Digital Downloads" width="139" height="139" />
                    <img src="/images/nopcommerce.svg" alt="NopCommerce" width="139" height="139" />
                    <img src="/images/shopify.svg" alt="Shopify" width="139" height="139" />
                    <img src="/images/ecwid.svg" alt="ECWID" width="139" height="139" />
                </div>

            </div>

            <div class="flex flex-col lg:flex-row gap-6 mt-6">
                <div class="lg:w-1/2 flex flex-col justify-between gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <div class="flex flex-col gap-6">
                        <img class="flex-shrink-0" src="/images/mobile-sdk.svg" alt="Mobile-Ready Checkout" width="121" height="121" />
                        <h3 class="text-2xl font-semibold">Mobile-Ready Checkout</h3>
                        <p class="text-xl">Say goodbye to abandoned carts! <br /> Our mobile-ready checkout guarantees a seamless payment process, ensuring customers breeze through their purchases and boosting your conversion rates!</p>
                    </div>
                    <div class="grid grid-cols-3 place-items-center gap-2 lg:gap-4 mt-6">
                        <img src="/images/flutter.svg" alt="flutter" width="210" height="90" />
                        <img src="/images/android.svg" alt="Android" width="210" height="90" />
                        <img src="/images/ios.svg" alt="IOS" width="210" height="90" />
                    </div>
                </div>
                <div class="lg:w-1/2 flex flex-col justify-between gap-6 p-4 max-lg:pb-12 lg:p-8 bg-[#E9ECF4D9] rounded-xl">
                    <div class="flex flex-col gap-6">
                        <img class="flex-shrink-0" src="/images/platform-integration.svg" alt="Platform Integration" width="121" height="121" />
                        <h3 class="text-2xl font-semibold">Platform Integration</h3>
                        <p class="text-xl">Our integrations with cutting-edge platforms for loyalty programs, hotel bookings, marks just the beginning of a robust ecosystem, with many exciting partnerships on the horizon.</p>
                    </div>
                    <div class="grid grid-cols-4 place-items-center gap-2 mt-6">
                        <img src="/images/igloorooms.svg" alt="IglooRooms" width="210" height="90" />
                        <img src="/images/kangaroo.svg" alt="Kangaroo" width="210" height="90" />
                        <img src="/images/quickseat.svg" alt="QuickSeat" width="210" height="90" />
                        <img src="/images/suppy.svg" alt="Suppy" width="210" height="90" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <MerchantMobileApp />

    <section class="max-lg:py-10 lg:py-24 bg-white">
        <div class="container">
            <div class="text-center">
                <h2 class="text-3xl font-bold">Omnichannel Reporting and Analytics</h2>
                <h3 class="text-xl font-bold mt-6">Your business at a glance</h3>
                <p class="lg:w-2/3 mt-6 text-xl mx-auto">Manage your business effortlessly with real-time insights across online and in-store sales. Access a unified dashboard or mobile app to track trends, transactions, and customer behavior for smarter, faster decisions.</p>
            </div>
            <div class="flex max-lg:flex-col gap-7 lg:mt-24 max-lg:mt-10">
                <div class="w-full bg-[#E9ECF4D9] lg:min-h-[360px] rounded-md p-8 items-center justify-center flex">
                    <div class="flex flex-col gap-10">
                        <img class="mx-auto max-w-[400px] drop-shadow-xl w-full" src="/omnichannel-solution.webp" alt="Omnichannel Solution">
                        <h3 class="text-2xl text-center font-bold">Omnichannel Solution</h3>
                    </div>
                </div>
                <div class="w-full bg-[#E9ECF4D9] lg:min-h-[360px] rounded-md p-8 items-center justify-center flex">
                    <div class="flex flex-col gap-10">
                        <img class="mx-auto max-w-[400px] w-full" src="/unified-solution2.webp" alt="Unified Solution">
                        <h3 class="text-2xl text-center font-bold">Unified Solution</h3>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="max-lg:pb-10 lg:pb-24 bg-white relative overflow-hidden">
        <img src="/shape-bg.svg" alt="Shapte" class="absolute top-0 lg:-right-[200px] max-lg:hidden" />
        <div class="container">
            <div class="flex max-lg:flex-col gap-6">
                <div class="w-full">
                    <h2 class="text-3xl font-bold">Unified Solution for In-Store & Online Sales </h2>
                    <p class="mt-6 text-xl">Get the power of our Smart POS together with our payment gateway for an all-in-one solution that streamlines your business. </p>

                    <div class="flex flex-col gap-7 mt-7">
                        <div class="flex max-lg:flex-col gap-5 p-4 lg:p-8 bg-white rounded-xl border border-[#D9D9D980] drop-shadow-sm" v-for="(solution,inx) in solutions" :key="inx">
                            <div>
                                <img :src="solution.icon" :alt="solution.title"/>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold leading-none mb-2">{{ solution.title }}</h4>
                                <p>{{ solution.description }}</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-xl font-normal mt-10">A perfect pairing for growing businesses that want simplicity and efficiency across all sales channels. </p>
                </div>
                <div class="w-full">
                    <img class="w-full" src="/unified-solution-for.webp" alt="Unified Solution">
                </div>
            </div>
        </div>
    </section>

    <section class="lg:py-24 max-lg:py-10 bg-[#0F0C22] relative text-white">
        <img src="/blue-bg-2.webp" alt="BG" class="top-0 left-0 w-full h-full absolute object-cover">
        <div class="container">
            <h2 class="text-3xl font-bold">More Perks or We Back You Up </h2>
            <div class="mt-10 flex max-lg:flex-col gap-7 max-lg:gap-10">
                <div v-for="(perk,ind) in perks" :key="ind">
                    <img :src="perk.icon" :alt="perk.title"/>
                    <h3 class="text-xl font-bold mt-4">{{ perk.title }}</h3>
                    <p class="mt-4">{{ perk.description }}</p>
                </div>
            </div>
        </div>
    </section>

    <Accordion :data="faq" title="All You Need to Know" /> 
    
    <BlueSection title="Let’s Grow Your Business Together " subtitle="MontyPay is here to provide a seamless, secure, and global solution tailored to your needs. Whether you're a startup or an enterprise, we’ve got the tools to help you succeed. Contact us now and grow your business with MontyPay." buttonText="Request a Demo" buttonLink="/contact-us" image="/lets-grow-your-business-together.webp"/>

    <PaymentSolutions />

</template>

<script setup>

    useSeoMeta({
        title: 'Online Payment Solutions | Global Payment Processing',
        ogTitle: 'Online Payment Solutions | Global Payment Processing',
        description: 'Accept online payments with MontyPay’s secure gateway. Support cards, wallets, and local payment methods across global markets.',
        ogDescription: 'Accept online payments with MontyPay’s secure gateway. Support cards, wallets, and local payment methods across global markets.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const perks = [
        {
            icon: '/risk-management.svg',
            title: 'Risk Management and Fraud Prevention',
            description: 'We’ve got you covered with PCI DSS Level 1 compliance and advanced fraud detection tools. Minimize risks like chargebacks and fraud, so you can focus on running your business with peace of mind.'
        },
        {
            icon: '/dedicated-support.svg',
            title: 'Dedicated Support',
            description: 'You’re never alone. Our 24/7 technical support is here to guide you every step of the way. Chat with our support team for instant help while you surf through your dashboard. '
        },
        {
            icon: '/loyalty-and-lending.svg',
            title: 'Loyalty and Lending Services',
            description: 'Reward your business with every transaction. Our point-based loyalty program lets you earn rewards for online and in-store payments, enjoy cashback offers, and even build a credit score for potential loans.'
        },
    ]

    const solutions = [
        {
            icon: '/seamless-sales.svg',
            title: 'Seamless Sales',
            description: 'Accept payments online and offline, covering all customer touchpoints.'
        },
        {
            icon: '/unified-dashboard.svg',
            title: 'Unified Dashboard',
            description: 'Monitor and manage your sales, transactions, and customer data from one place.'
        },
        {
            icon: '/effortless-cross-channel.svg',
            title: 'Effortless Cross-Channel Management',
            description: 'Stay in control with real-time insights into your online and offline performance.'
        },
    ]

    const sliderFour = [
        {
            title: 'Fast, Smooth Transactions',
            description: 'Process payments in record time so your customers stay happy, and your cash flow keeps moving. ',
            image: '/fast-smooth-transaction.webp',
        },
        {
            title: 'Advanced Security You Can Trust.',
            description: 'Protect every transaction with PCI DSS Level 1 v4 compliance and cutting-edge fraud detection to keep your business and customers safe.',
            image: '/advanced-security-you-can-trust.webp',
        },
        {
            title: '100+ Payment Methods, Multiple Currencies',
            description: 'Let your customers pay their way, whatever the currency, while you expand globally without the hassle.',
            image: '/100-payment-methods-mutliple-currencies.webp',
        },
        {
            title: 'Build Trust, Boost Satisfaction',
            description: 'Offer a reliable, seamless payment experience that keeps your customers coming back.',
            image: '/build-trust-boost-satisfaction.webp',
        },
        {
            title: 'Powerful Insights, Smarter Decisions',
            description: 'Track and analyze your performance with advanced reporting tools, helping you grow confidently.',
            image: '/powerful-insights-smarter-decisions.webp',
        }
    ];

    const faq = [
        {
            question: 'What payment methods does MontyPay support?',
            answer: 'MontyPay supports 100+ payment methods, including major credit cards, digital wallets, and local payment options, ensuring flexibility for you and your customers.'
        },
        {
            question: 'Is MontyPay secure for online transactions?',
            answer: 'Absolutely! MontyPay is PCI DSS Level 1 v4 compliant and equipped with advanced fraud detection to ensure the highest level of security.'
        },
        {
            question: 'Can MontyPay integrate with my existing website or e-commerce platform?',
            answer: 'Yes, integration is simple with our multiple plugins designed for popular CMS platforms. Check out our <a href="/documentation" class="underline">CMS plugins page</a> for more details.'
        },
        {
            question: 'How long does it take to process payments?',
            answer: 'Payments are processed instantly for a seamless customer experience.'
        },
        {
            question: 'Does MontyPay support multi-currency payments?',
            answer: 'Yes, MontyPay accepts payments in multiple currencies, including crypto, allowing you to expand your business globally without limits.'
        },
        {
            question: 'What kind of analytics and reporting does MontyPay offer?',
            answer: 'MontyPay provides real-time reporting and insights through a unified dashboard, helping you track transactions, sales trends, and customer behavior with ease.'
        },
        {
            question: 'Can MontyPay handle recurring payments or subscriptions?',
            answer: 'Yes, MontyPay supports automated recurring billing, perfect for subscription services or installment plans.'
        },
        {
            question: 'Does MontyPay offer solutions for in-store payments?',
            answer: 'Absolutely! Our omnichannel solution ensures a seamless experience across both online and in-store sales.'
        },
        {
            question: 'How do I get started with MontyPay?',
            answer: 'Getting started is quick and easy with our streamlined onboarding process. You’ll be up and running in no time, contact us to begin!'
        }
    ]

    const cards = [
        {
            title: 'Mobile-Ready Checkout',
            description:
            'Say goodbye to abandoned carts! Our mobile-ready checkout guarantees a seamless payment process, ensuring customers breeze through their purchases and boosting your conversion rates!',
            icon: '/icons/mobile-checkout.png',
            images: [],
            layout: 'vertical'
        },
        {
            title: 'Host-2-Host Integration',
            description:
            'Make it your own! With MontyPay’s Host-2-Host integration, merchants can now accept payment information on their personalized payment pages.',
            icon: '/icons/host-to-host.png',
            images: [],
            layout: 'vertical'
        },
        {
            title: 'Social Commerce',
            description:
            'MontyPay is not only a secure financial haven but also a thriving marketplace for freelancers and social media enthusiasts.',
            icon: '/icons/social-commerce.png',
            images: [],
            layout: 'vertical'
        },
        {
            title: 'CMS Plugins',
            description:
            'No fuss, just solutions! Our ready-to-go plugins for popular CMS streamline integration for merchants.',
            icon: '/icons/cms.png',
            images: [
                '/logos/magento1.png',
                '/logos/magento2.png',
                '/logos/prestashop.png'
            ],
            layout: 'horizontal'
        },
        {
            title: 'Mobile SDK',
            description:
            'Our iOS and Android SDKs give merchants the power to accept payments within their mobile applications.',
            icon: '/icons/sdk.png',
            images: [
                '/logos/flutter.png', 
                '/logos/android.png', 
                '/logos/ios.png'
            ],
            layout: 'vertical'
        },
        {
            title: 'Platform Integration',
            description:
            'Our integrations with cutting-edge platforms mark the beginning of a robust ecosystem.',
            icon: '/icons/integration.png',
            images: [
                '/logos/igloo.png', 
                '/logos/kangaroo.png'
            ],
            layout: 'vertical'
        }
    ]

</script>