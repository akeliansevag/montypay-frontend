<template>
    <section class="lg:py-24 max-lg:py-10 bg-[#19162A] text-white relative">
        <img src="/blue-section-bg.webp" alt="Background Shapes" class="absolute top-0 left-0 object-cover w-full h-full z-0"/>
        <div class="container">
            <div class="flex items-center justify-between max-lg:flex-col gap-10">
                <div class="flex flex-col gap-7 w-full">
                    <h2 class="text-3xl" v-if="title">{{ title }}</h2>
                    <p v-if="subtitle">{{ subtitle }}</p>
                    <div>
                        <NuxtLink class="mp-button-quad inline-block" v-if="buttonText" :href="buttonLink">{{ buttonText }}</NuxtLink>
                    </div>
                    
                </div>
                <div class="w-full">
                    <div v-if="image" class="lg:flex lg:justify-end">
                        <img :src="image" :alt="title" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
 const props = defineProps(['title','subtitle', 'buttonText', 'buttonLink','image'])
</script>

<style lang="scss" scoped>

</style>