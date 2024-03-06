<template lang="">
    <div>
        <Hero 
            breadcrumbs="Global Coverage"
            title="Global Coverage"
            paragraph="MontyPay Payment Gateway spans the globe , ensuring that your business can accept payments from customers in virtually every corner of the world"
            button="Get Started"
            image="global-coverage"
        />

        <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col text-center">
                    <div class="w-full md:w-3/4 mx-auto">
                        <ContentBlock 
                            title="Global Coverage"
                            subtitle="MontyPay Payment Gateway spans the globe"
                            paragraph="MontyPay Payment Gateway spans the globe, ensuring thatyour business can accept payments from customers in virtually every corner ofthe world. We have a robust network of international partners and a presence inkey markets, allowing us to facilitate transactions in multiple currencies andpayment methods. Whether you're operating locally or expanding internationally,MontyPay has you covered."
                            button="Get Started"
                            :center="true"
                        />
                    </div>

                    <!-- <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/payment-gateway.png" 
                        class="w-full mt-10"
                        :imgAttrs="{class:'w-full'}" 
                    /> -->
                </div>
            </div>
        </section>

        <section id="section-3" class="mt-16 lg:mt-36 py-16 lg:py-36 bg-quaternary text-primary overflow-hidden">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-24">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <div class="flex-1">
                            <ContentBlock 
                                title="Competitive Pricing"
                                paragraph="At MontyPay, we understand the importance of cost-effective payment processing. That's why we offer competitive pricing structures tailored to your specific business needs. Our transparent pricing model ensures you'll always know what you're paying for, with no hidden fees or surprises. Plus, our commitment to fair pricing means you can maximize your revenue while providing top-notch payment experiences for your customers."
                            />
                            <ContentBlock 
                                title="Countries & Customized Payment Methods"
                                paragraph="Explore MontyPay, your ultimate global payment solution provider offering diverse payment methods tailored to various countries. Discover a world of seamless transactions and diverse payment methods uniquely designed for each country, ensuring your business thrives in the international market."
                                class="mt-20"
                            />
                        </div>
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/competitive-pricing.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-6" class="py-16 lg:py-36 bg-[#F6F6F6] overflow-hidden">
            <div class="container">
                <div class="w-full lg:w-3/4 mx-auto text-center">
                    <ContentBlock 
                        title="Global Coverage"
                        subtitle="MontyPay Payment Gateway spans the globe"
                    />
                </div>

                <div class="flex flex-wrap justify-center gap-4 lg:gap-10 w-10/12 lg:w-9/12 mt-16 lg:mt-36 mx-auto">
                    <div 
                        class="flex-1 py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 0 }"
                        @click="show(0)"
                    >
                        <h2 class="text-sm lg:text-xl">Lebanon</h2>
                    </div>
                    <div 
                        class="flex-1 py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 1 }"
                        @click="show(1)"
                    >
                        <h2 class="text-sm lg:text-xl">Jordan</h2>
                    </div>
                    <div 
                        class="flex-1 py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 2 }"
                        @click="show(2)"
                    >
                        <h2 class="text-sm lg:text-xl">Bahrain</h2>
                    </div>
                    <div 
                        class="flex-1 py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 3 }"
                        @click="show(3)"
                    >
                        <h2 class="text-sm lg:text-xl">UAE</h2>
                    </div>
                    <div 
                        class="flex-1 py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 4 }"
                        @click="show(4)"
                    >
                        <h2 class="text-sm lg:text-xl">Nigeria</h2>
                    </div>
                    <div 
                        class="flex-1 py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 5 }"
                        @click="show(5)"
                    >
                        <h2 class="text-sm lg:text-xl">EU</h2>
                    </div>
                    <div 
                        class="flex-1 py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 6 }"
                        @click="show(6)"
                    >
                        <h2 class="text-sm lg:text-xl">UK</h2>
                    </div>
                </div>
        
                <div class="p-10 mt-8 lg:mt-16 bg-primary rounded-lg">
                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 0 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h4 class="font-bold">Cards</h4>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <svg width="63" height="39" viewBox="0 0 63 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1144_11745)">
                                            <path d="M62.5005 19.0656C62.5005 29.5987 53.9179 38.1312 43.3332 38.1312C32.7486 38.1312 24.166 29.5987 24.166 19.0656C24.166 8.53248 32.7352 0 43.3199 0C53.9046 0 62.5005 8.53248 62.5005 19.0656Z" fill="#F79F1A"/>
                                            <path d="M38.8345 19.0656C38.8345 29.5987 30.2519 38.1312 19.6672 38.1312C9.08254 38.1312 0.5 29.5987 0.5 19.0656C0.5 8.53248 9.08254 0 19.6672 0C30.2519 0 38.8345 8.53248 38.8345 19.0656Z" fill="#EA001B"/>
                                            <path d="M31.4936 4.0542C27.0221 7.53874 24.1523 12.9709 24.1523 19.0655C24.1523 25.1602 27.0221 30.5923 31.4936 34.0769C35.965 30.5923 38.8348 25.1602 38.8348 19.0655C38.8348 12.9709 35.965 7.55199 31.4936 4.0542Z" fill="#FF5F01"/>
                                            <path d="M62.4518 29.1901V28.5168H62.2823L62.0788 28.9881L61.8753 28.5H61.6888V29.1733H61.8075V28.6683L61.994 29.106H62.1296L62.3331 28.6683V29.1901H62.4518ZM61.3157 29.1901V28.6178H61.5531V28.5H60.9766V28.6178H61.214V29.1901H61.3157Z" fill="#F79F1A"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1144_11745">
                                                <rect width="62" height="39" fill="white" transform="translate(0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>MasterCard
                                </div>

                                <div class="flex items-center gap-4">
                                    <svg width="81" height="26" viewBox="0 0 81 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1144_11736)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.7794 0.98253L29.7787 25.5693H36.1794L40.1806 0.98253H33.7794ZM24.3933 0.98253L18.2906 17.8931L17.5687 14.2517L17.5692 14.2529L17.4101 13.4367C16.6715 11.845 14.961 8.81968 11.7309 6.23787C10.776 5.47474 9.81338 4.82345 8.88281 4.26712L14.4292 25.5693H21.0983L31.2825 0.98253H24.3933ZM49.3744 7.80831C49.3744 5.02855 55.6082 5.38574 58.3474 6.89513L59.2607 1.61455C59.2607 1.61455 56.4418 0.54248 53.5035 0.54248C50.3268 0.54248 42.7836 1.93168 42.7836 8.68175C42.7836 15.0344 51.637 15.1133 51.637 18.4486C51.637 21.7838 43.6964 21.1878 41.0759 19.0838L40.1235 24.6033C40.1235 24.6033 42.9815 25.9925 47.3494 25.9925C51.7168 25.9925 58.3075 23.7298 58.3075 17.5751C58.3075 11.1828 49.3744 10.5874 49.3744 7.80831ZM75.4943 0.98253H70.3479C67.9715 0.98253 67.3929 2.81484 67.3929 2.81484L57.8472 25.5693H64.5188L65.8534 21.9175H73.9908L74.7415 25.5693H80.6188L75.4943 0.98253ZM67.698 16.872L71.0616 7.67106L72.9537 16.872H67.698Z" fill="#005BAC"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5418 3.73001C16.5418 3.73001 16.2353 1.1626 12.9627 1.1626H1.07286L0.933594 1.64511C0.933594 1.64511 6.64877 2.81016 12.1318 7.17505C17.3715 11.3468 19.0808 16.5471 19.0808 16.5471L16.5418 3.73001Z" fill="#F6AC1D"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1144_11736">
                                                <rect width="81" height="26" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <svg width="70" height="47" viewBox="0 0 70 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M65.625 0.333496H4.375C1.96875 0.333496 0 2.30492 0 4.71445V41.9525C0 44.3621 1.96875 46.3335 4.375 46.3335H65.625C68.0312 46.3335 70 44.3621 70 41.9525V4.71445C70 2.30492 68.0312 0.333496 65.625 0.333496Z" fill="#3498D8"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6543 23.9908H18.1543L16.4043 19.6098L14.6543 23.9908ZM63.4355 15.667H54.4668L52.2793 18.0765L50.3105 15.667H31.2793L29.5293 19.6098L27.7793 15.667H20.123V17.4194L19.248 15.667H12.6855L6.3418 31.0003H13.998L14.873 28.5908H17.0605L17.9355 31.0003H26.4668V29.2479L27.123 31.0003H31.498L32.1543 29.0289V31.0003H49.6543L51.8418 28.5908L53.8105 31.0003H62.7793L57.0918 23.3337L63.4355 15.667ZM36.9668 28.8098H34.5605V20.267L30.8418 28.8098H28.6543L24.9355 20.267V28.8098H19.9043L19.0293 26.4003H13.7793L12.9043 28.8098H10.0605L14.6543 17.8575H18.373L22.5293 28.1527V17.8575H26.6855L29.9668 25.3051L33.0293 17.8575H37.1855V28.8098H36.9668ZM58.623 28.8098H55.3418L52.498 25.086L49.2168 28.8098H39.373V17.8575H49.4355L52.498 21.3622L55.7793 17.8575H58.8418L54.0293 23.3337L58.623 28.8098ZM41.7793 20.0479V22.0194H47.248V24.2098H41.7793V26.4003H47.9043L50.7481 23.1146L48.123 20.0479H41.7793Z" fill="white"/>
                                    </svg>AMEX
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h4 class="font-bold">Digital Wallets</h4>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <svg width="63" height="39" viewBox="0 0 63 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1144_11745)">
                                            <path d="M62.5005 19.0656C62.5005 29.5987 53.9179 38.1312 43.3332 38.1312C32.7486 38.1312 24.166 29.5987 24.166 19.0656C24.166 8.53248 32.7352 0 43.3199 0C53.9046 0 62.5005 8.53248 62.5005 19.0656Z" fill="#F79F1A"/>
                                            <path d="M38.8345 19.0656C38.8345 29.5987 30.2519 38.1312 19.6672 38.1312C9.08254 38.1312 0.5 29.5987 0.5 19.0656C0.5 8.53248 9.08254 0 19.6672 0C30.2519 0 38.8345 8.53248 38.8345 19.0656Z" fill="#EA001B"/>
                                            <path d="M31.4936 4.0542C27.0221 7.53874 24.1523 12.9709 24.1523 19.0655C24.1523 25.1602 27.0221 30.5923 31.4936 34.0769C35.965 30.5923 38.8348 25.1602 38.8348 19.0655C38.8348 12.9709 35.965 7.55199 31.4936 4.0542Z" fill="#FF5F01"/>
                                            <path d="M62.4518 29.1901V28.5168H62.2823L62.0788 28.9881L61.8753 28.5H61.6888V29.1733H61.8075V28.6683L61.994 29.106H62.1296L62.3331 28.6683V29.1901H62.4518ZM61.3157 29.1901V28.6178H61.5531V28.5H60.9766V28.6178H61.214V29.1901H61.3157Z" fill="#F79F1A"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1144_11745">
                                                <rect width="62" height="39" fill="white" transform="translate(0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>MasterCard
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h4 class="font-bold">Bank Transfers</h4>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <svg width="63" height="39" viewBox="0 0 63 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1144_11745)">
                                            <path d="M62.5005 19.0656C62.5005 29.5987 53.9179 38.1312 43.3332 38.1312C32.7486 38.1312 24.166 29.5987 24.166 19.0656C24.166 8.53248 32.7352 0 43.3199 0C53.9046 0 62.5005 8.53248 62.5005 19.0656Z" fill="#F79F1A"/>
                                            <path d="M38.8345 19.0656C38.8345 29.5987 30.2519 38.1312 19.6672 38.1312C9.08254 38.1312 0.5 29.5987 0.5 19.0656C0.5 8.53248 9.08254 0 19.6672 0C30.2519 0 38.8345 8.53248 38.8345 19.0656Z" fill="#EA001B"/>
                                            <path d="M31.4936 4.0542C27.0221 7.53874 24.1523 12.9709 24.1523 19.0655C24.1523 25.1602 27.0221 30.5923 31.4936 34.0769C35.965 30.5923 38.8348 25.1602 38.8348 19.0655C38.8348 12.9709 35.965 7.55199 31.4936 4.0542Z" fill="#FF5F01"/>
                                            <path d="M62.4518 29.1901V28.5168H62.2823L62.0788 28.9881L61.8753 28.5H61.6888V29.1733H61.8075V28.6683L61.994 29.106H62.1296L62.3331 28.6683V29.1901H62.4518ZM61.3157 29.1901V28.6178H61.5531V28.5H60.9766V28.6178H61.214V29.1901H61.3157Z" fill="#F79F1A"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1144_11745">
                                                <rect width="62" height="39" fill="white" transform="translate(0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>MasterCard
                                </div>
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