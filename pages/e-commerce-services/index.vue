<template lang="">
    <div>
        <Hero 
            title="Build your ecommerce website from scratch"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants"
            image="e-commerce-services"
        />

        <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col text-center">
                    <div class="w-full md:w-3/4 mx-auto">
                        <ContentBlock 
                            title="MontyPay provides an End-to-End Payment Solution for Merchants"
                            paragraph="With MontyPay, the least you can expect is a redefined payment processing for merchants with our comprehensive end-to-end solution. In the ever-evolving landscape of commerce, we understand that businesses need more than just a payment gateway, they require a partner that simplifies and optimizes every aspect of their payment journey.<br />MontyPay is that partner, offering a seamless and holistic approach to payment processing. From website development to secure payment gateways, we provide a complete suite of services designed to empower businesses of all sizes. Join us as we embark on a journey to revolutionize the way you manage payments and unlock new possibilities for your business."
                        />
                    </div>

                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/end-to-end-payment-solution.png" 
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
                            title="E-Commerce Development"
                            paragraph="Our E-Commerce development services are tailored to transform your website into a dynamic online marketplace. We craft user-friendly, visually appealing, and secure E-Commerce platforms that enhance the shopping experience for your customers. From intuitive product displays to hassle-free checkout processes, we ensure every aspect of your online store is optimized. The benefits include expanded reach, increased sales, and a competitive edge in the digital marketplace."
                            class="flex-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/e-commerce-development.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Content Management"
                            paragraph="Take control of your online content with our comprehensive Content Management solutions. We empower you to easily create, edit, and publish content across your website. The advantages? Streamlined content updates, enhanced SEO performance, and the ability to keep your audience engaged with fresh, relevant information. Say goodbye to the complexities of content management and hello to efficient, user-friendly control."
                            class="flex-1 lg:order-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/content-managment.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Order Fulfillment"
                            paragraph="Our Order Fulfillment services are designed to optimize your supply chain operations. We offer end-to-end order processing, inventory management, and shipping solutions that ensure prompt and accurate delivery to your customers. The result? Improved customer satisfaction, reduced operational costs, and the ability to scale your business efficiently as demand grows."
                            class="flex-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/order-fulfillment.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Social Media Management"
                            paragraph="Elevate your social media presence with our Social Media Management expertise. We strategize, create, and schedule engaging content across various platforms to enhance your brand's visibility and engagement. By harnessing the power of social media, you can build a loyal customer base, boost brand recognition, and even drive more traffic to your website. Our services make social media marketing simple and effective."
                            class="flex-1 lg:order-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/social-media-management.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Payment Solutions"
                            paragraph="Our Payment Solutions are at the heart of facilitating seamless transactions for your business. We provide a versatile range of payment methods, including credit cards, mobile payments, and more, tailored to your unique needs. Benefits encompass enhanced customer convenience, increased sales conversion rates, and secure, reliable payment processing that fosters trust."
                            class="flex-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/payment-solutions.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Additional Services"
                            paragraph="Our commitment to comprehensive support extends to a range of Additional Services. These include but are not limited to security audits, website performance optimization, and customer support, along with several services that enhance your online presence and increase brand awareness. These supplementary offerings enhance your overall online presence and bolster customer trust. You can rest easy knowing that we're here to support your website's growth and success in every aspect."
                            class="flex-1 lg:order-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/additional-services.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
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
</script>

<style lang="">
    
</style>