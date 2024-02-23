<template lang="">
    <section id="section-1" class="pt-28 lg:pt-40">
        <div class="container flex flex-col items-center">
            <span v-if="breadcrumbs" class="bg-secondary rounded-lg p-1 text-base font-bold">{{ breadcrumbs }}</span>
            <h1 v-if="title" class="mt-4">{{ title }}</h1>
            <p v-if="paragraph" class="mt-8">{{ paragraph }}</p>
            <button v-if="button" class="mp-button-tertiary mt-10">{{ button }} <Icon name="fa6-solid:arrow-right" class="icon" /></button>
            <NuxtPicture 
                v-if="image"
                priority
                format="webp,avif" 
                :src="`/images/${ image }.png`" 
                class="w-full mt-20"
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