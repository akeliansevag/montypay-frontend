<template>
    <Section>
        <div class="container">
            <div class="flex flex-col gap-10">
                <h2 class="text-center text-4xl">Our Payment Solutions</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
                    <div v-for="item in paymentSolutions" :key="item.title" class="border border-[#D9D9D9/50] rounded-lg p-3 pb-7 shadow-md">
                        <div class="bg-[#f6f6f6] h-[300px] p-8">
                            <img :alt="item.alt" :src="item.img" alt="Payment Solution" class="h-full w-full object-contain">
                        </div>
                        <div class="mt-3">
                            <h3 class="text-lg font-bold">{{ item.title }}</h3>
                            <p class="text-sm">{{ item.description }}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script setup>
const paymentSolutions = [
        {
            img: '/images/soft-pos/qcheck.webp',
            title: 'Online Payments',
            description: 'Payment Gateway',
            alt: 'Online Payments',
        },
        {
            img: '/images/soft-pos/sol-2.webp',
            title: 'In-Store Payments',
            description: 'Smart POS',
            alt: 'MontyPay Smart POS',
        },
        {
            img: '/images/soft-pos/sol-3.webp',
            title: 'In-Store Payments',
            description: 'Soft POS',
            alt: 'MontyPay Soft POS - Image 1',
        },
        {
            img: '/images/soft-pos/sol-4.webp',
            title: 'Qcheck',
            description: 'Pay at table',
            alt: 'QCheck',
        },
    ]

</script>

