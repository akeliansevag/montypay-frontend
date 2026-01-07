<template lang="">
    <section id="section-1" class="py-10 lg:py-20 bg-[#f2f2f2]">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 justify-end items-center">
            <div>
                <h1 v-if="title">{{ title }}</h1>
                <p v-if="paragraph" class="mt-8 w-full lg:w-3/4 text-lg">{{ paragraph }}</p>
            </div>
            <NuxtPicture 
                v-if="image"
                priority
                format="webp" 
                :src="`/images/${ image }.png`" 
                class="w-full lg:w-2/3 ms-auto"
                :imgAttrs="{class:'w-full rounded-lg'}" 
            />
        </div>
    </section>
</template>

<script setup>
    const prop = defineProps(['breadcrumbs', 'title', 'paragraph', 'button', 'image'])
</script>

<style lang="">

</style>