<template>
    <section class="relative max-lg:py-10 lg:py-24 bg-[#0F0C22] text-white">
        <img src="/pattern-bg-2.webp" alt="BG Pattern" class="absolute top-0 start-0 object-cover w-full h-full"/>
        <div class="container">
            <h2 class="text-3xl font-bold">{{ t('Pages.Online Payments.Section 5.Title')}}</h2>
            <h3 class="text-xl font-bold mt-6">{{ t('Pages.Online Payments.Section 5.Sub Title 1')}}</h3>
            <p class="lg:w-2/3 text-xl mt-6">{{ t('Pages.Online Payments.Section 5.Description 1')}}</p>

            <div class="flex max-lg:flex-col items-center justify-between gap-10 mt-12">
                <div class="w-full">
                    <h3 class="text-xl font-bold">{{ t('Pages.Online Payments.Section 5.Sub Title 2')}}</h3>
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
                    <p class="text-xl font-normal mt-10">{{ t('Pages.Online Payments.Section 5.Description 2') }}</p>
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
    const { t, locale, setLocale } = useI18n()
    const needs = [
        {
            icon: '/track-your-sales.svg',
            title: t('Pages.Online Payments.Section 5.Cards 1[0].Title'),
            description: t('Pages.Online Payments.Section 5.Cards 1[0].Description')
        },
        {
            icon: '/manage-transactions.svg',
            title: t('Pages.Online Payments.Section 5.Cards 1[1].Title'),
            description: t('Pages.Online Payments.Section 5.Cards 1[1].Description')
        },
        {
            icon: '/send-payment-links.svg',
            title: t('Pages.Online Payments.Section 5.Cards 1[2].Title'),
            description: t('Pages.Online Payments.Section 5.Cards 1[2].Description')
        },
        {
            icon: '/access-advanced-analytics.svg',
            title: t('Pages.Online Payments.Section 5.Cards 1[3].Title'),
            description: t('Pages.Online Payments.Section 5.Cards 1[3].Description')
        },
        {
            icon: '/stay-connected.svg',
            title: t('Pages.Online Payments.Section 5.Cards 1[4].Title'),
            description: t('Pages.Online Payments.Section 5.Cards 1[4].Description')
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