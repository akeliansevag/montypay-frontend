<template lang="">
    <a :href="link" target="_blank" rel="noopener noreferrer" class="flex justify-center lg:justify-start items-center gap-2 border">
        <Icon :name="icon" class="icon text-4xl" />

        <div class="flex flex-col font-medium leading-none text-nowrap">
            <span class="text-xs">{{ subtitle }}</span>
            <span :class="{'lg:text-2xl' : subtitle != ''}">{{ title }}</span>
        </div>
    </a>
</template>

<script setup>
    const props = defineProps(['link', 'subtitle', 'title', 'icon', 'structured', 'classes']);
</script>

<style lang="">
    
</style>
