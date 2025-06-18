<template>
    <div class="container">
        <h2 v-if="title" class="text-2xl">{{ title }}</h2>
        <p class="mt-4" v-if="subtitle">{{ subtitle }}</p>
        <div :class="reverse && 'flex-row-reverse'" class="flex mt-10 rounded-xl overflow-hidden max-lg:flex-col  lg:h-[500px]">
            <div class="lg:w-1/2 bg-gradient-to-r from-[#E6EBF3] to-[#E6F1F6] max-lg:py-10 lg:py-16">
                <div v-if="data" class="flex flex-col justify-center h-full">
                    <div class="relative">
                        <Transition name="fade" mode="out-in">
                            <div
                                v-if="data[selectedIndex]"
                                :key="selectedIndex"
                                class="lg:px-16 max-lg:px-10"
                            >
                                <div>
                                    <h4 class="mb-1 text-xl font-bold">{{ data[selectedIndex].title }}</h4>
                                    <p>{{ data[selectedIndex].description }}</p>
                                </div>
                            </div>
                        </Transition>
                        <div class="flex gap-4 max-lg:mt-10 lg:mt-20 max-lg:flex-wrap lg:px-16 max-lg:px-10">
                            <button @click="handleClick(index)" v-for="(item,index) in data" :key="index" class="filter-button" :class="selectedIndex===index && 'active'">
                                {{ item.category }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 bg-gradient-to-r from-[#D2EAF1] to-[#E7F2F7] overflow-hidden" :class="noPadding && 'lg:!pb-0 max-lg:!pb-0'">
                <div v-if="data" class="flex flex-col w-full h-full relative">
                    <Transition name="fade" mode="out-in">
                        <div class="w-full mt-auto" v-if="data[selectedIndex]" :key="selectedIndex">
                            <img class="mx-auto" :src="data[selectedIndex].image" :alt="data[selectedIndex].title" /><!-- :class="noPadding && '-mb-2'" -->
                        </div> 
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const selectedIndex = ref(0);
    const props = defineProps(['reverse','title','data','subtitle','noPadding']);

    const handleClick = (index) => {
        selectedIndex.value = index
    }
</script>

<style lang="sass" scoped>
.filter-button
  @apply text-[#233F94] font-bold text-center py-2 px-4 border rounded-full border-[#233F94] bg-transparent lg:min-w-[80px]

  &.active, &:hover
    @apply text-white bg-gradient-to-r from-[#013383] to-[#01B0C6] border border-white
.fade-leave-active
    transition: none
.fade-enter-active
  transition: opacity 1s ease

.fade-enter-from, .fade-leave-to
  opacity: 0
</style>