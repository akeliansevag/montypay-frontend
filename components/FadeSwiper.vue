<template>
  <ClientOnly>
    <div class="container">
      <h2 v-if="title" class="text-3xl">{{ title }}</h2>
      <p v-if="subtitle" class="text-xl mt-4">{{ subtitle }}</p>

      <div
        class="flex mt-12 rounded-xl overflow-hidden max-lg:flex-col lg:h-[500px]"
        :class="reverse && 'flex-row-reverse'"
      >
        <!-- LEFT SECTION (TEXT SWIPER) -->
        <div
          class="lg:w-1/2 bg-gradient-to-r from-[#E6EBF3] to-[#E6F1F6] max-lg:py-10 lg:py-16"
        >
          <div v-if="data" class="flex flex-col justify-center h-full p-4">
            <ClientOnly>
              <Swiper
                :modules="[EffectFade, Pagination, Controller, Autoplay]"
                effect="fade"
                :fadeEffect="{ crossFade: true }"
                :pagination="{ clickable: true }"
                :controller="{ control: secondSwiper }"
                :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
                @swiper="setFirstSwiper"
                class="fade-swiper"
              >
                <SwiperSlide
                  v-for="(da, indx) in data"
                  :key="indx"
                  class="flex justify-center items-center text-center"
                >
                  <div class="max-w-[400px] mx-auto">
                    <h3 class="text-3xl font-bold mb-2">{{ da.title }}</h3>
                    <p class="text-xl">{{ da.description }}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>

          <div class="custom-pagination mt-6 flex justify-center"></div>
        </div>

        <!-- RIGHT SECTION (IMAGE SWIPER) -->
        <div
          class="lg:w-1/2 bg-gradient-to-r from-[#D2EAF1] to-[#E7F2F7] max-lg:px-4 lg:px-6 max-lg:py-4 lg:py-6 overflow-hidden"
          :class="noPadding && 'lg:!pb-0 max-lg:!pb-0'"
        >
          <ClientOnly>
            <Swiper
              :modules="[EffectFade, Controller]"
              effect="fade"
              :fadeEffect="{ crossFade: true }"
              :controller="{ control: firstSwiper }"
              @swiper="setSecondSwiper"
              class="image-swiper w-full h-full"
            >
              <SwiperSlide
                v-for="(d, ind) in data"
                :key="ind"
                class="flex items-center justify-center"
              >
                <img class="w-full h-auto object-contain" :src="d.image" :alt="d.title" />
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Pagination, Controller, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const props = defineProps({
  reverse: Boolean,
  title: String,
  subtitle: String,
  data: Array,
  noPadding: Boolean,
})

const firstSwiper = ref(null)
const secondSwiper = ref(null)

const setFirstSwiper = (swiper) => (firstSwiper.value = swiper)
const setSecondSwiper = (swiper) => (secondSwiper.value = swiper)
</script>

<style scoped>
.fade-swiper,
.image-swiper {
  width: 100%;
  height: 100%;
}

/* fix overlapping fade */
.fade-swiper .swiper-slide {
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.fade-swiper .swiper-slide-active {
  opacity: 1;
  pointer-events: auto;
}

/* pagination */
::v-deep(.swiper-pagination-bullet-active) {
  background: #233f94 !important;
}
</style>
