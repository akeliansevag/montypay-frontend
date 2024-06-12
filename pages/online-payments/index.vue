<template lang="">
    <div>
        <Hero 
            title="Online Payments"
            paragraph="Experience Seamless Transactions with MontyPay's Effortless Online Payment Solutions"
            image="online-payments"
        />

        <!-- <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col text-center">
                    <div class="w-full md:w-3/4 mx-auto">
                        <ContentBlock 
                            title="Online and Mobile Checkouts"
                            paragraph="Engage in the ultimate shopping experience with our online and mobile checkout solutions. From your website to mobile apps, customers breeze through seamless and secure transactions. "
                        />
                    </div>

                    <div class="mt-10 font-bold">Our multiple payment methods offer:</div>
                    
                    <div class="flex flex-col sm:flex-row flex-wrap justify-center items-start lg:items-center gap-10 mt-6">
                        <h4 class="flex justify-center items-center gap-2 font-semibold text-xl">
                            <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-transparent border-2 border-quaternary rounded-full" />Risk-free payments
                        </h4>  
                        <h4 class="flex justify-center items-center gap-2 font-semibold text-xl">
                            <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-transparent border-2 border-quaternary rounded-full" />Flexibility
                        </h4>  
                        <h4 class="flex justify-center items-center gap-2 font-semibold text-xl">
                            <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-transparent border-2 border-quaternary rounded-full" />Trust & confidence
                        </h4>  
                    </div>

                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/online-and-mobile-checkouts.png" 
                        class="w-full mt-10"
                        :imgAttrs="{class:'w-full'}" 
                    />
                </div>
            </div>
        </section> -->

        <section id="section-3" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-24">

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                            title="Online and Mobile Checkouts"
                            paragraph="From your website to mobile apps, let your customers breeze through seamless and secure transactions.<br /><br />Our multiple payment methods offer flexibility, ensuring convenient, risk-free payments, enhancing trust and confidence."
                            class="w-full lg:w-2/3 lg:order-1"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/online-and-mobile-checkouts.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                        title="Customer Invoice Links"
                            paragraph="Creating invoices is now a breeze!<br />Tailor professional invoices to reflect your brand, and send them directly to your clients. What's unique? Our integrated online payment feature ensures that your customers settle their invoices swiftly, enriching their experience and boosting your business cash flow."
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/customer-invoice-links.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                            title="Pay By Link"
                            paragraph="Let your customers shop without a hitch!<br /><br />It's all about convenience, a simple click on a link and transactions are complete. It's easy for both you and your customers, offering utmost convenience and simplicity."
                            class="lg:w-2/3 lg:order-1"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/pay-by-link.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full  mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                        title="QR Pay"
                            paragraph="You scan it, you got it!<br /><br />With QR Pay, Customers can simply scan a QR code displayed at the point of sale, confirm the transaction, and complete their purchase swiftly. This contactless payment method eliminates the need for physical cash or cards."
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/qr-pay.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-4" class="mt-16 lg:mt-36 lg:h-screen flex flex-col lg:flex-row items-center text-primary overflow-hidden">
            <NuxtPicture priority
                format="webp,avif"
                src="/images/recurring-bills-bg.png"
                class="w-full lg:absolute lg:top-0 lg:left-0 after:content-[''] after:absolute after:top-0 after:left-0 lg:after:bg-quaternary/30 after:w-full after:h-full"
                :imgAttrs="{class:'w-full lg:h-screen object-cover'}" 
            />
            
            <div class="w-full bg-quaternary lg:bg-transparent py-14 lg:py-0">
                <div class="container">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock
                            title="Recurring Bills"
                            paragraph="Automate billing and wave goodbye to manual hassles! For subscription services, memberships, or installments, our platform handles it all. Automated payments mean your customers never miss a due date, ensuring a steady flow of revenue for your business growth."
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/recurring-bills.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-5" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-24">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Smart Routing & Cascading"
                            paragraph="Experience lightning-fast, secure transactions!<br />Our cutting-edge technology ensures smart routing for the most efficient and cost-effective transaction channels. Lightning-fast transactions, reduced fees, and reliability work hand in hand to benefit your business."
                            class="flex-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/smart-routing-cascading.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Advanced Reporting"
                            paragraph="Unveil the secrets of your business!<br />Our reporting suite delves deep into your financial performance, serving you an exciting array of detailed metrics, from sales trends to customer behavior. Make informed, data-driven decisions that will supercharge your growth!"
                            class="flex-1 lg:order-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/advanced-reporting.png" 
                                :imgAttrs="{class:'w-full  mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-6" class="mt-16 lg:mt-36">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 text-primary">
                    <div class="flex flex-col gap-8 border rounded-lg py-8 px-6 bg-quaternary">
                        <img src="/images/phone-2.svg" alt="Merchant Mobile App" width="45" height="45" />
                        <h2 class="text-4xl">Merchant Mobile App</h2>
                        <p class="text-lg">Take your business on the go!Our intuitive app puts payment management at your fingertips. Stay closely connected with customers, monitor transactions, and track sales data from anywhere. It's like having a business superhero in your pocket!</p>
                    </div>
                    <div class="flex flex-col gap-8 border rounded-lg py-8 px-6 bg-quaternary">
                        <img src="/images/file-shield.svg" alt="Risk & Compliance" width="45" height="45" />
                        <h2 class="text-4xl">Risk & Compliance</h2>
                        <p class="text-lg">We've got your back!<br/>Our suite of tools meticulously identifies and neutralizes potential threats like fraud or chargebacks, ensuring a secure and compliant payment environment for your business to thrive.</p>
                    </div>
                    <div class="flex flex-col gap-8 border rounded-lg py-8 px-6 bg-quaternary">
                        <img src="/images/bank-note.svg" alt="Installements" width="45" height="45" />
                        <h2 class="text-4xl">Installements</h2>
                        <p class="text-lg">Let's make high-ticket items affordable!<br />With flexible payment options, your customers can split their purchase into manageable payments. Tailor installment plans to suit your business goals and attract a wider customer base.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-4" class="mt-16 lg:mt-36 lg:h-screen flex flex-col lg:flex-row items-center text-primary overflow-hidden">
            <NuxtPicture priority
                format="webp,avif"
                src="/images/cryptocurrency-bg.png"
                class="w-full lg:absolute lg:top-0 lg:left-0 after:content-[''] after:absolute after:top-0 after:left-0 lg:after:bg-quaternary/30 after:w-full after:h-full"
                :imgAttrs="{class:'w-full lg:h-screen object-cover'}" 
            />
            
            <div class="w-full bg-quaternary lg:bg-transparent py-14 lg:py-0">
                <div class="container">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock
                            title="Cryptocurrency"
                            paragraph="Ride the wave of the future!<br />Integrating Bitcoin, Ethereum, and more into your payment options will open doors to a global customer base.<br />Embrace cryptocurrency to stay at the forefront of financial innovation!"
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/cryptocurrency.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-6" class="py-16 lg:py-36 bg-[#ebebeb]">
            <div class="container">
                <ContentBlock 
                    title="Plugins & SDKs"
                    paragraph="Plug into the power of MontyPay's supercharged Plugins and Software Development Kits (SDKs) for a payment experience that's out of this world"
                    class="text-center"
                />

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
                    <div class="flex flex-col gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <img src="/images/phone-3.svg" alt="Merchant Mobile App" width="45" height="45" />
                        <h2 class="text-4xl">Mobile-Ready Checkout</h2>
                        <p class="text-lg">Say goodbye to abandoned carts!<br />Our mobile-ready checkout guarantees a seamless payment process, ensuring customers breeze through their purchases and boosting your conversion rates!</p>
                    </div>
                    <div class="flex flex-col gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <img src="/images/users-1.svg" alt="Host-2-Host Integration" width="45" height="45" />
                        <h2 class="text-4xl">Host-2-Host Integration</h2>
                        <p class="text-lg">Make it your own!<br/>With MontyPay's Host-2-Host integration, merchants can now accept payment information on their personalized payment pages. Tailor your payment experience to match your brand, strengthening the trust with your customers!</p>
                    </div>
                    <div class="flex flex-col gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <img src="/images/package-check.svg" alt="Social Commerce" width="45" height="45" />
                        <h2 class="text-4xl">Social Commerce</h2>
                        <p class="text-lg">MontyPay is not only a secure financial haven but also a thriving marketplace for freelancers and social media enthusiasts. We empower freelancers to receive payments seamlessly through our platform, enhancing convenience and ensuring that the hard work translates into tangible rewards.</p>
                    </div>
                    <div class="lg:col-span-3 gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <div class="flex flex-col lg:flex-row gap-12">
                            <div class="flex flex-col gap-8">
                                <img src="/images/cryptocurrency-1.svg" alt="Merchant Mobile App" width="45" height="45" />
                                <h2 class="text-4xl">CMS Plugins</h2>
                                <p class="text-lg">No fuss, just solutions!Our ready-to-go plugins for popular Content Management Systems (CMS) streamline integration for merchants. Skip the heavy development work and get your payment system up and running with ease.</p>
                            </div>
                            <div class="w-full grid grid-cols-2 gap-6 items-center place-content-center mt-12 lg:mt-0">
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/magento1.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/magento2.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/prestashop.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/woocommerce.png"
                                    class="p-3"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/opencart.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/easy-downloads.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/nopcommerce.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/ecomz.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/ecwid.svg"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <div class="flex flex-col gap-12">
                            <div class="flex flex-col gap-8">
                                <img src="/images/notification-box.svg" alt="Merchant Mobile App" width="45" height="45" />
                                <h2 class="text-4xl">CMS Plugins</h2>
                                <p class="text-lg">Our iOS and Android SDKs give merchants the power to accept payments within their mobile applications. Dive into the mobile commerce trend with a secure and smooth payment process for your app users. Smooth sailing all the way!</p>
                            </div>
                            <div class="w-full grid grid-cols-3 gap-4 items-center place-content-center mt-12 lg:mt-0">
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/flutter.png"
                                    :imgAttrs="{class:'w-3/4 mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/android.png"
                                    :imgAttrs="{class:'w-3/4 mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/ios.png"
                                    :imgAttrs="{class:'w-3/4 mx-auto'}" 
                                />
                            </div>
                        </div>
                    </div>
                    <div class="gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <div class="flex flex-col gap-12">
                            <div class="flex flex-col gap-8">
                                <img src="/images/dataflow-1.svg" alt="Merchant Mobile App" width="45" height="45" />
                                <h2 class="text-4xl">Platform Intergration</h2>
                                <p class="text-lg">Our integrations with cutting-edge platforms for loyalty programs, hotel bookings, marks just the beginning of a robust ecosystem, with many exciting partnerships on the horizon.</p>
                            </div>
                            <div class="w-full grid grid-cols-2 gap-4 items-center place-content-center mt-12 lg:mt-0">
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/igloorooms.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/kangaroo.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'Online Payments Services',
        ogTitle: 'Online Payments Services',
        description: 'Online Payments Services description',
        ogDescription: 'Online Payments Services description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const activeTab = ref(0);

    const show = (index) => {
        activeTab.value = index;
    };
</script>

<style lang="">
    
</style>