<template>
    <section class="relative max-lg:py-10 lg:py-24 bg-[#0F0C22] text-white">
        <img src="/pattern-bg-2.webp" alt="BG Pattern" class="absolute top-0 left-0 object-cover w-full h-full"/>
        <div class="container">
            <h2 class="text-3xl font-bold">Merchant Mobile App </h2>
            <h3 class="text-xl font-bold mt-6">Your Business, Always in Your Hands</h3>
            <p class="lg:w-1/2 mt-6">With the MontyPay Merchant Mobile App, you can run your business no matter where you are. Packed with powerful tools and a user-friendly design, it’s like carrying your entire business in your pocket. </p>

            <div class="flex max-lg:flex-col items-center justify-between gap-10 mt-7">
                <div class="w-full">
                    <h3 class="text-xl font-bold mt-6">It Has Everything You Need: </h3>
                    <div class="flex flex-col gap-7 mt-7">
                        <div class="flex max-lg:flex-col gap-5 p-8 bg-[#FFFFFF0D] rounded-xl backdrop-blur-md" v-for="(need,inx) in needs" :key="inx">
                            <div>
                                <img :src="need.icon" :alt="need.title"/>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold leading-none mb-2">{{ need.title }}</h4>
                                <p>{{ need.description }}</p>
                            </div>
                        </div>
                    </div>
                    <p class=" font-normal mt-10"><strong>MontyPay’s merchant mobile app</strong> ensures you’re always in control. It’s all right there, in the <strong>palm of your hand.</strong> </p>
                </div>
                <div class="w-full h-full">
                    <div class="">
                        <!-- url="https://prod.spline.design/YjilrVqHEgRC0AGl/scene.splinecode" -->
                        <ClientOnly>
                            <div ref="containerRef" class="w-full h-full relative">
                                <spline-viewer
                                    v-if="ready"
                                    url="https://prod.spline.design/l4YnsdzfdrnAIkin/scene.splinecode"
                                    style="width: 100%; height: 100%; display: block"
                                />
                            </div>                         
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const needs = [
        {
            icon: '/track-your-sales.svg',
            title: 'Track Your Sales',
            description: 'Stay updated on your performance in real-time. '
        },
        {
            icon: '/manage-transactions.svg',
            title: 'Manage Transactions',
            description: 'View, control, and organize all your payments whenever and wherever.'
        },
        {
            icon: '/send-payment-links.svg',
            title: 'Send Payment Links',
            description: 'No delays, create and share payment links with just a few taps. '
        },
        {
            icon: '/access-advanced-analytics.svg',
            title: 'Access Advanced Analytics',
            description: 'Dive into detailed insights to understand your sales trends and customer behavior better.'
        },
        {
            icon: '/stay-connected.svg',
            title: 'Stay Connected',
            description: 'From the app to the dashboard, switch seamlessly and manage it all with ease. '
        }
    ]

    const containerRef = ref(null);
    const ready = ref(false);
    let resizeObserver = null;
    let timeout = null;

    onMounted(async () => {
        await import('@splinetool/viewer');
        ready.value = true;
    });

    const styleCanvas = () => {
        const viewer = document.querySelector('spline-viewer');
        if (viewer?.shadowRoot) {
            const canvas = viewer.shadowRoot.querySelector('canvas');
            if (canvas) {
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.cursor = 'default';
                canvas.style.pointerEvents = 'none';
            }
        }
    };

    watch(ready, (isReady) => {
        if (!isReady) return;

        timeout = setTimeout(styleCanvas, 100);

        if (containerRef.value) {
            resizeObserver = new ResizeObserver(() => {
                styleCanvas();
            });
            resizeObserver.observe(containerRef.value);
        }
    });

    onBeforeUnmount(() => {
        if (resizeObserver) resizeObserver.disconnect();
            if (timeout) clearTimeout(timeout);
    });
    
</script>

<style lang="css" scoped>
    
</style>