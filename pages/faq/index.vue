<template>
    <div>
        <Hero 
            breadcrumbs="Solutions / Tech Services"
            title="FAQ"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants" button="Get Started"
            image="white-label" 
        />

        <section class="py-16 lg:py-36">
            <div class="container">
                <div class="flex flex-col gap-5">
                    <div v-for="(faq, index) in faqs" :key="faq.id">
                        <div class="rounded bg-[#F9FAFB] p-5 lg:p-10">
                            <div class="cursor-pointer flex items-center gap-4 justify-between font-bold text-2xl"
                                @click="toggle(faq.id)">
                                <h5>{{ faq.question }}</h5>
                                <span
                                    class="text-[#98A2B3] shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#98A2B3]">
                                    <Icon :name="activeItemId === faq.id ? 'fa6-solid:minus' : 'fa6-solid:plus'"
                                        class="icon text-sm  bg-[#ffffff1a]" />
                                </span>
                            </div>

                            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                                <div v-if="activeItemId === faq.id" class="content">
                                    <ContentBlock :paragraph="faq.answer" class="mt-5" />
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'FAQ',
        ogTitle: 'FAQ',
        description: 'FAQ description',
        ogDescription: 'FAQ description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    });
    const faqs = [
        {
            id: 1,
            question: 'What is an Advanced salary?',
            answer: 'An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance'
        },
        {
            id: 2,
            question: 'How do I apply for an Advanced Salary?',
            answer: 'An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance'
        },
        {
            id: 3,
            question: 'Who is eligible for the Advanced Salary?',
            answer: 'An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance'
        },
        {
            id: 4,
            question: 'How much can I request for an Advanced Salary?',
            answer: 'An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance'
        },
        {
            id: 5,
            question: 'What are the repayment terms for the Advanced salary product?',
            answer: 'An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance'
        },
        {
            id: 6,
            question: 'Is there a fee or interest associated with Advanced Salary?',
            answer: 'An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance'
        },
        {
            id: 7,
            question: 'When will I receive my Advanced Salary?',
            answer: 'An Advanced salary, offered by MyMonty, is a feature that allows our customers to access a portion of their salaries in advance'
        },
    ];

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

<style lang="scss" scoped>
    .content {
        overflow: hidden;
    }
</style>