<template lang="">
   <div class="flex flex-col justify-center gap-8 z-10">
        <template v-if="isBanner">
            <h2 v-if="subtitle">{{ subtitle }}</h2>
            <h1 v-if="title">{{ title }}</h1>
        </template>
        <template v-else>
            <h2 v-if="title">{{ title }}</h2>
            <h3 v-if="subtitle">{{ subtitle }}</h3>
        </template>
        <p v-if="paragraph" v-html="paragraph"></p>
        <button v-if="button" class="mp-button-secondary">{{ button }} <Icon name="fa6-solid:arrow-right" class="icon" /></button>
    </div>
</template>

<script setup>
const props = defineProps(['isBanner', 'subtitle', 'title', 'paragraph', 'button']);
</script>

<style lang="">
    
</style>