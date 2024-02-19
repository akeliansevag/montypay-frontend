<template lang="">
    <div class="flex gap-7">
        <a v-for="(item, index) in socialMedia" :key="index" :href="item.link" target="_blank" rel="noopener noreferrer">
            <Icon :name="`fa6-brands:${item.icon}`" class="icon text-2xl" />
        </a>
    </div>
</template>

<script setup>
    const props = defineProps(['socialMedia'])
</script>

<style lang="">
    
</style>