<template lang="">
    <Hero 
        breadcrumbs="Solutions / Payment Services"
        title="Qcheck"
        paragraph="Dine Out Without Doubts! Introducing QCheck - The Future of Dining Made Easy!"
        button="Get Started"
        image="qcheck"
    />

    <section id="section-2" class="pt-16 lg:pt-36">
        <div class="container">
            <div class="flex flex-col text-center">
                <div class="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <ContentBlock 
                        title="Check the menu & pay the bill using the same QR!"
                        paragraph="Get ready for the ultimate dining revolution with QCheck, the hospitality industry's game-changing Self-Service Checkout solution! Say goodbye to bill stress - your customers can now peruse the menu and settle the tab using the same QR code! That's right, a tap on their smartphone and voila - the bill is paid!<br />QCheck spells a new chapter in dining satisfaction! Revel in the ease of seamless bill splitting, gorgeous branding, tip-friendly features, and real-time reporting - all designed to elevate the dining experience and wow your guests. Step into the future of dining; QCheck, where every meal becomes an experience worth savoring!"
                    />
                </div>

                <NuxtPicture 
                    priority
                    format="webp,avif" 
                    src="/images/check-menu.png" 
                    class="w-full mt-10"
                    :imgAttrs="{class:'w-full'}" 
                />
            </div>
        </div>
    </section>

    <section id="section-3" class="py-16 lg:py-36">
        <div class="container">
            <div class="w-full lg:w-3/4 mx-auto text-center">
                <ContentBlock 
                    title="QCheck"
                    subtitle="Self-Service Checkout"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus ut erat sed consectetur. Pellentesque quis tincidunt tortor, et eleifend metus. Curabitur quis placerat est, quis hendrerit risus"
                    button="Get Started"
                    :center=true
                />
            </div>

            <div class="flex flex-col gap-7 lg:gap-14 mt-16 text-black text-left">
                    <Blob />
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
                <div class="flex flex-col lg:flex-row gap-7 lg:gap-14">
                    <div class="p-10 bg-primary rounded-lg flex-1">
                        <ContentBlock 
                            title="Data-Driven Insights"
                            paragraph="Access to real-time transaction data allows businesses to make informed decisions, optimize inventory, and tailor marketing efforts."
                        />
                    </div>
                    <div class="p-10 flex-1">
                    </div>
                </div>
            </div>

            <ContentBlock 
                title="Main Benefits"
                class="text-center mt-16"
            />

            <div class="flex flex-col gap-7 lg:gap-14 mt-16 text-white text-left">
                <div class="flex flex-col lg:flex-row gap-7 lg:gap-14 gap">
                    <div class="p-10 bg-quaternary rounded-lg flex-1">
                        <ContentBlock 
                            title="Faster Checkout"
                            paragraph="QCheck streamlines the payment process, reducing waiting times and improving overall efficiency."
                        />
                    </div>
                    <div class="p-10 bg-quaternary rounded-lg flex-1">
                        <ContentBlock 
                            title="Simple and Secure Payments"
                            paragraph="Guests enjoy a user-friendly payment experience while businesses benefit from enhanced security."
                        />
                    </div>
                    <div class="p-10 bg-quaternary rounded-lg flex-1">
                        <ContentBlock 
                            title="Real-Time Reporting"
                            paragraph="Access real-time transaction data for better business insights and decision-making."
                        />
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-7 lg:gap-14">
                    <div class="p-10 bg-quaternary rounded-lg flex-1">
                        <ContentBlock 
                            title="Increase in Tips"
                            paragraph="QCheck's tip-friendly features encourage guests to leave gratuities, increasing staff earnings."
                        />
                    </div>
                    <div class="p-10 bg-quaternary rounded-lg flex-1">
                        <ContentBlock 
                            title="No Monthly Fees"
                            paragraph="Say goodbye to monthly fees or subscription costs."
                        />
                    </div>
                    <div class="p-10 bg-quaternary rounded-lg flex-1">
                        <ContentBlock 
                            title="Brand Visibility"
                            paragraph="Design the checkout experience to align with your brand identity, reinforcing brand visibility and recognition."
                        />
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