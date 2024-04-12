<template lang="">
    <div>
        <Hero 
            title="Global Coverage"
            paragraph="MontyPay Payment Gateway spans the globe, ensuring that your business can accept payments from customers in virtually every corner of the world"
            image="global-coverage"
        />

        <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col text-center">
                    <div class="w-full md:w-3/4 mx-auto">
                        <ContentBlock 
                            title="Collect Payments anywhere around the globe!erage"
                            paragraph="MontyPay ensures your business can accept payments from customers in every corner of the world. We have a robust network of international partners and a presence in key markets, allowing us to facilitate transactions in multiple currencies and payment methods."
                        />
                    </div>
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
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 0 }"
                        @click="show(0)"
                    >
                        <h2 class="text-sm lg:text-xl">Lebanon</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 1 }"
                        @click="show(1)"
                    >
                        <h2 class="text-sm lg:text-xl">Jordan</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 2 }"
                        @click="show(2)"
                    >
                        <h2 class="text-sm lg:text-xl">Bahrain</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 3 }"
                        @click="show(3)"
                    >
                        <h2 class="text-sm lg:text-xl">UAE</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 4 }"
                        @click="show(4)"
                    >
                        <h2 class="text-sm lg:text-xl">Nigeria</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 5 }"
                        @click="show(5)"
                    >
                        <h2 class="text-sm lg:text-xl">EU & UK</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 6 }"
                        @click="show(6)"
                    >
                        <h2 class="text-sm lg:text-xl">Canada</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 7 }"
                        @click="show(7)"
                    >
                        <h2 class="text-sm lg:text-xl">USA</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 8 }"
                        @click="show(8)"
                    >
                        <h2 class="text-sm lg:text-xl">Kuwait</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 9 }"
                        @click="show(9)"
                    >
                        <h2 class="text-sm lg:text-xl">Indonesia</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 10 }"
                        @click="show(10)"
                    >
                        <h2 class="text-sm lg:text-xl">LATAM</h2>
                    </div>
                    <div 
                        class="py-2 lg:py-4 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 11 }"
                        @click="show(11)"
                    >
                        <h2 class="text-sm lg:text-xl">Australia</h2>
                    </div>
                </div>
        
                <div class="p-10 mt-8 lg:mt-16 bg-primary rounded-lg">
                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 0 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    AMEX
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Blom
                                </div>
                                <div class="flex items-center gap-4">
                                    Credit Libanais
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 1 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    AMEX
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    MADA
                                </div>

                                <div class="flex items-center gap-4">
                                    KNET
                                </div>

                                <div class="flex items-center gap-4">
                                    UnionPay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    ApplePay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    NI
                                </div>

                                <div class="flex items-center gap-4">
                                    MEPS
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 2 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    AMEX
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    Benefit
                                </div>

                                <div class="flex items-center gap-4">
                                    Knet
                                </div>

                                <div class="flex items-center gap-4">
                                    Mada
                                </div>

                                <div class="flex items-center gap-4">
                                    Maestro
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    ApplePay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    AFS
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 3 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    AMEX
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    UnionPay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    ApplePay
                                </div>

                                <div class="flex items-center gap-4">
                                    GooglePay
                                </div>

                                <div class="flex items-center gap-4">
                                    SamsungPay
                                </div>

                                <div class="flex items-center gap-4">
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Stripe	
                                </div>

                                <div class="flex items-center gap-4">
                                    SafexPay	
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    BNPL
                                </div>

                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 4 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Verve
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Bank to Bank Transfer
                                </div>

                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 5 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Amex
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    Diners
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    JCB
                                </div>

                                <div class="flex items-center gap-4">
                                    Mada
                                </div>

                                <div class="flex items-center gap-4">
                                    Knet
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">

                                <div class="flex items-center gap-4">
                                    ApplePay
                                </div>
                                

                                <div class="flex items-center gap-4">
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Stripe
                                </div>

                                <div class="flex items-center gap-4">
                                    Unlimit
                                </div>

                                <div class="flex items-center gap-4">
                                    LatPay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>

                                <div class="flex items-center gap-4">
                                    Coinspaid
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 6 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    Diners
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    JCB
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">

                                <div class="flex items-center gap-4">
                                    ApplePay
                                </div>
                                

                                <div class="flex items-center gap-4">
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 7 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    Diners
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    JCB
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">

                                <div class="flex items-center gap-4">
                                    ApplePay
                                </div>
                                

                                <div class="flex items-center gap-4">
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 8 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    Knet
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    Mada
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    ApplePay
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    NBK
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 9 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    JCB
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    Diners
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    VIRGO
                                </div>

                                <div class="flex items-center gap-4">
                                    OVO
                                </div>

                                <div class="flex items-center gap-4">
                                    SHOPEEPAY
                                </div>

                                <div class="flex items-center gap-4">
                                    DANA
                                </div>

                                <div class="flex items-center gap-4">
                                    Doku
                                </div>

                                <div class="flex items-center gap-4">
                                    Link Aja
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Doku
                                </div>

                                <div class="flex items-center gap-4">
                                    MasterCard
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    QR Code (QRIS)
                                </div>

                                <div class="flex items-center gap-4">
                                    Bank Transfers
                                </div>

                                <div class="flex items-center gap-4">
                                    Cash Payments 
                                </div>

                                <div class="flex items-center gap-4">
                                    BNPL 
                                </div>

                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal 
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 10 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    Webpay (in 2 countries only)
                                </div>

                                <div class="flex items-center gap-4">
                                    Diners
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    PayRetailers
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Cash Payments
                                </div>

                                <div class="flex items-center gap-4">
                                    e-wallets
                                </div>

                                <div class="flex items-center gap-4">
                                    Bank transfers (almost 100+ PM) 
                                </div>

                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300" 
                        :class="{ 'absolute invisible opacity-0': activeTab !== 11 }"
                    >
                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Cards</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    Maestro
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Digital Wallets</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                               
                            </div>
                        </div>

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    PayPal 
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