<template>
    <div class="container">
        <div class="lg:h-[500px] px-10 max-lg:py-10 lg:py-24 w-full text-white relative rounded-3xl overflow-hidden">
            <div class="w-full h-full absolute top-0 left-0 bg-[#233F94CC] z-10"></div>
            <Transition name="fade" mode="out-in">
                <div class="w-full h-full absolute top-0 left-0 z-0 rounded-3xl overflow-hidden" v-if="data[selectedIndex]" :key="selectedIndex">
                    <img class="w-full h-full object-cover" :src="data[selectedIndex].image" :alt="data[selectedIndex].title"/>
                </div>
            </Transition>
            <div class="flex flex-col gap-10 items-center justify-between h-full max-w-[550px] mx-auto relative z-20">
                <div class="text-center">
                    <h2 v-if="title" class="text-2xl mb-1">{{ title }}</h2>
                    <p v-if="subtitle">{{ subtitle }}</p>
                </div>
                <div class="flex gap-3"  v-if="data">
                    <div v-for="(item,index) in data">
                        <button @click="handleClick(index)" :class="selectedIndex===index && 'active-button'">{{ index+1 }}</button>
                    </div>
                </div>
                <div class="max-w-[350px] mx-auto">
                    <Transition name="fade" mode="out-in">
                        <div class="text-center" v-if="data[selectedIndex]" :key="selectedIndex">
                            <h3 class="text-2xl font-bold mb-1">{{ data[selectedIndex].title }}</h3>
                            <p>{{ data[selectedIndex].description }}</p>
                        </div>
                    </Transition>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    const selectedIndex = ref(0);
    const props = defineProps(['data','title','subtitle']);

    const handleClick = (index) => {
        selectedIndex.value = index
    }
</script>

<style lang="sass" scoped>
button
    @apply border border-white rounded-full w-[44px] h-[44px] font-bold flex justify-center items-center text-xl
    &.active-button, &:hover
        @apply bg-white text-[#003383]
.fade-leave-active
    transition: none
.fade-enter-active
  transition: opacity 1s ease

.fade-enter-from, .fade-leave-to
  opacity: 0
</style>