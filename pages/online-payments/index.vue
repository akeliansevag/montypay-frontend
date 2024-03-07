<template lang="">
    <div>
        <Hero 
            breadcrumbs="Solutions / Payment Services"
            title="Online Payments"
            paragraph="Dine Out Without Doubts! Introducing QCheck - The Future of Dining Made Easy!"
            button="Get Started"
            image="online"
        />

        <section id="section-2" class="pt-16 lg:pt-36">
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
        </section>

        <section id="section-3" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-24">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Customer Invoice Links"
                            paragraph="Creating invoices is now a breeze!<br />Tailor professional invoices to reflect your brand, and send them directly to your clients. What's unique? Our integrated online payment feature ensures that your customers settle their invoices swiftly, enriching their experience and boosting your business cash flow."
                            class="flex-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/customer-invoice-links.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Pay By Link"
                            paragraph="Let your customers shop without a hitch!<br />Whether it's a payment link on your website or a QR code in your store, it's all about convenience. A simple scan or click and transactions are complete. It's easy for both you and your customers, offering utmost convenience and simplicity."
                            class="flex-1 lg:order-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/pay-by-link-or-qr-pay.png" 
                                :imgAttrs="{class:'w-full  mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-4" class="mt-16 lg:mt-36 lg:h-screen flex flex-col lg:flex-row items-center text-primary overflow-hidden">
            <NuxtPicture priority
                format="webp,avif"
                src="/images/in-store-payments.png"
                class="w-full lg:absolute lg:top-0 lg:left-0 after:content-[''] after:absolute after:top-0 after:left-0 lg:after:bg-quaternary/30 after:w-full after:h-full"
                :imgAttrs="{class:'w-full lg:h-screen object-cover'}" 
            />
            
            <div class="w-full bg-quaternary lg:bg-transparent py-14 lg:py-0">
                <div class="container">
                    <div class="w-full lg:w-1/2">
                        <ContentBlock
                            title="Recurring Bills"
                            subtitle="Automate billing and wave goodbye to manual hassles!"
                            paragraph="Automate billing and wave goodbye to manual hassles! For subscription services, memberships, or installments, our platform handles it all. Automated payments mean your customers never miss a due date, ensuring a steady flow of revenue for your business growth."
                            button="Get Started"
                        />
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

        <section id="section-6" class="mt-16 lg:mt-36 py-16 lg:py-36 bg-quaternary">
            <div class="container flex flex-col lg:flex-row items-center">
                <div class="flex flex-col w-full lg:w-1/2">
                    <h2 
                        :class="activeTab === 0 ? 'text-quaternary bg-secondary' : 'text-primary bg-transparent'"
                        @click="show(0)"
                        class="hidden lg:block py-5 px-5 rounded-lg w-max cursor-pointer"
                    >Merchant Mobile app</h2>
                    <h2
                        :class="activeTab === 1 ? 'text-quaternary bg-secondary' : 'text-primary bg-transparent'"
                        @click="show(1)"
                        class="hidden lg:block py-5 px-5 rounded-lg w-max cursor-pointer"
                    >Risk & Compliance</h2>
                    <h2 
                        :class="activeTab === 2 ? 'text-quaternary bg-secondary' : 'text-primary bg-transparent'"
                        @click="show(2)"
                        class="hidden lg:block py-5 px-5 rounded-lg w-max cursor-pointer"
                    >Installments</h2>
                    <h2 
                        :class="activeTab === 3 ? 'text-quaternary bg-secondary' : 'text-primary bg-transparent'"
                        @click="show(3)"
                        class="hidden lg:block py-5 px-5 rounded-lg w-max cursor-pointer"
                    >Cryptocurrency</h2>
                </div>
                <div class="w-full lg:w-1/2 text-white">
                    <div
                        class="transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 0 }"
                    >
                        <h2 class="block lg:hidden">Merchant Mobile App</h2>

                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph=" connected with customers, monitor transactions, and track sales data from anywhere. It's like having a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
                    </div>
                    <div 
                        class="transition-opacity ease-in-out duration-300"
                        :class="{ 'absolute invisible opacity-0': activeTab !== 1 }"
                    >
                        <h2 class="block lg:hidden">Risk & Compliance</h2>
                        
                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph="Our intuitive app puts payment management at your fingertips. St, and track sales data from anywhere. It's like having a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
                    </div>
                    <div 
                        class="transition-opacity ease-in-out duration-300"
                        :class="{ 'absolute invisible opacity-0': activeTab !== 2 }"
                    >
                        <h2 class="block lg:hidden">Installments</h2>
                        
                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph="fingertips. Stay closely connected with customers, monitor transactions, and track sales data from anywhere. It's like having a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
                    </div>
                    <div 
                        class="transition-opacity ease-in-out duration-300"
                        :class="{ 'absolute invisible opacity-0': activeTab !== 3 }"
                    >
                        <h2 class="block lg:hidden">Cryptocurrency</h2>
                        
                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph="Our intuitive app puts payment management at your  a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
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