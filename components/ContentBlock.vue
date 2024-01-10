<template lang="">
   <div class="flex flex-col justify-center gap-8 w-1/2 text-primary">
        <h2>{{ subtitle }}</h2>
        <h1>{{ title }}</h1>
        <p>{{ paragraph }}</p>
        <button class="mp-button-primary">{{ button }} <Icon name="fa6-solid:arrow-right" class="icon" /></button>
    </div>
</template>

<script setup>
    const props = defineProps(['subtitle', 'title', 'paragraph', 'button']);
</script>

<style lang="">
    
</style>