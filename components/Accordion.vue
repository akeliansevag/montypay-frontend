<template>
    <section class="bg-[#E9ECF4] lg:py-24 max-lg:py-10">
        <div class="container">
            <h2 class="text-3xl text-center mb-8" v-if="title">{{ title }}</h2>
            <div v-if="data" class="flex flex-col gap-5 max-w-[1050px] mx-auto">
                <div v-for="(item,index) in data" :key="index" class="rounded-xl overflow-hidden transition-all" :class="openIndex===index && 'bg-[#DFE3EF]'">
                    <div @click="setOpenIndex(index)" class="px-7 pt-5 pb-3 cursor-pointer flex justify-between gap-10 items-center">
                        <h4 class="text-xl font-bold">{{ item.question }}</h4>
                        <div class="w-5 h-5 shrink-0 rounded-full border-[2px] border-[#98A2B3] text-[#98A2B3] text-xl leading-none text-center flex items-center justify-center">
                            <span :class="openIndex===index && '-mt-[2px]'">{{openIndex===index ? '-' : '+'}}</span>
                        </div>
                    </div>
                    <div ref="answers" :style="getStyle(index)" class="px-7 overflow-hidden transition-all">
                        <p class="pb-5">{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const openIndex = ref(null)
    const answers = ref([])
    const props = defineProps(['data','title'])
    const getStyle = (index) => {
        if (openIndex.value === index && answers.value[index]) {
            return `height: ${answers.value[index].scrollHeight}px`
        }
            return 'height: 0px'
        }

    const setOpenIndex = (index) => {
        openIndex.value = openIndex.value === index ? null : index
        // nextTick to ensure refs are updated before measuring
        nextTick(() => {
            // force reflow to trigger transition
            answers.value.forEach((el) => {
            if (el) el.offsetHeight
            })
        })
    }
    onMounted(() => {
     answers.value = document.querySelectorAll('[ref="answers"]')
    })
</script>

<style lang="sass" scoped>

</style>