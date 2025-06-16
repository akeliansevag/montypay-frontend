<template>
    <div
        :class="[
            layout === 'vertical' ? 'flex flex-col items-start w-full' : gridClass,
            'bg-white shadow p-4 rounded-2xl gap-4'
        ]"
    >
        <div class="flex-shrink-0 flex flex-col items-center gap-2">
            <img :src="icon" alt="icon" class="w-12 h-12 object-contain" />
        </div>

        <div class="flex-1">
        <h3 class="font-semibold text-lg mb-1">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>

        <div v-if="images?.length" class="flex gap-2 mt-2">
                <img
                    v-for="(img, i) in images"
                    :key="i"
                    :src="img"
                    class="w-10 h-10 object-contain rounded"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        description: String,
        icon: String,
        images: {
            type: Array,
            default: () => []
        },
        layout: {
            type: String,
            default: 'vertical'
        }
    })

    const gridClass = computed(() =>
        props.layout === 'vertical'
            ? props.images?.length > 0
            ? 'w-full md:grid md:grid-cols-2'
            : 'w-full md:grid md:grid-cols-3'
            : 'w-full'
    )
</script>
