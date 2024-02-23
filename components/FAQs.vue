<template>
    <div v-for="(faq, index) in faqs" :key="faq.id" class="mt-5 pr-0 lg:pr-60">
        <h3 @click="toggle(faq.id)" class="cursor-pointer text-[40px] font-light">
            <Icon name="fa6-solid:angle-down" class="icon text-md transition-transform duration-300 ease-in-out mr-4"
                :class="activeItemId === faq.id ? 'rotate-180' : 'rotate-0'" />
            {{ faq.question }}
        </h3>
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="activeItemId === faq.id" class="overflow-hidden">
                <p class="mt-5">{{ faq.answer }}</p>
            </div>
        </transition>
    </div>
</template>

<script setup>
const props = defineProps(['faqs']);

const activeItemId = ref(null);

function toggle(itemId) {
    // If the clicked item is already active, close it, otherwise open the clicked one.
    activeItemId.value = activeItemId.value === itemId ? null : itemId;
}

function beforeEnter(el) {
    el.style.height = '0';
}

function enter(el, done) {
    el.style.transition = 'height 0.3s ease';
    el.style.height = `${el.scrollHeight}px`;
    el.addEventListener('transitionend', done, { once: true });
}

function beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
}

function leave(el, done) {
    el.style.transition = 'height 0.3s ease';
    setTimeout(() => {
        el.style.height = '0';
    });
    el.addEventListener('transitionend', done, { once: true });
}
</script>

<style lang="scss" scoped></style>