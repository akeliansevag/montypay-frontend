<template>
    <div :class="active ? 'bg-secondary text-black border-secondary' : ' text-[#737A7C] border-[#D9D9D9]'" class="hover:cursor-pointer border font-bold inline-flex rounded-full px-10 py-2">
        {{ text }}
    </div>
</template>

<script setup>
 const props = defineProps(['text','active']);
</script>

<style lang="scss" scoped>

</style>