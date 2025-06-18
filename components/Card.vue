<template>
    <div :class="['bg-white rounded-xl shadow-md overflow-hidden p-4', layout === 'horizontal' ? 'flex flex-col lg:flex-row lg:items-center gap-10 max-lg:pb-24' : 'flex flex-col items-start gap-6 pb-24']">
        <div :class="[layout === 'horizontal' ? 'w-full lg:w-1/2' : 'w-full mb-4']">
            <img :src="image" alt="Feature Image" class="w-full h-full rounded-lg object-cover" />
        </div>

        <div :class="['lg:px-6', layout === 'horizontal' ? 'w-full lg:w-1/2' : '']">
            <h3 class="text-2xl font-semibold">{{ title }}</h3>
            <p class="text-xl mt-6">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        image: String,
        title: String,
        description: String,
        layout: {
            type: String,
            default: 'vertical', // 'horizontal' or 'vertical'
        },
    });
</script>
