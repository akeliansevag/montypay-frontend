<template lang="">
    <div>
        <section id="section-6" class="my-16 lg:my-36">
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
        </section>
    </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth'

useSeoMeta({
    title: 'Seamless Checkout with PayPal',
    ogTitle: 'Seamless Checkout with PayPal',
    description: 'Connect to Paypal and enjoy seamless checkouts with MontyPay that is committed to help maximize your revenue and provide top-notch payment experiences.',
    ogDescription: 'Connect to Paypal and enjoy seamless checkouts with MontyPay that is committed to help maximize your revenue and provide top-notch payment experiences.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const response = ref(null);

const submitRequest = async () => {
    const accessToken = await useAuth();
    if (!accessToken) {
        console.error('Failed to retrieve access token');
        return;
    }

    try {
        const result = await fetch('https://api-m.sandbox.paypal.com/v2/customer/partner-referrals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                "tracking_id": "testenterprices123122",
                "partner_config_override": {
                    "return_url": "https://montypay.com/global-coverage",
                    "return_url_description": "Thank you.",
                    "show_add_credit_card": true
                },
                "operations": [{
                    "operation": "API_INTEGRATION",
                    "api_integration_preference": {
                        "rest_api_integration": {
                            "integration_method": "PAYPAL",
                            "integration_type": "THIRD_PARTY",
                            "third_party_details": {
                                "features": ["PAYMENT", "REFUND", "PARTNER_FEE"]
                            }
                        }
                    }
                }],
                "products": [
                    "PPCP"
                ],
                "legal_consents": [{
                    "type": "SHARE_DATA_CONSENT",
                    "granted": true
                }]
            })
        });

        if (!result.ok) {
            throw new Error('Failed to submit request');
        }

        const responseData = await result.json();
        response.value = responseData;

        // Extract action_url from the response
        const actionUrl = responseData.links.find(link => link.rel === 'action_url').href;
        
        // Redirect to the action_url
        window.location.href = actionUrl;  // Use window.location.href for external URL redirection
    } catch (error) {
        console.error('Error:', error);
    }
};

</script>

<style lang="">

</style>