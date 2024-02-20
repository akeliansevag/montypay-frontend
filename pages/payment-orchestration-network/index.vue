<template lang="">
    <Hero 
        breadcrumbs="Solutions / Digital Services"
        title="Payment Orchestration Network"
        paragraph="MontyPay helps you to expand yourbusiness to more countries based on a profit share model."
        button="Get Started"
        image="payment-orchestration-networks"
    />

    <section id="section-2" class="pt-16 lg:pt-36">
        <div class="container">
            <div class="flex flex-col text-center">
                <div class="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <ContentBlock 
                        title="Online and Mobile Checkouts"
                        paragraph="MontyPay's Payment Orchestration Network is the backbone of your business's growth strategy when it comes to optimizing payment processes. In an increasingly interconnected world, where local preferences vary widely, having a comprehensive network of payment methods is essential to meet the diverse needs of your global customer base."
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

    <section id="section-8" class="py-16 lg:py-36 bg-quaternary text-primary">
        <div class="container flex flex-col lg:flex-row gap-8">
            
            <NuxtPicture 
                priority
                format="webp,avif" 
                src="/images/customer-stories.png" 
                :imgAttrs="{class:'w-full lg:w-3/4 mx-auto rounded-lg'}" 
            />
        </div>
    </section>      
</template>

<script setup>
    useSeoMeta({
        title: 'About Us',
        ogTitle: 'About Us',
        description: 'About Us description',
        ogDescription: 'About Us description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="">
    
</style>