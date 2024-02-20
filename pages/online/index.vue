<template lang="">
    <Hero 
        breadcrumbs="Solutions / Payment Services"
        title="Online"
        paragraph="Dine Out Without Doubts! Introducing QCheck - The Future of Dining Made Easy!"
        button="Get Started"
        image="online"
    />

    <section id="section-2" class="pt-16 lg:pt-36">
        <div class="container">
            <div class="flex flex-col text-center">
                <div class="w-full md:w-3/4 lg:w-1/2 mx-auto">
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
                    src="/images/online-mobile-checkouts.png" 
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
                        title="Pay By Link or QR Pay"
                        paragraph="Let your customers shop without a hitch!<br />Whether it's a payment link on your website or a QR code in your store, it's all about convenience. A simple scan or click and transactions are complete. It's easy for both you and your customers, offering utmost convenience and simplicity."
                        class="flex-1 lg:order-1"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/pay-qr.png" 
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
            :imgAttrs="{class:'w-full h-screen object-cover'}" 
        />
        
        <div class="container bg-quaternary lg:bg-transparent py-14 lg:py-0 lg:px-14">
            <div class="w-full lg:w-1/2">
                <ContentBlock
                    title="Recurring Bills"
                    subtitle="Automate billing and wave goodbye to manual hassles!"
                    paragraph="Automate billing and wave goodbye to manual hassles! For subscription services, memberships, or installments, our platform handles it all. Automated payments mean your customers never miss a due date, ensuring a steady flow of revenue for your business growth."
                    button="Get Started"
                />
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
                <h2 @click="goToSlide(0)" class="hidden lg:block py-5 px-5 rounded-lg w-max text-quaternary bg-secondary">Merchant Mobile App</h2>
                <h2 @click="goToSlide(1)" class="hidden lg:block py-5 px-5 rounded-lg w-max text-white">Risk & Compliance</h2>
                <h2 @click="goToSlide(2)" class="hidden lg:block py-5 px-5 rounded-lg w-max text-white">Installments</h2>
                <h2 @click="goToSlide(3)" class="hidden lg:block py-5 px-5 rounded-lg w-max text-white">Cryptocurrency</h2>
            </div>
            <div class="w-full lg:w-1/2 text-white">
                <Swiper
                    :modules="[SwiperEffectFade, SwiperPagination]"
                    :slides-per-view="1"
                    :loop="true"
                    :effect="'fade'"
                    :fade-effect="{ crossFade: true }"
                    :grab-cursor="true"
                    :pagination="true"
                    ref="mySwiper"
                >
                    <SwiperSlide>
                        <h2 class="block lg:hidden">Merchant Mobile App</h2>

                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph=" connected with customers, monitor transactions, and track sales data from anywhere. It's like having a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 class="block lg:hidden">Risk & Compliance</h2>
                        
                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph="Our intuitive app puts payment management at your fingertips. St, and track sales data from anywhere. It's like having a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 class="block lg:hidden">Installments</h2>
                        
                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph="fingertips. Stay closely connected with customers, monitor transactions, and track sales data from anywhere. It's like having a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 class="block lg:hidden">Cryptocurrency</h2>
                        
                        <ContentBlock 
                            subtitle="Take your business on the go!"
                            paragraph="Our intuitive app puts payment management at your  a business superhero in your pocket!"
                            class="flex-1 lg:order-1 mt-6 lg:mt-0"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>

    <!-- <section id="Our values">
        <div class="grid-container h-full relative pt-80 pb-60 lg:py-115 text-center">
            <div class="lg:sticky lg:inset-0 lg:h-safe-screen flex flex-col justify-center lg-max:mb-80">
                <h2><span class="inline-flex uppercase font-mono bg-green rounded text-10 py-2 px-5">Our
                        values</span></h2>
                <h3 class="text-72 lg:text-200 mt-30">Our core
                    values</h3>
            </div>
            <div class="lg:-mt-[100svh]">
                <div class="h-full">
                    <div
                        class="relative flex [&amp;>*]:shrink-0 lg-max:gap-x-15 lg-max:h-full lg:flex-col lg-max:justify-start lg-max:items-stretch lg-max:relative lg-max:[&amp;>*]:snap-start lg-max:overflow-auto lg-max:snap-x lg-max:snap-mandatory lg-max:scroll-smooth">
                        <div
                            class="OurCoreValuesCard rounded-lg bg-green p-30 lg:p-40 span-w-10 lg:span-w-8 text-left lg:span-ml-6-wide">
                            <h4 class="text-32 mb-20 lg:mb-30">Initiative</h4>
                            <p class="lg-max:text-14">At QV, we celebrate and encourage initiative. This core value
                                represents our drive to be proactive, innovative, and forward-thinking. Our team members are
                                always ready to take the first step, embrace new challenges, and contribute original ideas.
                                We believe that taking initiative is key to our growth and success, empowering us to
                                continuously improve and excel in our field.</p>
                        </div>
                        <div
                            class="OurCoreValuesCard rounded-lg bg-green p-30 lg:p-40 span-w-10 lg:span-w-8 text-left lg:self-end lg:span-mr-1-wide lg:mt-72">
                            <h4 class="text-32 mb-20 lg:mb-30">Commitment</h4>
                            <p class="lg-max:text-14">Commitment is at the heart of everything we do at QV. Our dedicated
                                team consistently demonstrates a strong commitment to our goals, clients, and each other. We
                                are committed to delivering excellence, maintaining high standards, and going the extra
                                mile. This unwavering dedication is what fuels our progress and ensures we consistently meet
                                and exceed expectations.</p>
                        </div>
                        <div
                            class="OurCoreValuesCard rounded-lg bg-green p-30 lg:p-40 span-w-10 lg:span-w-8 text-left lg:span-ml-1-wide lg:-mt-106">
                            <h4 class="text-32 mb-20 lg:mb-30">Discipline</h4>
                            <p class="lg-max:text-14">Discipline is a fundamental value at QV. It reflects our focus on
                                organization, consistency, and attention to detail. Our disciplined approach ensures that
                                every task is approached with precision and thoroughness. This value underpins our ability
                                to deliver reliable, high-quality outcomes and maintain a structured, efficient work
                                environment.</p>
                        </div>
                        <div
                            class="OurCoreValuesCard rounded-lg bg-green p-30 lg:p-40 span-w-10 lg:span-w-8 text-left lg:self-end lg:span-mr-3-wide lg:mt-12">
                            <h4 class="text-32 mb-20 lg:mb-30">Humility</h4>
                            <p class="lg-max:text-14">At QV, humility guides our interactions and decision-making processes.
                                We believe in the power of staying grounded, listening actively, and being open to learning.
                                Our humility allows us to appreciate diverse perspectives, acknowledge our limitations, and
                                constantly seek improvement. It fosters a respectful, collaborative workplace where
                                everyone’s contributions are valued.</p>
                        </div>
                        <div
                            class="OurCoreValuesCard rounded-lg bg-green p-30 lg:p-40 span-w-10 lg:span-w-8 text-left lg:span-ml-3-wide lg:-mt-16">
                            <h4 class="text-32 mb-20 lg:mb-30">Data Driven</h4>
                            <p class="lg-max:text-14">We leverage data to inform our strategies, make informed decisions,
                                and drive innovation. Our commitment to a data-driven approach ensures that we are always
                                aligned with the latest trends, deeply understand our market, and can measure our impact
                                accurately. This approach enables us to be adaptive, strategic, and effective in our
                                operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
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
</script>

<style lang="">
    
</style>