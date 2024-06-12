<template lang="">
    <div>
        <Hero 
            title="Global Coverage"
            paragraph="With our extensive coverage, you can confidently expand their reach and serve customers in diverse markets without any barriers."
            image="global-coverage"
        />

        <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col text-center">
                    <div class="w-full md:w-3/4 mx-auto">
                        <ContentBlock 
                            title="Collect Payments anywhere around the globe!"
                            paragraph="MontyPay ensures your business can accept payments from customers in every corner of the world. We have a robust network of international partners and a presence in key markets, allowing us to facilitate transactions in multiple currencies and payment methods."
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="section-3" class="mt-16 lg:mt-48 py-16 lg:pb-36 bg-quaternary text-primary overflowhidden">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-24">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <div class="w-full lg:w-3/5">
                            <ContentBlock 
                                title="Competitive Pricing"
                                paragraph="We offer competitive pricing structures tailored to your specific business needs. Our transparent pricing model means you can maximize your revenue while providing top-notch payment experiences for your customers."
                            />
                            <ContentBlock 
                                title="Countries & Customized Payment Methods"
                                paragraph="Explore MontyPay, your ultimate global payment solution provider offering diverse payment methods tailored to various countries."
                                class="mt-10 lg:mt-20"
                            />
                        </div>
                        <div class="w-full lg:w-2/5 lg:-mt-36">
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
                        subtitle="Expand Your Business Horizons Worldwide"
                    />
                </div>

                <div class="flex flex-wrap justify-center gap-2 lg:gap-5 w-full lg:w-9/12 mt-16 lg:mt-36 mx-auto">
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 0 }"
                        @click="show(0)"
                    >
                        <h2 class="text-sm lg:text-xl">Lebanon</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 1 }"
                        @click="show(1)"
                    >
                        <h2 class="text-sm lg:text-xl">Jordan</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 2 }"
                        @click="show(2)"
                    >
                        <h2 class="text-sm lg:text-xl">Bahrain</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 3 }"
                        @click="show(3)"
                    >
                        <h2 class="text-sm lg:text-xl">UAE</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 4 }"
                        @click="show(4)"
                    >
                        <h2 class="text-sm lg:text-xl">Nigeria</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 5 }"
                        @click="show(5)"
                    >
                        <h2 class="text-sm lg:text-xl">EU & UK</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 6 }"
                        @click="show(6)"
                    >
                        <h2 class="text-sm lg:text-xl">Canada</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 7 }"
                        @click="show(7)"
                    >
                        <h2 class="text-sm lg:text-xl">USA</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 8 }"
                        @click="show(8)"
                    >
                        <h2 class="text-sm lg:text-xl">Kuwait</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 9 }"
                        @click="show(9)"
                    >
                        <h2 class="text-sm lg:text-xl">Indonesia</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
                        :class="{ 'bg-secondary': activeTab === 10 }"
                        @click="show(10)"
                    >
                        <h2 class="text-sm lg:text-xl">LATAM</h2>
                    </div>
                    <div 
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer" 
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
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

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/blom.svg" alt="Instore Payments" width="46" height="46" />
                                    Blom
                                </div>
                                <div class="flex items-center gap-4">
                                    <img src="/images/creditlibanais.svg" alt="Instore Payments" width="46" height="46" />
                                    Credit Libanais
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    AMEX
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/mada.svg" alt="Instore Payments" width="46" height="46" />
                                    MADA
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/knet.svg" alt="Instore Payments" width="46" height="46" />
                                    KNET
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/unionpay.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/applepay.svg" alt="Instore Payments" width="46" height="46" />
                                    ApplePay
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/ni.svg" alt="Instore Payments" width="46" height="46" />
                                    NI
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/meps.svg" alt="Instore Payments" width="46" height="46" />
                                    MEPS
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    AMEX
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/benefit.svg" alt="Instore Payments" width="46" height="46" />
                                    Benefit
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/knet.svg" alt="Instore Payments" width="46" height="46" />
                                    Knet
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/mada.svg" alt="Instore Payments" width="46" height="46" />
                                    Mada
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/maestro.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/applepay.svg" alt="Instore Payments" width="46" height="46" />
                                    ApplePay
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/afs.svg" alt="Instore Payments" width="46" height="46" />
                                    AFS
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    AMEX
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/unionpay.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/applepay.svg" alt="Instore Payments" width="46" height="46" />
                                    ApplePay
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/googlepay.svg" alt="Instore Payments" width="46" height="46" />
                                    GooglePay
                                </div>

                                <div class="flex items-center gap-4">
                                    <!-- <img src="/images/samsungpay.svg" alt="Instore Payments" width="46" height="46" /> -->
                                    SamsungPay
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/alipay.svg" alt="Instore Payments" width="46" height="46" />
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/stripe.svg" alt="Instore Payments" width="46" height="46" />
                                    Stripe	
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/safexpay.svg" alt="Instore Payments" width="46" height="46" />
                                    SafexPay	
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/bnpl.svg" alt="Instore Payments" width="46" height="46" />
                                    BNPL
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/verve.svg" alt="Instore Payments" width="46" height="46" />
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

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <!-- <img src="/images/bank-to-bank.svg" alt="Instore Payments" width="46" height="46" /> -->
                                    Bank to Bank Transfer
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    Amex
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/diners.svg" alt="Instore Payments" width="46" height="46" />
                                    Diners
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/discover.svg" alt="Instore Payments" width="46" height="46" />
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/jcb.svg" alt="Instore Payments" width="46" height="46" />
                                    JCB
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/mada.svg" alt="Instore Payments" width="46" height="46" />
                                    Mada
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/knet.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/applepay.svg" alt="Instore Payments" width="46" height="46" />
                                    ApplePay
                                </div>
                                

                                <div class="flex items-center gap-4">
                                    <img src="/images/alipay.svg" alt="Instore Payments" width="46" height="46" />
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/stripe.svg" alt="Instore Payments" width="46" height="46" />
                                    Stripe
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/unlimit.svg" alt="Instore Payments" width="46" height="46" />
                                    Unlimit
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/latpay.svg" alt="Instore Payments" width="46" height="46" />
                                    LatPay
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
                                    PayPal
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/coinspaid.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/diners.svg" alt="Instore Payments" width="46" height="46" />
                                    Diners
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/discover.svg" alt="Instore Payments" width="46" height="46" />
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/jcb.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/applepay.svg" alt="Instore Payments" width="46" height="46" />
                                    ApplePay
                                </div>
                                

                                <div class="flex items-center gap-4">
                                    <img src="/images/alipay.svg" alt="Instore Payments" width="46" height="46" />
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/diners.svg" alt="Instore Payments" width="46" height="46" />
                                    Diners
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/discover.svg" alt="Instore Payments" width="46" height="46" />
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/jcb.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/applepay.svg" alt="Instore Payments" width="46" height="46" />
                                    ApplePay
                                </div>
                                

                                <div class="flex items-center gap-4">
                                    <img src="/images/alipay.svg" alt="Instore Payments" width="46" height="46" />
                                    AliPay
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/knet.svg" alt="Instore Payments" width="46" height="46" />
                                    Knet
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/mada.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/applepay.svg" alt="Instore Payments" width="46" height="46" />
                                    ApplePay
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/nbk.svg" alt="Instore Payments" width="46" height="46" />
                                    NBK
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/jcb.svg" alt="Instore Payments" width="46" height="46" />
                                    JCB
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <img src="/images/discover.svg" alt="Instore Payments" width="46" height="46" />
                                    Discover
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/diners.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/virgo.svg" alt="Instore Payments" width="46" height="46" />
                                    VIRGO
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/ovo.svg" alt="Instore Payments" width="46" height="46" />
                                    OVO
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/shopeepay.svg" alt="Instore Payments" width="46" height="46" />
                                    Shopeepay
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/dana.svg" alt="Instore Payments" width="46" height="46" />
                                    Dana
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/doku.svg" alt="Instore Payments" width="46" height="46" />
                                    Doku
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/linkaja.svg" alt="Instore Payments" width="46" height="46" />
                                    Link Aja
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/doku.svg" alt="Instore Payments" width="46" height="46" />
                                    Doku
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    MasterCard
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/qris.svg" alt="Instore Payments" width="46" height="46" />
                                    QR Code (QRIS)
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/banktransfers.svg" alt="Instore Payments" width="46" height="46" />
                                    Bank Transfers
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/cashpayments.svg" alt="Instore Payments" width="46" height="46" />
                                    Cash Payments 
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/bnpl.svg" alt="Instore Payments" width="46" height="46" />
                                    BNPL 
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/webpay.svg" alt="Instore Payments" width="46" height="46" />
                                    Webpay (in 2 countries only)
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/diners.svg" alt="Instore Payments" width="46" height="46" />
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

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/payretailers.svg" alt="Instore Payments" width="46" height="46" />
                                    PayRetailers
                                </div>
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/cashpayments.svg" alt="Instore Payments" width="46" height="46" />
                                    Cash Payments
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/ewallets.svg" alt="Instore Payments" width="46" height="46" />
                                    e-wallets
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/banktransfers.svg" alt="Instore Payments" width="46" height="46" />
                                    Bank transfers (almost 100+ PM) 
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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
                                    <img src="/images/mastercard.svg" alt="Instore Payments" width="46" height="46" />
                                    Master Card
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/visa.svg" alt="Instore Payments" width="46" height="46" />
                                    Visa
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/amex.svg" alt="Instore Payments" width="46" height="46" />
                                    Amex
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/maestro.svg" alt="Instore Payments" width="46" height="46" />
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

                        <!-- <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Partners</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                               
                            </div>
                        </div> -->

                        <div class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">Other</h5>
                            </div>
                            
                            <hr class="w-full bg-[#F6F6F6]"/>
                        
                            <div class="flex flex-col gap-8 py-10">
                                <div class="flex items-center gap-4">
                                    <img src="/images/triplea.svg" alt="Instore Payments" width="46" height="46" />
                                    Triple A
                                </div>

                                <div class="flex items-center gap-4">
                                    <img src="/images/paypal.svg" alt="Instore Payments" width="46" height="46" />
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