<template>
    <NuxtLink :class="transparent ? 'bg-transparent text-white border border-white hover:border-quaternary hover:bg-secondary hover:text-black' : 'bg-secondary text-black border border-secondary hover:border-quaternary'" :to="link" class="group px-4 py-2 rounded-md inline-flex items-center gap-3 hover:bg-quaternary hover:text-white">
        <span class="text-lg font-bold">{{ text }}</span>
        <svg class="mt-[1.5px]"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :class="transparent ? 'group-hover:stroke-white stroke-white' : 'group-hover:stroke-white'" d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path :class="transparent ? 'group-hover:stroke-white stroke-white' : 'group-hover:stroke-white'" d="M12 5L19 12L12 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['link', 'text', 'transparent']);
</script>

<style lang="scss" scoped>

</style>