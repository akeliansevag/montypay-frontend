<template>
    <div :class="[dark ? 'text-white' : '', center ? 'mx-auto' : '']" class="max-w-[450px] flex flex-col gap-3"> 
        <h3 v-if="subtitle" class="font-bold text-base text-secondary">{{ subtitle }}</h3>
        <h2 v-if="title" class="text-4xl font-bold">{{ title }}</h2>
        <p v-if="paragraph" v-html="paragraph"></p>
    </div>
</template>

<script setup>
 const props = defineProps(['subtitle','title','paragraph','dark','center']);
</script>