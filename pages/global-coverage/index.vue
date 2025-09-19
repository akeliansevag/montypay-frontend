<template lang="">
    <div>
        <Hero 
            title="Global Coverage"
            paragraph="With our extensive coverage, you can confidently expand their reach and serve customers in diverse markets without any barriers."
            image="global-coverage"
            hero="99"
        />

        <!-- <section id="section-2" class="pt-16 lg:pt-36">
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
                                format="webp" 
                                src="/images/competitive-pricing.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <section id="section-2" class="py-16 lg:py-36 bg-[#F6F6F6] overflow-hidden">
            <div class="container">
                <div class="w-full lg:w-3/4 mx-auto text-center">
                    <ContentBlock 
                        title="Global Coverage"
                        subtitle="Expand Your Business Horizons Worldwide"
                    />
                </div>

                <div class="flex flex-wrap justify-center gap-2 lg:gap-5 w-full lg:w-9/12 mt-16 lg:mt-36 mx-auto">
                    <div
                        v-for="(country, index) in paymentData"
                        :key="index"
                        class="py-1 lg:py-2 px-2 lg:px-6 bg-primary rounded-lg text-center cursor-pointer"
                        :class="{ 'bg-secondary': selectedCountry === country.country }"
                        @click="setCountry(country.country)"
                    > 
                        <h2 class="text-sm lg:text-xl">{{country.country}}</h2>
                    </div>
                </div>
        
                <div class="p-10 mt-8 lg:mt-16 bg-primary rounded-lg">
                    <div class="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center transition-opacity ease-in-out duration-300">
                        <div v-for="(category, index) in selectedData" :key="index" class="flex-1">
                            <div class="flex flex-col py-5">
                                <h5 class="font-bold">{{ category.title }}</h5>
                            </div>
                            <hr class="w-full bg-[#F6F6F6]" />
                            <div class="flex flex-col gap-8 py-10">
                                <div v-for="(item, itemIndex) in category.items" :key="itemIndex" class="flex items-center gap-4">
                                    <img :src="item.img" :alt="item.name" width="70" height="46" />
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <section id="section-6" class="my-16 lg:my-36">
            <div class="container">
                <div class="mt-16 text-primary">
                    <div class="flex flex-col gap-8 border rounded-lg py-20 px-20 bg-quaternary overflow-hidden">
                        
                        <h2 class="text-4xl">Seamless Checkout with PayPal</h2>
                        <p class="w-full md:w-3/5 text-lg">At MontyPay, we understand the importance of cost-effective payment processing. That's why we offer competitive pricing structures tailored to your specific business needs. Our transparent pricing model ensures you'll always know what you're paying for, with no hidden fees or surprises. Plus, our commitment to fair pricing means you can maximize your revenue while providing top-notch payment experiences for your customers.</p>
                        <button @click="submitRequest" class="mp-button-secondary px-16">Connect to PayPal <Icon name="fa6-solid:arrow-right" class="icon" /></button>
                        <img src="/images/paypal-1.svg" alt="Paypal" class="md:absolute md:bottom-20 md:right-20" width="" height="" />
                    </div>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script setup>
    import { useAuth } from '~/composables/useAuth'

    useSeoMeta({
        title: 'Expand your Business',
        ogTitle: 'Expand your Business',
        description: 'Expand your business horizons worldwide confidently with our global coverage and serve customers in diverse markets without any barriers.',
        ogDescription: 'Expand your business horizons worldwide confidently with our global coverage and serve customers in diverse markets without any barriers.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const paymentData = [
        {
            country: "Lebanon",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { name: "Mastercard", img: "/images/mastercard.svg" },
                        { name: "Visa", img: "/images/visa.svg" },
                        { name: "AMEX", img: "/images/amex.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { name: "MyMonty", img: "/images/mymonty.svg" },
                        { name: "Whish", img: "/images/whish.svg" },
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { name: "Cryptocurrency", img: "/images/crypto.svg" },
                        { name: "OMT", img: "/images/omt.svg" }
                    ]
                }
            ]
        },
        {
            country: "Jordan",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { name: "Mastercard", img: "/images/mastercard.svg" },
                        { name: "Visa", img: "/images/visa.svg" },
                        { name: "AMEX", img: "/images/amex.svg" },
                        { name: "Mada", img: "/images/mada.svg" },
                        { name: "Knet", img: "/images/knet.svg" },
                        { name: "UnionPay", img: "/images/unionpay.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { name: "Apple Pay", img: "/images/applepay.svg" },
                        { name: "PayPal", img: "/images/paypal.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: []
                    
                }
            ]
        },
        {
            country: "Bahrain",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { name: "Mastercard", img: "/images/mastercard.svg" },
                        { name: "Visa", img: "/images/visa.svg" },
                        { name: "AMEX", img: "/images/amex.svg" },
                        { name: "Benefit", img: "/images/benefit.svg" },
                        { name: "Knet", img: "/images/knet.svg" },
                        { name: "Mada", img: "/images/mada.svg" },
                        { name: "Maestro", img: "/images/maestro.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { name: "Apple Pay", img: "/images/applepay.svg" },
                        { name: "PayPal", img: "/images/paypal.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: []
                    
                }
            ]
        },
        {
            country: "UAE",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "UnionPay", "img": "/images/unionpay.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "Apple Pay", "img": "/images/applepay.svg" },
                        { "name": "PayPal", "img": "/images/paypal.svg" },
                        { "name": "Google Pay", "img": "/images/googlepay.svg" },
                        { "name": "Samsung Pay", "img": "/images/samsungpay.svg" },
                        { "name": "Alipay", "img": "/images/alipay.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "BNPL", "img": "/images/bnpl.svg" },
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "Nigeria",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "Verve", "img": "/images/verve.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "PayPal", "img": "/images/paypal.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "Bank Transfers", "img": "/images/bank-transfers.svg" },
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "EU & UK",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "Diners", "img": "/images/diners.svg" },
                        { "name": "Discover", "img": "/images/discover.svg" },
                        { "name": "JCB", "img": "/images/jcb.svg" },
                        { "name": "Mada", "img": "/images/mada.svg" },
                        { "name": "Knet", "img": "/images/knet.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "Apple Pay", "img": "/images/applepay.svg" },
                        { "name": "PayPal", "img": "/images/paypal.svg" },
                        { "name": "Alipay", "img": "/images/alipay.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "Canada",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "Diners", "img": "/images/diners.svg" },
                        { "name": "Discover", "img": "/images/discover.svg" },
                        { "name": "JCB", "img": "/images/jcb.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "Apple Pay", "img": "/images/applepay.svg" },
                        { "name": "PayPal", "img": "/images/paypal.svg" },
                        { "name": "Alipay", "img": "/images/alipay.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "USA",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "Diners", "img": "/images/diners.svg" },
                        { "name": "Discover", "img": "/images/discover.svg" },
                        { "name": "JCB", "img": "/images/jcb.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "Apple Pay", "img": "/images/applepay.svg" },
                        { "name": "PayPal", "img": "/images/paypal.svg" },
                        { "name": "Alipay", "img": "/images/alipay.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "Kuwait",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "Knet", "img": "/images/knet.svg" },
                        { "name": "Mada", "img": "/images/mada.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "Apple Pay", "img": "/images/applepay.svg" },
                        { "name": "PayPal", "img": "/images/paypal.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: []
                }
            ]
        },
        {
            country: "Indonesia",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "JCB", "img": "/images/jcb.svg" },
                        { "name": "Discover", "img": "/images/discover.svg" },
                        { "name": "Diners", "img": "/images/diners.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "PayPal", "img": "/images/paypal.svg" },
                        { "name": "Virgo", "img": "/images/virgo.svg" },
                        { "name": "OVO", "img": "/images/ovo.svg" },
                        { "name": "ShopeePay", "img": "/images/shopeepay.svg" },
                        { "name": "Dana", "img": "/images/dana.svg" },
                        { "name": "Doku", "img": "/images/doku.svg" },
                        { "name": "LinkAja", "img": "/images/linkaja.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "QR Code (QRIS)", "img": "/images/qris.svg" },
                        { "name": "Bank Transfers", "img": "/images/bank-transfer.svg" },
                        { "name": "Cash Payments", "img": "/images/cash-payments.svg" },
                        { "name": "BNPL", "img": "/images/bnpl.svg" },
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "LATAM",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "WebPay (in 2 countries only)", "img": "/images/webpay.svg" },
                        { "name": "Diners", "img": "/images/diners.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "PayPal", "img": "/images/paypal.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "Cash Payments", "img": "/images/cash-payments.svg" },
                        { "name": "E-Wallets", "img": "/images/ewallets.svg" },
                        { "name": "Bank Transfers (almost 100+ PM)", "img": "/images/bank-transfers.svg" },
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "Australia",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "AMEX", "img": "/images/amex.svg" },
                        { "name": "Maestro", "img": "/images/maestro.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "PayPal", "img": "/images/paypal.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "Qatar",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "QPAY", "img": "/images/qpay.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "Apple Pay", "img": "/images/applepay.svg" },
                    ]
                },
                {
                    title: "Other",
                    items: [
                        { "name": "Cryptocurrency", "img": "/images/crypto.svg" }
                    ]
                }
            ]
        },
        {
            country: "Saudi Arabia",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "Amex", "img": "/images/amex.svg" },
                        { "name": "Mada", "img": "/images/mada.svg" }
                    ]
                },
                {
                    title: "Digital Wallets",
                    items: [
                        { "name": "Apple Pay", "img": "/images/applepay.svg" },
                        { "name": "Google Pay", "img": "/images/googlepay.svg" }
                    ]
                },
                {
                    title: "Other",
                    items: [
                    ]
                }
            ]
        },
        {
            country: "Ghana",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "Amex", "img": "/images/amex.svg" },
                    ]
                },
                {
                    title: "Mobile Money",
                    items: [
                        { "name": "Airtel Money", "img": "/images/airtel-money.svg" },
                        { "name": "Tigo", "img": "/images/tigo.svg" },
                        { "name": "MTN", "img": "/images/mtn.svg" },
                        { "name": "Mpesa", "img": "/images/mpesa.svg" },
                        { "name": "Vodafone", "img": "/images/vodafone.svg" },
                    ]
                },
                {
                    title: "Other",
                    items: [
                    ]
                }
            ]
        },
        {
            country: "South Africa",
            categories: [
                {
                    title: "Cards",
                    items: [
                        { "name": "Mastercard", "img": "/images/mastercard.svg" },
                        { "name": "Visa", "img": "/images/visa.svg" },
                        { "name": "Amex", "img": "/images/amex.svg" },
                    ]
                },
                {
                    title: "EFT",
                    items: [
                        { "name": "Electronic Funds Transfer", "img": "/images/eft.svg" },
                    ]
                },
                {
                    title: "Other",
                    items: [
                    ]
                }
            ]
        }
    ];

    const selectedCountry = ref(paymentData[0].country);
    const selectedData = ref(paymentData.find(c => c.country === selectedCountry.value)?.categories || []);

    const setCountry = (country) => {
    selectedCountry.value = country;
    selectedData.value = paymentData.find(c => c.country === country).categories || [];
    };


    // const response = ref(null);

    // const submitRequest = async () => {
    //     const accessToken = await useAuth();
    //     if (!accessToken) {
    //         console.error('Failed to retrieve access token');
    //         return;
    //     }

    //     try {
    //         const result = await fetch('https://api-m.sandbox.paypal.com/v2/customer/partner-referrals', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${accessToken}`
    //             },
    //             body: JSON.stringify({
    //                 "email": "accountemail@example.com",
    //                 "tracking_id": "testenterprices123122",
    //                 "partner_config_override": {
    //                     "return_url": "https://montypay.com/global-coverage",
    //                     "return_url_description": "Thank you.",
    //                     "show_add_credit_card": true
    //                 },
    //                 "operations": [{
    //                     "operation": "API_INTEGRATION",
    //                     "api_integration_preference": {
    //                         "rest_api_integration": {
    //                             "integration_method": "PAYPAL",
    //                             "integration_type": "THIRD_PARTY",
    //                             "third_party_details": {
    //                                 "features": ["PAYMENT", "REFUND", "PARTNER_FEE"]
    //                             }
    //                         }
    //                     }
    //                 }],
    //                 "products": [
    //                     "PAYMENT_METHODS"
    //                 ],
    //                 "capabilities": [
    //                     "APPLE_PAY"
    //                 ],
    //                 "legal_consents": [{
    //                     "type": "SHARE_DATA_CONSENT",
    //                     "granted": true
    //                 }]
    //             })
    //         });

    //         if (!result.ok) {
    //             throw new Error('Failed to submit request');
    //         }

    //         const responseData = await result.json();
    //         response.value = responseData;

    //         // Extract action_url from the response
    //         const actionUrl = responseData.links.find(link => link.rel === 'action_url').href;
            
    //         // Redirect to the action_url
    //         window.location.href = actionUrl;  // Use window.location.href for external URL redirection
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

</script>

<style lang="">

</style>