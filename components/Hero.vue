<template lang="">
    <section id="section-1" class="py-10 lg:py-20 bg-quaternary relative">
        <img v-if="hero" class="absolute top-0 start-0 w-full h-full object-cover" :src="'/images/hero-backgrounds/'+ hero +'.jpg'" alt="Hero Background" />
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 justify-end items-center text-white min-h-[40vh]">
            <div>
                <h1 v-if="title">{{ title }}</h1>
                <p v-if="paragraph" class="mt-8 w-full lg:w-3/4 text-lg">{{ paragraph }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
    const prop = defineProps(['hero','breadcrumbs', 'title', 'paragraph', 'button', 'image'])
</script>

<style lang="">

</style>