<template lang="">
   <div class="flex flex-col justify-center gap-8 z-10">
        <template v-if="isBanner">
            <h2 v-if="subtitle">{{ subtitle }}</h2>
            <h1 v-if="title" v-html="title"></h1>
        </template>
        <template v-else>
            <h2 v-if="title" v-html="title "></h2>
            <h3 v-if="subtitle">{{ subtitle }}</h3>
        </template>
        <div class="rtl:max-w-[500px]" :class="{'mx-auto': centerParagraph === true}">
            <p v-if="paragraph" v-html="paragraph"></p>
        </div>
        
        <NuxtLinkLocale v-if="link" :to="link">
            <button v-if="button" class="mp-button-secondary" :class="{ 'self-center': center === true }">{{ button }} <Icon name="fa6-solid:arrow-right" class="icon rtl:rotate-180 transition-transform" /></button>
        </NuxtLinkLocale>
    </div>
</template>

<script setup>
    const props = defineProps(['isBanner', 'subtitle', 'title', 'paragraph', 'button', 'center','link', 'centerParagraph']);
</script>

<style lang="">
    
</style>