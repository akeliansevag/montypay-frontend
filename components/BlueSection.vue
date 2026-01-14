<template>
    <section class="lg:py-12 max-lg:py-6 bg-[#19162A] text-white relative">
        <img src="/blue-section-bg.webp" alt="Background Shapes" class="absolute top-0 start-0 object-cover w-full h-full z-0"/>
        <div class="container">
            <div class="flex items-center justify-between max-lg:flex-col gap-10">
                <div class="flex flex-col gap-12 w-full">
                    <h2 class="text-3xl" v-if="title">{{ title }}</h2>
                    <p class="text-xl" v-if="subtitle">{{ subtitle }}</p>
                    <div>
                        <NuxtLinkLocale class="mp-button-quaternary inline-block" v-if="buttonText" :target="target ? target : '_self'" :href="buttonLink">{{ buttonText }}</NuxtLinkLocale>
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
 const props = defineProps(['title','subtitle', 'buttonText', 'buttonLink', 'target', 'image'])
</script>

<style lang="scss" scoped>

</style>