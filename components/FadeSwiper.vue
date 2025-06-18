<template>
    <ClientOnly>
        <div class="container">
            <h2 v-if="title" class="text-3xl">{{ title }}</h2>
            <p class="text-xl mt-4" v-if="subtitle">{{ subtitle }}</p>
            <div :class="reverse && 'flex-row-reverse'" class="flex mt-12 rounded-xl overflow-hidden max-lg:flex-col  lg:h-[500px]">
                <div class="lg:w-1/2 bg-gradient-to-r from-[#E6EBF3] to-[#E6F1F6] max-lg:py-10 lg:py-16">
                    <div v-if="data" class="flex flex-col justify-center h-full p-4">
                        <div class="relative">
                            <swiper
                                    :modules="[EffectFade,Pagination,Controller,Autoplay]"
                                    effect="fade"
                                    :fadeEffect="{ crossFade: true }"
                                    :pagination="{ el: `#${uniqueId}`, clickable: true }"
                                    @swiper="setFirstSwiper"
                                    :controller="{ control: secondSwiper }"
                                    :autoplay="{ delay: 3000, pauseOnMouseEnter: true}"
                            >
                                <swiper-slide v-for="(da,indx) in data" :key="indx">
                                    <div class="max-w-[400px] mx-auto">
                                        <h3 class="text-3xl font-bold mb-2">{{ da.title }}</h3>
                                        <p class="text-xl">{{ da.description }}</p>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div :id="uniqueId" class="custom-pagination mt-6 flex justify-center"></div>
                </div>
                <div class="lg:w-1/2 bg-gradient-to-r from-[#D2EAF1] to-[#E7F2F7] max-lg:px-4 lg:px-6 max-lg:py-4 lg:py-6 overflow-hidden" :class="noPadding && 'lg:!pb-0 max-lg:!pb-0'">
                    <swiper
                        :modules="[EffectFade,Controller]"
                        effect="fade"
                        :fadeEffect="{ crossFade: true }"
                        class="w-full h-full"
                        @swiper="setSecondSwiper"
                        :controller="{ control: firstSwiper }"
                    >
                        <swiper-slide v-for="(d,ind) in data" :key="ind" class="flex items-center h-full flex-col justify-center">
                            <img class="w-full" :src="d.image" :alt="d.title">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
    const props = defineProps(['reverse','title','data','subtitle','noPadding','uniqueId']);
    const uniqueId = `custom-pagination-${Math.random().toString(36).substr(2, 9)}`;
    import { EffectFade, Pagination, Controller, Autoplay } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/pagination';

    const firstSwiper = ref(null);
    const secondSwiper = ref(null);
    const setFirstSwiper = (swiper) => {
        firstSwiper.value = swiper;
    };
    const setSecondSwiper = (swiper) => {
        secondSwiper.value = swiper;
    };

</script>

<style lang="css" scoped>
    ::v-deep(.custom-pagination){
        bottom:0;
    }

    ::v-deep(.swiper-pagination-bullet-active) {
        background: #233F94;
    }
</style>
