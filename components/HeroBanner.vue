<template lang="">
    <section id="section-1" class="flex pt-[100px] lg:pt-[70px] items-center w-full lg:min-h-screen bg-quaternary overflow-hidden">
        
        <Blob />
        
        <div class="container flex flex-col lg:flex-row items-center gap-20">
            <div class="w-full lg:w-1/2 order-1 lg:order-none mb-10 lg:mb-0">
                <NuxtPicture priority
                    format="webp,avif" 
                    :src="`/images/${ image }.webp`" 
                    :imgAttrs="{class:'w-full lg:h-full lg:w-auto'}" 
                />
            </div>
            <div class="flex w-full lg:w-1/2">
                <ContentBlock 
                    :subtitle="subtitle"
                    :title="title" 
                    :paragraph="paragraph" 
                    :button="button" 
                    :isBanner=true
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['subtitle', 'title', 'paragraph', 'button', 'image']);
</script>

<style scoped></style>