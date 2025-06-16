<template>
   <section class="relative max-lg:py-10 lg:py-24">
        <img src="/pattern.svg" alt="pattern" class="max-lg:hidden absolute -z-10 right-0 top-0" />

        <div class="ml-container-align">
            <div class="flex max-lg:flex-col max-lg:gap-5 lg:justify-between">
                <div class="lg:w-[40%] flex flex-col gap-7 lg:mt-10">
                    <h1>Accept Payments Anywhere</h1>
                    <p>Get paid easily, whether online or in person, and reach customers worldwide. MontyPay makes payments smooth, secure, and hassle-free, so you can focus on growing your business, big or small.</p>
                    <div class="mt-5">
                        <NuxtLink to="/contact-us" class="mp-button-quad">Request a demo</NuxtLink>
                    </div>
                </div>
                <div class="lg:w-[50%] flex justify-end">
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
            <p class="lg:w-1/2 mt-6">Get started in no time! Our onboarding process ensures you’re up and running immediately. Focus on growing your business while we handle the heavy lifting behind the scenes.</p>
            <h3 class="text-xl font-bold mt-6">Plugins & SDKs</h3>

            <div class="flex flex-col lg:flex-row gap-6 mt-6">
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 bg-[#E9ECF4D9] rounded-xl pb-12">
                    <img class="flex-shrink-0" src="/images/mobile-ready-checkout.svg" alt="Mobile-Ready Checkout" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">Mobile-Ready Checkout</h3>
                    <p class="text-xl">Say goodbye to abandoned carts! <br /> Our mobile-ready checkout guarantees a seamless payment process, ensuring customers breeze through their purchases and boosting your conversion rates!</p>
                </div>
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 bg-[#E9ECF4D9] rounded-xl pb-12">
                    <img class="flex-shrink-0" src="/images/host-to-host-integration.svg" alt="Host to Host Integration" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">Host 2 Host Integration</h3>
                    <p class="text-xl">Make it your own! <br /> With MontyPay's Host-2-Host integration, merchants can now accept payment information on their personalized payment pages. Tailor your payment experience to match your brand, strengthening the trust with your customers!</p>
                </div>
                <div class="lg:w-1/3 flex flex-col gap-6 p-4 bg-[#E9ECF4D9] rounded-xl pb-12">
                    <img class="flex-shrink-0" src="/images/social-commerce.svg" alt="Social Commerce" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">Social Commerce</h3>
                    <p class="text-xl">MontyPay is not only a secure financial haven but also a thriving marketplace for freelancers and social media enthusiasts. We empower freelancers to receive payments seamlessly through our platform, enhancing convenience and ensuring that the hard work translates into tangible rewards.</p>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-6 p-12 bg-[#E9ECF4D9] rounded-xl mt-6">
                <div class="flex flex-col gap-6 lg:w-3/5">
                    <img class="flex-shrink-0" src="/images/host-to-host-integration.svg" alt="Host to Host Integration" width="121" height="121" />
                    <h3 class="text-2xl font-semibold">CMS Plugins</h3>
                    <p class="lg:w-1/2 text-xl">MaNo fuss, just solutions! <br /> Our ready-to-go plugins for popular Content Management Systems (CMS) streamline integration for merchants. Skip the heavy development work and get your payment system up and running with ease.</p>
                </div>
                
                <div class="lg:w-2/5 grid grid-cols-3 place-items-center gap-4 lg:gap-8">
                    <img src="/images/magento1.svg" alt="Magento 1.9" width="139" height="139">
                    <img src="/images/magento2.svg" alt="Magento 2" width="139" height="139">
                    <img src="/images/prestashop.svg" alt="Prestashop" width="139" height="139">
                    <img src="/images/woocommerce.svg" alt="Woo Commerce" width="139" height="139">
                    <img src="/images/opencart.svg" alt="Opencart" width="139" height="139">
                    <img src="/images/easy-digital-downloads.svg" alt="Easy Digital Downloads" width="139" height="139">
                    <img src="/images/nopcommerce.svg" alt="NopCommerce" width="139" height="139">
                    <img src="/images/ecomz.svg" alt="Ecomz" width="139" height="139">
                    <img src="/images/ecwid.svg" alt="ECWID" width="139" height="139">
                </div>

            </div>

            <div class="flex flex-col lg:flex-row gap-6 mt-6">
                <div class="lg:w-3/5 flex flex-col justify-between gap-6 p-4 bg-[#E9ECF4D9] rounded-xl pb-12">
                    <div class="flex flex-col gap-6">
                        <img class="flex-shrink-0" src="/images/mobile-ready-checkout.svg" alt="Mobile-Ready Checkout" width="121" height="121" />
                        <h3 class="text-2xl font-semibold">Mobile-Ready Checkout</h3>
                        <p class="text-xl">Say goodbye to abandoned carts! <br /> Our mobile-ready checkout guarantees a seamless payment process, ensuring customers breeze through their purchases and boosting your conversion rates!</p>
                    </div>
                    <div class="grid grid-cols-3 place-items-center gap-4 lg:gap-8 mt-6">
                        <img src="/images/flutter.svg" alt="flutter" width="210" height="90">
                        <img src="/images/android.svg" alt="Android" width="210" height="90">
                        <img src="/images/ios.svg" alt="IOS" width="210" height="90">
                    </div>
                </div>
                <div class="lg:w-2/5 flex flex-col justify-between gap-6 p-4 bg-[#E9ECF4D9] rounded-xl pb-12">
                    <div class="flex flex-col gap-6">
                        <img class="flex-shrink-0" src="/images/host-to-host-integration.svg" alt="Host to Host Integration" width="121" height="121" />
                        <h3 class="text-2xl font-semibold">Platform Integration</h3>
                        <p class="text-xl">Our integrations with cutting-edge platforms for loyalty programs, hotel bookings, marks just the beginning of a robust ecosystem, with many exciting partnerships on the horizon.</p>
                    </div>
                    <div class="grid grid-cols-2 place-items-center gap-4 lg:gap-8 mt-6">
                        <img src="/images/igloorooms.svg" alt="IglooRooms" width="210" height="90">
                        <img src="/images/kangaroo.svg" alt="Kangaroo" width="210" height="90">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Accordion :data="faq" title="All You Need to Know" /> 
    
    <BlueSection title="Let’s Grow Your Business Together " subtitle="MontyPay is here to provide a seamless, secure, and global solution tailored to your needs. Whether you're a startup or an enterprise, we’ve got the tools to help you succeed. Contact us now and grow your business with MontyPay." buttonText="Request a demo" buttonLink="/contact-us" image="/lets-grow-your-business-together.webp"/>

    <PaymentSolutions />

</template>

<script setup>

    useSeoMeta({
        title: 'Online Payments',
        ogTitle: 'Online Payments',
        description: 'Online Payments ',
        ogDescription: 'Online Payments',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

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