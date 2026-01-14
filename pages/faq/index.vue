<template>
    <div>
        <Hero 
            :title="t('Pages.FAQ.Banner.Title')"
            :paragraph="t('Pages.FAQ.Banner.Description')" button="Get Started"
            image="faq" 
            hero="88"
        />

        <section class="py-16 lg:py-36">
            <div class="container">
                <div class="flex flex-col gap-14">
                    <div v-for="(faq, index) in faqs" :key="faq.title">
                        <div>
                            <h2 class="mb-4 text-3xl">{{ faq.title }}</h2>
                            <div class="mb-4" v-for="(item, i) in faq.items" :key="item.id">
                                <div class="rounded bg-[#F9FAFB] p-5 lg:p-10">
                                    <div class="cursor-pointer flex items-center gap-4 justify-between font-bold text-xl"
                                        @click="toggle(item.id)">
                                        <h5>{{ item.question }}</h5>
                                        <span
                                            class="text-[#98A2B3] shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#98A2B3]">
                                            <Icon :name="activeItemId === item.id ? 'fa7-solid:minus' : 'fa7-solid:plus'"
                                                class="icon text-sm" />
                                        </span>
                                    </div>

                                    <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                                        <div v-if="activeItemId === item.id" class="content">
                                            <ContentBlock :paragraph="item.answer" class="mt-5" />
                                        </div>
                                    </transition>
                                </div>
                            </div> 
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const { t, locale, setLocale } = useI18n();
    useSeoMeta({
        title: 'MontyPay FAQ | Answers to Common Payment Questions',
        ogTitle: 'MontyPay FAQ | Answers to Common Payment Questions',
        description: 'Find clear answers to the most frequently asked questions about MontyPay’s payment solutions, integrations, features, pricing, and merchant support.',
        ogDescription: 'Find clear answers to the most frequently asked questions about MontyPay’s payment solutions, integrations, features, pricing, and merchant support.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    });
    const faqs = [
        {
            title: t('Pages.FAQ.Section 2.Items[0].Title'),
            items: [
                {
                    id: 1,
                    question: t('Pages.FAQ.Section 2.Items[0].Items[0].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[0].Items[0].Answer')
                },
                {
                    id: 2,
                    question: t('Pages.FAQ.Section 2.Items[0].Items[1].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[0].Items[1].Answer')
                },
                {
                    id: 3,
                    question: t('Pages.FAQ.Section 2.Items[0].Items[2].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[0].Items[2].Answer')
                },
                {
                    id: 4,
                    question: t('Pages.FAQ.Section 2.Items[0].Items[3].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[0].Items[3].Answer')
                },
                {
                    id: 5,
                    question: t('Pages.FAQ.Section 2.Items[0].Items[4].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[0].Items[4].Answer')
                }
            ]
        },
        {
            title: t('Pages.FAQ.Section 2.Items[1].Title'),
            items: [
                {
                    id: 6,
                    question: t('Pages.FAQ.Section 2.Items[1].Items[0].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[1].Items[0].Answer')
                },
                {
                    id: 7,
                    question: t('Pages.FAQ.Section 2.Items[1].Items[1].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[1].Items[1].Answer')
                },
                {
                    id: 8,
                    question: t('Pages.FAQ.Section 2.Items[1].Items[2].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[1].Items[2].Answer')
                },
            ]
        },
        {
            title: t('Pages.FAQ.Section 2.Items[2].Title'),
            items: [
                {
                    id: 9,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[0].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[0].Answer')
                },
                {
                    id: 10,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[1].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[1].Answer')
                },
                {
                    id: 11,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[2].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[2].Answer')
                },
                {
                    id: 12,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[3].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[3].Answer')
                },
                {
                    id: 13,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[4].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[4].Answer')
                },
                {
                    id: 14,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[5].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[5].Answer')
                },
                {
                    id: 15,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[6].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[6].Answer')
                },
                {
                    id: 16,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[7].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[7].Answer')
                },
                {
                    id: 17,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[8].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[8].Answer')
                },
                {
                    id: 18,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[9].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[9].Answer')
                },
                {
                    id: 19,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[10].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[10].Answer')
                },
                {
                    id: 20,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[11].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[11].Answer')
                },
                {
                    id: 21,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[12].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[12].Answer')
                },
                {
                    id: 22,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[13].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[13].Answer')
                },
                {
                    id: 23,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[14].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[14].Answer')
                },
                {
                    id: 24,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[15].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[15].Answer')
                },
                {
                    id: 25,
                    question: t('Pages.FAQ.Section 2.Items[2].Items[16].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[2].Items[16].Answer')
                },
            ]
        },
        {
            title: t('Pages.FAQ.Section 2.Items[3].Title'),
            items: [
                {
                    id: 26,
                    question: t('Pages.FAQ.Section 2.Items[3].Items[0].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[3].Items[0].Answer')
                },
                {
                    id: 27,
                    question: t('Pages.FAQ.Section 2.Items[3].Items[1].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[3].Items[1].Answer')
                },
                {
                    id: 28,
                    question: t('Pages.FAQ.Section 2.Items[3].Items[2].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[3].Items[2].Answer')
                },
            ]
        },
        {
            title: t('Pages.FAQ.Section 2.Items[4].Title'),
            items: [
                {
                    id: 29,
                    question: t('Pages.FAQ.Section 2.Items[4].Items[0].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[4].Items[0].Answer')
                },
                {
                    id: 30,
                    question: t('Pages.FAQ.Section 2.Items[4].Items[1].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[4].Items[1].Answer')
                },
                {
                    id: 31,
                    question: t('Pages.FAQ.Section 2.Items[4].Items[2].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[4].Items[2].Answer')
                },
                {
                    id: 32,
                    question: t('Pages.FAQ.Section 2.Items[4].Items[3].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[4].Items[3].Answer')
                },
                {
                    id: 33,
                    question: t('Pages.FAQ.Section 2.Items[4].Items[4].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[4].Items[4].Answer')
                },
                {
                    id: 34,
                    question: t('Pages.FAQ.Section 2.Items[4].Items[5].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[4].Items[5].Answer')
                },
                {
                    id: 35,
                    question: t('Pages.FAQ.Section 2.Items[4].Items[6].Question'),
                    answer: t('Pages.FAQ.Section 2.Items[4].Items[6].Answer')
                },

            ]
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