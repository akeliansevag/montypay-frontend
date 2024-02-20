<template lang="">
    <Hero 
        breadcrumbs="Solutions / Payment Services"
        title="In-Store Payment"
        paragraph="Dine Out Without Doubts! Introducing QCheck - The Future of Dining Made Easy!"
        button="Get Started"
        image="in-store-payment"
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
            <div class="w-full lg:w-3/4 mx-auto text-center">
                <ContentBlock 
                    title="QR Pay"
                    subtitle="Lorem ipsum dolor sind metus."
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus ut erat sed consectetur. Pellentesque quis tincidunt tortor, et eleifend metus. Curabitur quis placerat est, quis hendrerit risus"
                    button="Get Started"
                    :center=true
                />
            </div>

            <div class="flex flex-col gap-8 lg:gap-24 mt-16 bg-primary p-4 lg:p-20 before:content('') before:absolute before:top-0 before:right-0 before:w-[300px] before:h-[300px] before:lg:w-[600px] before:lg:h-[600px] before:bg-secondary before:blur-3xl before:-z-10 after:content('') after:absolute after:bottom-0 after:left-0 after:w-[300px] after:h-[300px] after:lg:w-[600px] after:lg:h-[600px] after:bg-secondary after:blur-3xl after:-z-10">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                    <ContentBlock 
                        title="Effortless Transactions"
                        paragraph="QR Pay leverages the power of QR codes to streamline in-store payments. Customers can simply scan a QR code displayed at the point of sale, confirm the transaction, and complete their purchase swiftly."
                        class="flex-1"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/effortless-transactions.png" 
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                    <ContentBlock 
                        title="Convenience"
                        paragraph="This contactless payment method eliminates the need for physical cash or cards, making payments more convenient for both customers and businesses. It's an ideal solution for today's health-conscious consumers."
                        class="flex-1 lg:order-1"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/convenience.png" 
                            :imgAttrs="{class:'w-full  mx-auto'}" 
                        />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                    <ContentBlock 
                        title="Security and Privacy"
                        paragraph="QR Pay employs advanced encryption and authentication protocols to ensure the security of every transaction. Customer data is protected, reducing the risk of fraud or unauthorized access."
                        class="flex-1"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/security-and-privacy.png" 
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="section-4" class="pt-16 lg:pt-36">
        <div class="container">
            <div class="w-full lg:w-3/4 mx-auto text-center">
                <ContentBlock 
                    title="Smart POS"
                    subtitle="Lorem ipsum dolor sind metus."
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus ut erat sed consectetur. Pellentesque quis tincidunt tortor, et eleifend metus. Curabitur quis placerat est, quis hendrerit risus"
                    button="Get Started"
                    :center=true
                />
            </div>

            <div class="flex flex-col gap-8 lg:gap-24 mt-16 bg-primary p-4 lg:p-20 before:content('') before:absolute before:top-0 before:right-0 before:w-[300px] before:h-[300px] before:lg:w-[600px] before:lg:h-[600px] before:bg-secondary before:blur-3xl before:-z-10 after:content('') after:absolute after:bottom-0 after:left-0 after:w-[300px] after:h-[300px] after:lg:w-[600px] after:lg:h-[600px] after:bg-secondary after:blur-3xl after:-z-10">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                    <ContentBlock 
                        title="Modern Retail Experience"
                        paragraph="Smart POS devices are designed to enhance the in-store shopping experience. They offer versatility, enabling businesses to accept a wide range of payment methods, from credit cards to digital wallets."
                        class="flex-1"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/modern-retail-experience.png" 
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                    <ContentBlock 
                        title="Real-time Reporting"
                        paragraph="Smart POS systems provide real-time transaction data, empowering businesses with valuable insights into sales trends, inventory management, and customer behavior."
                        class="flex-1 lg:order-1"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/real-time-reporting.png" 
                            :imgAttrs="{class:'w-full  mx-auto'}" 
                        />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                    <ContentBlock 
                        title="Integration"
                        paragraph="Our Smart POS devices seamlessly integrate with your existing infrastructure, ensuring a smooth transition to a more efficient and modern point-of-sale solution."
                        class="flex-1"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/integration.png" 
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="section-6" class="mt-16 lg:mt-36 py-16 lg:py-36 bg-quaternary text-white overflow-hidden">
        <div class="container">
            <div class="w-full lg:w-3/4 mx-auto text-center">
                <ContentBlock 
                    title="Customer Loyalty Program"
                    subtitle="Lorem ipsum dolor sind metus."
                    paragraph="The MontyPay Loyalty Program for Merchants is the key to fostering lasting customer relationships, boosting sales, and ensuring a delightful shopping experience. Dive into the world of customer retention and satisfaction, exclusively designed for our MontyPay merchants!"
                />
            </div>

            <div class="flex flex-col gap-20 mt-16 w-full lg:w-10/12 mx-auto text-center">
                <Blob />

                <div class="flex flex-col gap-10 items-center">
                    <svg width="1" height="83" viewBox="0 0 1 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="83" x2="0.499996" y2="2.18557e-08" stroke="white"/>
                    </svg>

                    <ContentBlock 
                        title="Customer Loyalty Program"
                        paragraph="The MontyPay Loyalty Program for Merchants is the key to fostering lasting customer relationships, boosting sales, and ensuring a delightful shopping experience. Dive into the world of customer retention and satisfaction, exclusively designed for our MontyPay merchants!"
                    />
                </div>

                <div class="flex flex-col gap-10 items-center">
                    <svg width="1" height="83" viewBox="0 0 1 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="83" x2="0.499996" y2="2.18557e-08" stroke="white"/>
                    </svg>

                    <ContentBlock 
                        title="Loyalty Rewards"
                        paragraph="The MontyPay Loyalty Program for Merchants is the key to fostering lasting customer relationships, boosting sales, and ensuring a delightful shopping experience. Dive into the world of customer retention and satisfaction, exclusively designed for our MontyPay merchants!"
                    />
                </div>

                <div class="flex flex-col gap-10 items-center">
                    <svg width="1" height="83" viewBox="0 0 1 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="83" x2="0.499996" y2="2.18557e-08" stroke="white"/>
                    </svg>

                    <ContentBlock 
                        title="Data-Driven Insights"
                        paragraph="Utilize the power of customer behavior insights. Understand your customers' spending habits, preferred products, and purchase frequency to refine and optimize your loyalty program strategies."
                    />
                </div>

                <div class="flex flex-col gap-10 items-center">
                    <svg width="1" height="83" viewBox="0 0 1 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="83" x2="0.499996" y2="2.18557e-08" stroke="white"/>
                    </svg>

                    <ContentBlock 
                        title="Special Promotions"
                        paragraph="Run targeted promotions through the MontyPay loyalty program. Drive customer engagement and increase sales by offering special promotions exclusively to your loyal customers."
                    />
                </div>

                <div class="flex flex-col gap-10 items-center">
                    <svg width="1" height="83" viewBox="0 0 1 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="83" x2="0.499996" y2="2.18557e-08" stroke="white"/>
                    </svg>

                    <ContentBlock 
                        title="Seamless Integration"
                        paragraph="Seamlessly integrate the loyalty program into your existing system. No hassle, no extra work—simply leverage MontyPay's easy integration to set up your loyalty program swiftly."
                    />
                </div>

                <div class="flex flex-col gap-10 items-center">
                    <svg width="1" height="83" viewBox="0 0 1 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="83" x2="0.499996" y2="2.18557e-08" stroke="white"/>
                    </svg>

                    <ContentBlock 
                        title="Soft POS"
                    />

                    <div class="flex justify-between gap-0 lg:gap-20">
                        <div 
                            class="p-2 lg:p-6 rounded-t-lg cursor-pointer" 
                            :class="{ 'bg-primary text-black': activeTab === 0 }"
                            @click="show(0)"
                        >
                            <h2 class="text-sm lg:text-xl">Transforming Devices</h2>
                        </div>
                        <div 
                            class="p-2 lg:p-6 rounded-t-lg cursor-pointer" 
                            :class="{ 'bg-primary text-black': activeTab === 1 }"
                            @click="show(1)"
                        >
                            <h2 class="text-sm lg:text-xl">Mobility and Flexibility</h2>
                        </div>
                        <div 
                            class="p-2 lg:p-6 rounded-t-lg cursor-pointer" 
                            :class="{ 'bg-primary text-black': activeTab === 2 }"
                            @click="show(2)"
                        >
                            <h2 class="text-sm lg:text-xl">Easy Set-Up</h2>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="p-10 lg:p-20 bg-primary lg:rounded-lg">
                <div
                    class="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-48 justify-center items-center transition-opacity ease-in-out duration-300" 
                    :class="{ 'absolute invisible opacity-0': activeTab !== 0 }"
                >
                    <ContentBlock 
                        title="Transforming Devices"
                        subtitle="Empower your app!"
                        paragraph="Soft POS transforms smartphones and tablets into payment terminals. It's a cost-effective and flexible way for businesses to expand their payment options without the need for additional hardware."
                        class="flex-1 text-black"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/transforming-device.png" 
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>

                <div
                    class="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-48 justify-center items-center transition-opacity ease-in-out duration-300"
                    :class="{ 'absolute invisible opacity-0': activeTab !== 1 }"
                >
                    <ContentBlock 
                        title="Mobility and Flexibility"
                        subtitle="Empower your app!"
                        paragraph="Soft POS is ideal for businesses on the move, such as food trucks or pop-up shops. Merchants can accept payments anywhere, providing customers with greater flexibility and convenience."
                        class="flex-1 text-black"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/mobility-and-flexibility.png" 
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>

                <div 
                    class="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-48 justify-center items-center transition-opacity ease-in-out duration-300 "
                    :class="{ 'absolute invisible opacity-0': activeTab !== 2 }"
                >
                    <ContentBlock 
                        title="Easy Set-Up"
                        subtitle="Empower your app!"
                        paragraph="MontyPay's Soft POS solutions are easy to set up and use, with intuitive interfaces that require minimal training for staff."
                        class="flex-1 text-black"
                    />
                    <div class="flex-1 w-full">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/easy-setup.png" 
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <ContentBlock 
                    title="Soft POS Benefits"
                />

                <div class="flex flex-col gap-7 lg:gap-14 mt-16 text-black text-left">
                    <div class="flex flex-col lg:flex-row gap-7 lg:gap-14 gap">
                        <div class="p-10 bg-primary rounded-lg flex-1">
                            <ContentBlock 
                                title="Enhanced Efficiency"
                                paragraph="MontyPay's in-store payment solutions reduce transaction times, minimizing queues, and enhancing overall operational efficiency."
                            />
                        </div>
                        <div class="p-10 bg-primary rounded-lg flex-1">
                            <ContentBlock 
                                title="Customer Satisfaction"
                                paragraph="Faster, secure, and convenient payment options lead to improved customer satisfaction, encouraging repeat business."
                            />
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-7 lg:gap-14">
                        <div class="p-10 bg-primary rounded-lg flex-1">
                            <ContentBlock 
                                title="Data-Driven Insights"
                                paragraph="Access to real-time transaction data allows businesses to make informed decisions, optimize inventory, and tailor marketing efforts."
                            />
                        </div>
                        <div class="p-10 bg-primary rounded-lg flex-1">
                            <ContentBlock 
                                title="Adaptability"
                                paragraph="Our in-store payment solutions can be customized to meet the specific needs of your business, ensuring a tailored fit."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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