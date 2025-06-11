<template>
    <ClientOnly>
        <section class="relative lg:py-16 max-lg:16 bg-[#0E153A]">
            <img src="/blue-shape-bg.webp" class="absolute z-0 top-0 left-0 w-full h-full object-cover" alt="blue-bg"/>
            <div class="ml-container-align">
                <h2 class="text-white text-2xl font-bold">{{ title }}</h2>
            </div>
            
            <div class="ml-container-align">
                <div class="mt-10">
                    <div v-if="data">
                        <div class="relative">
                            <swiper
                                    :modules="[Autoplay]"
                                    :autoplay="{ delay: 3000, pauseOnMouseEnter: true}"
                                    slides-per-view="3.5"
                                    space-between="15"
                                    :breakpoints = "{
                                        320: {
                                            slidesPerView: 1.25
                                        },
                                        768: {
                                            slidesPerView: 2.5
                                        },
                                        992: {
                                            slidesPerView: 3.5
                                        }
                                    }"
                            >
                                <swiper-slide v-for="(da,indx) in data" :key="indx" class="h-auto flex">
                                    <div class="bg-white p-4 rounded-xl flex flex-col justify-between">
                                        <div>
                                            <h4 class="text-xl font-bold mt-4">{{ da.title }}</h4>
                                            <p class="mt-4">{{ da.description }}</p>
                                        </div>
                                        
                                        <div class="bg-[#E6EEF5] rounded-2xl max-lg:h-[200px] lg:h-[300px] p-5 flex items-center justify-center mt-7">
                                            <img class="w-full h-full object-contain" :src="da.image" :alt="da.title" />
                                        </div>
                                        
                                    </div>
                                </swiper-slide>
                            </swiper>

                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
    </ClientOnly>
</template>

<script setup>
    const props = defineProps(['title','data']);
    import {Autoplay } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
</script>

<style lang="css" scoped>
   
</style>
