<template>
    <Section>
        <div class="container">
            <div class="flex flex-col gap-10">
                <h2 class="text-center text-3xl">Our Payment Solutions</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <NuxtLink :to="item.link" v-for="item in paymentSolutions" :key="item.title" class="border border-[#D9D9D9/50] rounded-lg p-3 pb-7 shadow-md block">
                        <div class="bg-[#f6f6f6] h-[300px] p-8">
                            <img :alt="item.alt" :src="item.img" alt="Payment Solution" class="h-full w-full object-contain">
                        </div>
                        <div class="mt-3">
                            <h3 class="text-lg font-bold">{{ item.title }}</h3>
                            <p class="text-sm">{{ item.description }}</p>
                        </div>
                        
                    </NuxtLink>
                </div>
            </div>
        </div>
    </Section>
</template>

<script setup>
const paymentSolutions = [
        {
            img: '/images/sol-11.webp',
            title: 'Online Payments',
            description: 'Payment Gateway',
            alt: 'Online Payments',
            link: '/online-payments'
        },
        {
            img: '/images/sol-22.webp',
            title: 'In-Store Payments',
            description: 'Smart POS',
            alt: 'MontyPay Smart POS',  
            link: '/smart-pos'
        },
        {
            img: '/images/sol-33.webp',
            title: 'In-Store Payments',
            description: 'Soft POS',
            alt: 'MontyPay Soft POS - Image 1',
            link: '/soft-pos'
        },
        {
            img: '/images/sol-44.webp',
            title: 'Qcheck',
            description: 'Pay at table',
            alt: 'Q Check',
            link: '/q-check'
        },
    ]

</script>

