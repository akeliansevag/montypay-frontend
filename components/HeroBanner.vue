<template lang="">
    <section id="section-1" class="w-screen lg:h-screen bg-quaternary overflow-hidden">
        
        <Blob />
        
        <div class="container h-full mt-24 lg:mt-0">
            <div class="flex justify-end items-center w-full lg:w-1/2 h-full ms-auto">
                <ContentBlock 
                    :subtitle="subtitle"
                    :title="title" 
                    :paragraph="paragraph" 
                    :button="button" 
                    :isBanner=true
                />
            </div>

            <div class="lg:absolute lg:bottom-0 lg:left-[5%] w-full mt-12 lg:mt-0">
                <NuxtPicture priority
                    format="webp,avif" 
                    :src="`/images/${ image }.png`" 
                    :imgAttrs="{class:'w-full md:w-1/2 xl:w-1/3 3xl:w-2/5 4xl:w-5/12 5xl:w-5/12 6xl:w-6/12 9xl:w-7/12'}" 
                />
            </div>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps(['subtitle', 'title', 'paragraph', 'button', 'image']);
</script>

<style scoped>

</style>