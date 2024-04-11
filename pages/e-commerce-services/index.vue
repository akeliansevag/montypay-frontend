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
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="section-3" class="pt-y6 lg:py-36">
            <div class="container">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                    <div>
                        <ContentBlock 
                            title="E-Commerce Development"
                            paragraph="Take control of your online content with our comprehensive Content Management solutions."
                            class="w-full"
                        />
                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/shopping-cart.svg" alt="Enhanced shopping experiences" width="35" height="35" />
                                <h2 class="text-base">Enhanced shopping experiences</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/face-smile.svg" alt="User-friendly" width="35" height="35" />
                                <h2 class="text-base">User-friendly</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/scan.svg" alt="Secure eCommerce" width="35" height="35" />
                                <h2 class="text-base">Secure eCommerce</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/eye.svg" alt="Visually appealing" width="35" height="35" />
                                <h2 class="text-base">Visually appealing</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/shopping-bag.svg" alt="Intuitive product displays" width="35" height="35" />
                                <h2 class="text-base">Intuitive product displays</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/receipt-check.svg" alt="Hassle-free checkout processes" width="35" height="35" />
                                <h2 class="text-base">Hassle-free checkout processes</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/route.svg" alt="Expanded reach" width="35" height="35" />
                                <h2 class="text-base">Expanded reach</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/sale.svg" alt="Increased sales" width="35" height="35" />
                                <h2 class="text-base">Increased sales</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/trophy.svg" alt="Competitive edge" width="35" height="35" />
                                <h2 class="text-base">Competitive edge</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex w-full lg:w-2/3">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/e-commerce-development.png" 
                            class="w-full"
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center mt-16 lg:mt-32">
                    <div class="lg:order-1">
                        <ContentBlock 
                            title="Content Management"
                            paragraph="Create, edit, and publish content across your website."
                            class="w-full"
                        />
                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/upload.svg" alt="Streamlined content updates" width="35" height="35" />
                                <h2 class="text-base">Streamlined content updates</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/line-chart-up.svg" alt="Enhanced SEO performance" width="35" height="35" />
                                <h2 class="text-base">Enhanced SEO performance</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/face-smile.svg" alt="User-friendly control" width="35" height="35" />
                                <h2 class="text-base">User-friendly control</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex w-full lg:w-2/3">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/content-management.png" 
                            class="w-full"
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center mt-16 lg:mt-32">
                    <div>
                        <ContentBlock 
                            title="Social Media Management"
                            paragraph="Strategize, create, and schedule engaging content across various platforms."
                            class="w-full"
                        />
                        <div class="grid grid-cols-2 gap-6 mt-8">
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/trend-up.svg" alt="Enhance brand visibility & engagement" width="35" height="35" />
                                <h2 class="text-base">Enhance brand visibility & engagement</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/heart-hand-1.svg" alt="Build a loyal customer base" width="35" height="35" />
                                <h2 class="text-base">Build a loyal customer base</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/star.svg" alt="User-friendly control" width="35" height="35" />
                                <h2 class="text-base">User-friendly control</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/compass.svg" alt="Drive more traffic to your website" width="35" height="35" />
                                <h2 class="text-base">Drive more traffic to your website</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex w-full lg:w-2/3">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/social-media-management.png" 
                            class="w-full"
                            :imgAttrs="{class:'w-full mx-auto'}" 
                        />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center mt-16 lg:mt-32">
                    <div class="lg:order-1">
                        <ContentBlock 
                            title="Payment Solutions"
                            paragraph="Ensure your business enjoys a seamless online checkout experience."
                            class="w-full"
                        />
                        <div class="grid grid-cols-2 gap-6 mt-8">
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/credit-card-1.svg" alt="Credit cards" width="35" height="35" />
                                <h2 class="text-base">Credit cards</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/phone-1.svg" alt="Mobile payments" width="35" height="35" />
                                <h2 class="text-base">Mobile payments</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/shield-tick.svg" alt="Enhanced convenience" width="35" height="35" />
                                <h2 class="text-base">Enhanced convenience</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/arrows-up.svg" alt="Elevated sales" width="35" height="35" />
                                <h2 class="text-base">Elevated sales</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/message-check-square.svg" alt="Higher conversion rates" width="35" height="35" />
                                <h2 class="text-base">Higher conversion rates</h2>
                            </div>
                            <div class="flex flex-col gap-5 border rounded-lg py-8 px-6">
                                <img src="/images/coins-swap.svg" alt="Reliable payment processing" width="35" height="35" />
                                <h2 class="text-base">Reliable payment processing</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex w-full lg:w-2/3">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/payment-solutions.png" 
                            class="w-full"
                            :imgAttrs="{class:'w-full mx-auto'}" 
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
</script>

<style lang="">
    
</style>