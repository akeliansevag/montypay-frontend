<template lang="">
    <!-- <div v-if="image_position === 'full'" class="absolute top-0 right-0 w-1/2 h-full bg-black opacity-50"></div> -->
    <div class="container">
        <div :class="[ 'flex gap-12 w-full', 
                layout === 'full' 
                ? 'flex-col items-center lg:w-4/5 mx-auto text-center' 
                : 'flex-col lg:flex-row' 
            ]"
        >

            <div :class="[ 'flex flex-col gap-12 w-full', 
                    layout === 'full' 
                    ? 'items-center' 
                    : 'flex-1' 
                ]"
            >
                <h3>{{ subtitle }}</h3>
                <template v-if="layout === 'full'">
                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        :src="`/images/${ image }.png`" 
                        :imgAttrs="{class:'w-full'}" 
                        :class="`w-full lg:w-1/2 order-${image_order}`"
                    />
                </template>
                
                <h2>{{ title }}</h2>
                <p>{{ paragraph }}</p>
                <button v-if="layout === 'half'" class="mp-button-secondary">{{ button }} <Icon name="fa6-solid:arrow-right" class="icon" /></button>
            </div>

            <template v-if="layout === 'half' && image_position != 'full'">
                <div class="flex-1 hidden lg:block">
                    <div class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-[200px] border-[#74F1C4] rounded-full bg-transparent blur-2xl"></div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['subtitle', 'title', 'paragraph', 'image', 'image_order', 'image_position', 'button', 'link', 'layout'])
</script>

<style lang="">

</style>
