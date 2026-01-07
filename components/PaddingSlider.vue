<template>
    <ClientOnly>
        <div class="container">
            <h2 v-if="title" class="text-3xl">{{ title }}</h2>
            <p class="text-xl mt-4" v-if="subtitle">{{ subtitle }}</p>
        </div>
        <div class="ms-container-align">
            <div class="mt-12">
                <div v-if="data">
                    <div class="relative">
                        <swiper-container
                            :modules="[Autoplay]"
                            :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
                            slides-per-view="3.5"
                            space-between="15"
                            :breakpoints="{
                                320: { slidesPerView: 1.25 },
                                768: { slidesPerView: 2.5 },
                                992: { slidesPerView: 3.5 }
                            }"
                        >
                            <swiper-slide v-for="(da,indx) in data" :key="indx" class="h-auto flex">
                                <div class="bg-[#E9ECF4] p-4 lg:p-8 rounded-xl">
                                    <div>
                                        <img :src="da.image" :alt="da.title" />
                                    </div>
                                    <p class="text-xl font-bold mt-4">{{ da.title }}</p>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
    const props = defineProps(['title','data','subtitle']);
    import {Autoplay } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
</script>

<style lang="css" scoped>
   
</style>
