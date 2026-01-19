<template>
    <section class="py-10">
        <div class="container">
            <div class="flex items-center max-lg:flex-col gap-10 justify-between">
                <div class="lg:w-2/5 flex flex-col gap-5">
                    <h1 class="text-balance">{{ t('Pages.Smart Pos.Banner.Title') }}</h1>
                    <p>{{ t('Pages.Smart Pos.Banner.Description') }}</p>
                    <div class="mt-3">
                        <ArrowButton :text="t('General.Buttons.Contact Sales')" link="/contact-us" />
                    </div>
                </div>
                
                <div class="lg:w-2/5">
                    <img src="/images/smart-pos/smart-pos-1.webp" alt="MontyPay Smart POS - Image 4" class="mt-8 w-full">
                </div>
            </div>
        </div>
    </section>
    <Section class="overflow-hidden bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat">
        <div class="container">
            <div class="flex justify-between items-center max-lg:flex-col max-lg:gap-14 lg:gap-20">
                <div class="lg:w-1/3">
                    <img class="max-lg:max-h-[500px] max-h-[800px]" src="/images/smart-pos/smart-pos-2.webp" alt="MontyPay Smart POS">
                </div>
                <div class="lg:w-2/3 flex flex-col gap-6">
                    <h2 class="text-white text-4xl">{{ t('Pages.Smart Pos.Section 2.Title') }}</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div v-for="(item, index) in whySmartPos" :key="item.title" 
                            :class="[
                                'flex gap-5 backdrop-blur-[10px] bg-white/5 p-4 rounded-lg hover:bg-white/20 hover:backdrop-blur-[50px] transition-all',
                                index === whySmartPos.length - 1 ? 'lg:col-span-2' : ''
                            ]"
                        >
                            <div>
                                <div v-html="item.icon"></div>
                            </div>
                            <div>
                                <h3 class="text-white text-xl mb-2 font-bold">{{ item.title }}</h3>
                                <p class="text-white">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </Section>
    <Section class="relative">
        <img class="absolute max-lg:top-auto max-lg:bottom-0 lg:-top-1/2 end-0 -z-10 opacity-30 rtl:rotate-180 rtl:-scale-y-100" src="/images/smart-pos/bg.svg" alt="" />
        <div class="container">
            <div class="lg:1/2">
                    <SmallContent 
                        :title="t('Pages.Smart Pos.Section 3.Title')"
                        :paragraph="t('Pages.Smart Pos.Section 3.Description')"
                        class="max-w-[600px]"
                    />
            </div>
            
            <div class="flex max-lg:flex-col gap-10 lg:justify-between lg:items-start mt-10">
                <div class="lg:w-1/2">
                    
                    <div class="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-5">
                        <div @mouseenter="handleIndustryHover(key)" v-for="(item,key) in industries" :key="item.title" class="flex flex-col gap-3 bg-white p-4 rounded-lg border border-[#D9D9D9/80] shadow-md">
                            <div>
                                <div v-html="item.icon"></div>
                            </div>
                            <div>
                                <h3 class="text-lg mb-2 font-bold">{{ item.title }}</h3>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="lg:w-1/2 flex justify-end">
                    <div class="aspect-square w-full rounded-xl relative max-w-[600px] overflow-hidden bg-black">
                        <div class="h-full w-full absolute top-0 start-0" v-for="(item,key) in industries" :key="item.title">
                            <img :src="item.img" :class="key === activeIndustry ? 'opacity-100' : 'opacity-0'" :alt="item.title" class="transition-opacity duration-300 w-full h-full object-cover absolute">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    <section class="max-lg:pb-10 lg:pb-24 relative">
        <img src="/images/smart-pos/bg2.svg" alt="" class="absolute max-lg:hidden lg:-top-1/3 start-0 -z-10 opacity-30 rtl:rotate-180 rtl:-scale-y-100">   
        <div class="container">
            <div class="flex max-lg:flex-col-reverse gap-10">
                <div class="lg:w-1/2">
                    <img v-if="activeFilter === 'F20'" src="/images/smart-pos/F20.webp" alt="MontyPay Smart POS - Image F20" class="max-h-[550px] mx-auto">
                    <img v-if="activeFilter === 'F210'" src="/images/smart-pos/F210.webp" alt="MontyPay Smart POS - Image F210" class="max-h-[550px] mx-auto">
                    <img v-if="activeFilter === 'F300'" src="/images/smart-pos/F300.webp" alt="MontyPay Smart POS - Image F300" class="max-h-[550px] mx-auto">
                </div>
                <div class="lg:w-1/2">
                    <div class="mb-5 flex gap-5">
                        <Filter class="w-full justify-center" @click="handleFilterClick('F20')" text="F20" :active="activeFilter === 'F20'" />
                        <Filter class="w-full justify-center" @click="handleFilterClick('F210')" text="F210" :active="activeFilter === 'F210'" />
                        <Filter class="w-full justify-center" @click="handleFilterClick('F300')" text="F300" :active="activeFilter === 'F300'" />
                    </div>
                    <div> 
                        <div class="flex max-lg:flex-col gap-10">
                            <div>
                                <h2 class="mb-4 mt-4 text-3xl font-bold">{{ t('Pages.Smart Pos.Section 4.Title') }}</h2>
                                <div v-if="activeFilter === 'F20'">
                                    <p class="font-bold">{{ t('Pages.Smart Pos.Section 4.Cards 1[0].Sub Title') }}</p>
                                    <p class="mt-4">{{ t('Pages.Smart Pos.Section 4.Cards 1[0].Description 1') }}</p>
                                    <div class="gap-10 mt-5">
                                        <ul class="custom-list">
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[0].List Items[0].Item 1') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[0].List Items[1].Item 2') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[0].List Items[2].Item 3') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[0].List Items[3].Item 4') }}</li>
                                        </ul>
                                    
                                    </div>
                                    <p class="mt-5 font-bold">{{ t('Pages.Smart Pos.Section 4.Cards 1[0].Description 2') }}</p>
                                </div>

                                <div v-if="activeFilter === 'F210'">
                                   <p class="font-bold">{{ t('Pages.Smart Pos.Section 4.Cards 1[1].Sub Title') }}</p>
                                    <p class="mt-4">{{ t('Pages.Smart Pos.Section 4.Cards 1[1].Description 1') }}</p>
                                    <div class="gap-10 mt-5">
                                        <ul class="custom-list">
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[1].List Items[0].Item 1') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[1].List Items[1].Item 2') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[1].List Items[2].Item 3') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[1].List Items[3].Item 4') }}</li>
                                        </ul>
                                    
                                    </div>
                                    <p class="mt-5 font-bold">{{ t('Pages.Smart Pos.Section 4.Cards 1[1].Description 2') }}</p>
                                </div>

                                <div v-if="activeFilter === 'F300'">
                                    <p class="font-bold">{{ t('Pages.Smart Pos.Section 4.Cards 1[2].Sub Title') }}</p>
                                    <p class="mt-4">{{ t('Pages.Smart Pos.Section 4.Cards 1[2].Description 1') }}</p>
                                    <div class="gap-10 mt-5">
                                        <ul class="custom-list">
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[2].List Items[0].Item 1') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[2].List Items[1].Item 2') }}</li>
                                            <li>{{ t('Pages.Smart Pos.Section 4.Cards 1[2].List Items[2].Item 3') }}</li>
                                        </ul>
                                    
                                    </div>
                                    <p class="mt-5 font-bold">{{ t('Pages.Smart Pos.Section 4.Cards 1[2].Description 2') }}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <Section class="relative">
        <img class="absolute max-lg:top-auto max-lg:bottom-0 lg:-top-1/2 end-0 -z-10 opacity-40 rtl:rotate-180 rtl:-scale-y-100" src="/images/smart-pos/bg.svg" alt="" />
        <div class="container">
            <div class="flex max-lg:flex-col gap-10 lg:justify-between lg:items-center">
                <div class="lg:w-1/2">
                    <SmallContent 
                        :title="t('Pages.Smart Pos.Section 5.Title')"
                        :paragraph="t('Pages.Smart Pos.Section 5.Description 1')"
                        class="max-w-[800px]"
                    />
                    <div class="flex flex-col gap-5 mt-10">
                        <div v-for="item in paymentSolutions" :key="item.title" class="flex gap-3 bg-white p-4 rounded-lg border border-[#D9D9D9/80] shadow-md">
                            <div>
                                <div v-html="item.icon"></div>
                            </div>
                            <div>
                                <h3 class="text-xl mb-3 font-bold">{{ item.title }}</h3>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    <p class="mt-5">{{t('Pages.Smart Pos.Section 5.Description 2')}}</p>
                    
                </div>
                <div class="lg:w-1/2">
                    <img src="/images/smart-pos/unified-solution.webp" alt="MontyPay Dashboard real-time sales performance" class="w-full lg:justify-self-end">
                </div>
            </div>
        </div>
    </Section>

    <Section class="bg-quaternary">
        <div class="container">
            <div class="flex max-lg:flex-col items-center  gap-10">
                <div class="lg:w-1/2 text-white flex flex-col gap-5">
                    <h1>{{t('Pages.Smart Pos.Section 6.Title')}}</h1>
                    <p>
                        {{t('Pages.Smart Pos.Section 6.Description 1')}} 
                    </p>
                    <p class="text-white font-bold">{{t('Pages.Smart Pos.Section 6.Description 2')}}</p>
                    <div class="mt-3">
                        <ArrowButton :transparent="true" :text="t('General.Buttons.Contact Sales')" link="/contact-us" />
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <img src="/images/smart-pos/sign-up-2.webp" alt="">
                </div>
            </div>
        </div>
    </Section>

    <PaymentSolutions />
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
    const activeFilter = ref('F20');
    const activeIndustry = ref(0);
    const handleIndustryHover = (key) => {
        activeIndustry.value = key;
    }
    const handleFilterClick = (filter) => {
        activeFilter.value = filter;
    }
    useSeoMeta({
        title: 'Smart POS Devices | Advanced In-Store Payment Terminals',
        ogTitle: 'Smart POS Devices | Advanced In-Store Payment Terminals',
        description: 'MontyPay’s Smart POS terminals offer fast, secure, and feature-rich in-store payments for retailers, restaurants, and service providers.',
        ogDescription: 'MontyPay’s Smart POS terminals offer fast, secure, and feature-rich in-store payments for retailers, restaurants, and service providers.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const paymentSolutions = [
        {
            icon: '<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.3927H11.2625M18.75 18.8927H18.7625M20 10.1427L10 20.1427M27.5 15.1427C27.5 22.0463 21.9036 27.6427 15 27.6427C8.09644 27.6427 2.5 22.0463 2.5 15.1427C2.5 8.23914 8.09644 2.6427 15 2.6427C21.9036 2.6427 27.5 8.23914 27.5 15.1427ZM11.875 11.3927C11.875 11.7379 11.5952 12.0177 11.25 12.0177C10.9048 12.0177 10.625 11.7379 10.625 11.3927C10.625 11.0475 10.9048 10.7677 11.25 10.7677C11.5952 10.7677 11.875 11.0475 11.875 11.3927ZM19.375 18.8927C19.375 19.2379 19.0952 19.5177 18.75 19.5177C18.4048 19.5177 18.125 19.2379 18.125 18.8927C18.125 18.5475 18.4048 18.2677 18.75 18.2677C19.0952 18.2677 19.375 18.5475 19.375 18.8927Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 5.Cards 1[0].Title'),
            description: t('Pages.Smart Pos.Section 5.Cards 1[0].Description')
        },
        {
            icon: '<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 26.3927H5.75C5.04993 26.3927 4.6999 26.3927 4.43251 26.2565C4.19731 26.1366 4.00608 25.9454 3.88624 25.7102C3.75 25.4428 3.75 25.0928 3.75 24.3927V5.8927C3.75 5.19263 3.75 4.8426 3.88624 4.57521C4.00608 4.34001 4.19731 4.14878 4.43251 4.02894C4.6999 3.8927 5.04993 3.8927 5.75 3.8927H9.25C9.95007 3.8927 10.3001 3.8927 10.5675 4.02894C10.8027 4.14878 10.9939 4.34001 11.1138 4.57521C11.25 4.8426 11.25 5.19263 11.25 5.8927V8.8927M11.25 26.3927H18.75M11.25 26.3927L11.25 8.8927M11.25 8.8927H16.75C17.4501 8.8927 17.8001 8.8927 18.0675 9.02894C18.3027 9.14878 18.4939 9.34001 18.6138 9.57521C18.75 9.8426 18.75 10.1926 18.75 10.8927V26.3927M18.75 13.8927H24.25C24.9501 13.8927 25.3001 13.8927 25.5675 14.0289C25.8027 14.1488 25.9939 14.34 26.1138 14.5752C26.25 14.8426 26.25 15.1926 26.25 15.8927V24.3927C26.25 25.0928 26.25 25.4428 26.1138 25.7102C25.9939 25.9454 25.8027 26.1366 25.5675 26.2565C25.3001 26.3927 24.9501 26.3927 24.25 26.3927H18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 5.Cards 1[1].Title'),
            description: t('Pages.Smart Pos.Section 5.Cards 1[0].Description'),
        },
        {
            icon: '<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 3.8927H20.25C22.3502 3.8927 23.4003 3.8927 24.2025 4.30143C24.9081 4.66095 25.4817 5.23463 25.8413 5.94024C26.25 6.7424 26.25 7.7925 26.25 9.8927V20.3927C26.25 22.4929 26.25 23.543 25.8413 24.3452C25.4817 25.0508 24.9081 25.6244 24.2025 25.984C23.4003 26.3927 22.3502 26.3927 20.25 26.3927H9.75C7.6498 26.3927 6.5997 26.3927 5.79754 25.984C5.09193 25.6244 4.51825 25.0508 4.15873 24.3452C3.75 23.543 3.75 22.4929 3.75 20.3927V15.1427M10 16.3927V21.3927M20 13.8927V21.3927M15 8.8927V21.3927M2.5 6.3927L6.25 2.6427M6.25 2.6427L10 6.3927M6.25 2.6427L6.25 10.1427" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 5.Cards 1[2].Title'),
            description: t('Pages.Smart Pos.Section 5.Cards 1[2].Description'),
        },
    ]

    const whySmartPos = [
        {
            icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1669 10.8317C17.356 11.4098 16.3636 11.7499 15.2918 11.7499C12.5534 11.7499 10.3335 9.53 10.3335 6.79159C10.3335 4.05317 12.5534 1.83325 15.2918 1.83325C17.0669 1.83325 18.6241 2.76601 19.5 4.16812M7.50016 27.4567H11.1981C11.6802 27.4567 12.1594 27.5141 12.6268 27.6288L16.5341 28.5783C17.3819 28.7849 18.2651 28.8049 19.1217 28.6386L23.4419 27.7981C24.5831 27.5758 25.6329 27.0293 26.4556 26.229L29.5122 23.2557C30.385 22.408 30.385 21.0325 29.5122 20.1834C28.7263 19.419 27.4819 19.3329 26.5928 19.9812L23.0305 22.5801C22.5203 22.953 21.8996 23.1538 21.2612 23.1538H17.8213L20.0108 23.1537C21.245 23.1537 22.2446 22.1813 22.2446 20.9808V20.5462C22.2446 19.5494 21.5472 18.6802 20.5534 18.4392L17.174 17.6174C16.624 17.484 16.0608 17.4166 15.4946 17.4166C14.1278 17.4166 11.6537 18.5482 11.6537 18.5482L7.50016 20.2852M27.3335 8.20825C27.3335 10.9467 25.1136 13.1666 22.3752 13.1666C19.6368 13.1666 17.4168 10.9467 17.4168 8.20825C17.4168 5.46984 19.6368 3.24992 22.3752 3.24992C25.1136 3.24992 27.3335 5.46984 27.3335 8.20825ZM1.8335 19.6833L1.8335 27.8999C1.8335 28.6933 1.8335 29.09 1.9879 29.3931C2.12372 29.6596 2.34045 29.8764 2.60701 30.0122C2.91005 30.1666 3.30675 30.1666 4.10016 30.1666H5.2335C6.0269 30.1666 6.42361 30.1666 6.72665 30.0122C6.99321 29.8764 7.20993 29.6596 7.34576 29.3931C7.50016 29.09 7.50016 28.6933 7.50016 27.8999V19.6833C7.50016 18.8898 7.50016 18.4931 7.34576 18.1901C7.20993 17.9235 6.99321 17.7068 6.72665 17.571C6.42361 17.4166 6.0269 17.4166 5.2335 17.4166L4.10016 17.4166C3.30676 17.4166 2.91005 17.4166 2.60701 17.571C2.34045 17.7068 2.12372 17.9235 1.9879 18.1901C1.8335 18.4931 1.8335 18.8898 1.8335 19.6833Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[0].Title'),
            description: 'Get access to funding after building a 6-month history with MontyPay, helping you invest in growth and manage cash flow.',
        },
        {
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.5H2M2 12.5H5.54668C6.08687 12.5 6.35696 12.5 6.61813 12.5466C6.84995 12.5879 7.0761 12.6563 7.29191 12.7506C7.53504 12.8567 7.75977 13.0065 8.20924 13.3062L8.79076 13.6938C9.24023 13.9935 9.46496 14.1433 9.70809 14.2494C9.9239 14.3437 10.15 14.4121 10.3819 14.4534C10.643 14.5 10.9131 14.5 11.4533 14.5H12.5467C13.0869 14.5 13.357 14.5 13.6181 14.4534C13.85 14.4121 14.0761 14.3437 14.2919 14.2494C14.535 14.1433 14.7598 13.9935 15.2092 13.6938L15.7908 13.3062C16.2402 13.0065 16.465 12.8567 16.7081 12.7506C16.9239 12.6563 17.15 12.5879 17.3819 12.5466C17.643 12.5 17.9131 12.5 18.4533 12.5H22M2 7.2L2 16.8C2 17.9201 2 18.4802 2.21799 18.908C2.40973 19.2843 2.71569 19.5903 3.09202 19.782C3.51984 20 4.07989 20 5.2 20L18.8 20C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.0799 22 5.51984 21.782 5.09202C21.5903 4.7157 21.2843 4.40974 20.908 4.21799C20.4802 4 19.9201 4 18.8 4L5.2 4C4.0799 4 3.51984 4 3.09202 4.21799C2.7157 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.07989 2 7.2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[1].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[1].Description'),
        },
        {
            icon: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 14H1.26417M7.625 14H7.63917M20.375 14H20.3892M14 14H14.0142M26.75 14H26.7642M26.75 26.75V25.6167C26.75 24.0299 26.75 23.2364 26.4412 22.6304C26.1695 22.0972 25.7361 21.6638 25.203 21.3921C24.5969 21.0833 23.8035 21.0833 22.2167 21.0833H5.78333C4.19652 21.0833 3.40311 21.0833 2.79703 21.3921C2.2639 21.6638 1.83046 22.0972 1.55882 22.6304C1.25 23.2364 1.25 24.0298 1.25 25.6167V26.75M26.75 1.25V2.38333C26.75 3.97015 26.75 4.76356 26.4412 5.36964C26.1695 5.90277 25.7361 6.33621 25.203 6.60785C24.5969 6.91667 23.8035 6.91667 22.2167 6.91667H5.78333C4.19652 6.91667 3.40311 6.91667 2.79703 6.60785C2.2639 6.33621 1.83046 5.90277 1.55881 5.36964C1.25 4.76356 1.25 3.97015 1.25 2.38333V1.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[2].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[2].Description')
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.0482 22.5109C29.147 24.6422 27.7373 26.5204 25.9426 27.9811C24.1478 29.4418 22.0225 30.4406 19.7525 30.8902C17.4825 31.3397 15.137 31.2264 12.9209 30.5601C10.7049 29.8938 8.68579 28.6947 7.04018 27.0678C5.39457 25.4409 4.17255 23.4356 3.48097 21.2273C2.78938 19.019 2.64928 16.6749 3.07291 14.4C3.49655 12.125 4.47102 9.98845 5.91113 8.1771C7.35124 6.36575 9.21315 4.93476 11.3341 4.00922M30.089 11.5787C30.6562 12.9479 31.004 14.3953 31.1221 15.8679C31.1513 16.2317 31.1658 16.4136 31.0936 16.5775C31.0333 16.7143 30.9137 16.8439 30.7821 16.915C30.6245 17.0001 30.4277 17.0001 30.0341 17.0001H18.1341C17.7374 17.0001 17.539 17.0001 17.3875 16.9229C17.2542 16.8549 17.1458 16.7466 17.0779 16.6133C17.0007 16.4618 17.0007 16.2634 17.0007 15.8667V3.96672C17.0007 3.57308 17.0007 3.37626 17.0858 3.2187C17.1569 3.08709 17.2864 2.96753 17.4233 2.90719C17.5872 2.83495 17.7691 2.84953 18.1329 2.8787C19.6055 2.99676 21.0529 3.34464 22.4221 3.91176C24.1409 4.62371 25.7026 5.66722 27.0181 6.98271C28.3336 8.29821 29.3771 9.85993 30.089 11.5787Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[3].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[3].Description')
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.023 14.0609C22.5527 13.1197 22.9945 12.2704 23.2669 11.624C24.5897 8.485 23.2817 4.87434 20.0842 3.40151C16.8866 1.92868 13.6758 3.45587 12.2667 6.40456C9.57197 4.5555 5.97733 4.82705 3.995 7.71259C2.01267 10.5981 2.63481 14.3678 5.34991 16.4248C6.58214 17.3584 9.01917 18.7342 11.3136 19.9585M23.0878 16.6457C22.4899 13.4327 19.7561 11.083 16.314 11.7216C12.8719 12.3603 10.6462 15.4658 11.1116 18.8402C11.4854 21.5512 13.5491 27.9121 14.3459 30.3081C14.4546 30.635 14.509 30.7985 14.6167 30.9125C14.7104 31.0118 14.8351 31.0838 14.968 31.1154C15.1206 31.1516 15.2893 31.1169 15.6268 31.0476C18.1002 30.5397 24.6407 29.1464 27.1755 28.1147C30.3305 26.8305 31.9587 23.3524 30.7391 20.05C29.5196 16.7476 26.1693 15.5571 23.0878 16.6457Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[4].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[4].Description')
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.75 25.5V17C29.75 9.95837 24.0416 4.25 17 4.25C9.95837 4.25 4.25 9.95837 4.25 17V25.5M7.79167 29.75C5.83566 29.75 4.25 28.1643 4.25 26.2083V23.375C4.25 21.419 5.83566 19.8333 7.79167 19.8333C9.74767 19.8333 11.3333 21.419 11.3333 23.375V26.2083C11.3333 28.1643 9.74767 29.75 7.79167 29.75ZM26.2083 29.75C24.2523 29.75 22.6667 28.1643 22.6667 26.2083V23.375C22.6667 21.419 24.2523 19.8333 26.2083 19.8333C28.1643 19.8333 29.75 21.419 29.75 23.375V26.2083C29.75 28.1643 28.1643 29.75 26.2083 29.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[5].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[5].Description'),
        },
        {
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9H11.5C10.6716 9 10 9.67157 10 10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5C14 14.3284 13.3284 15 12.5 15H10M12 8V9M12 15V16M18 12H18.01M6 12H6.01M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2ZM18.5 12C18.5 12.2761 18.2761 12.5 18 12.5C17.7239 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.7239 18.5 12ZM6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[6].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[6].Description'),
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5835 6.37492H25.9252C27.512 6.37492 28.3054 6.37492 28.9115 6.68373C29.4446 6.95537 29.878 7.38882 30.1497 7.92195C30.4585 8.52803 30.4585 9.32144 30.4585 10.9083V12.7499C30.4585 14.0701 30.4585 14.7302 30.2428 15.2509C29.9553 15.9451 29.4037 16.4967 28.7094 16.7842C28.1887 16.9999 27.5287 16.9999 26.2085 16.9999M18.4168 27.6249H8.07516C6.48835 27.6249 5.69494 27.6249 5.08886 27.3161C4.55573 27.0445 4.12229 26.611 3.85064 26.0779C3.54183 25.4718 3.54183 24.6784 3.54183 23.0916V21.2499C3.54183 19.9298 3.54183 19.2697 3.7575 18.749C4.04507 18.0547 4.59665 17.5032 5.29089 17.2156C5.81158 16.9999 6.47166 16.9999 7.79183 16.9999M14.5918 20.5416H19.4085C19.8052 20.5416 20.0036 20.5416 20.1551 20.4644C20.2884 20.3965 20.3967 20.2881 20.4646 20.1548C20.5418 20.0033 20.5418 19.805 20.5418 19.4083V14.5916C20.5418 14.1949 20.5418 13.9965 20.4646 13.845C20.3967 13.7117 20.2884 13.6034 20.1551 13.5355C20.0036 13.4583 19.8052 13.4583 19.4085 13.4583H14.5918C14.1951 13.4583 13.9968 13.4583 13.8453 13.5355C13.712 13.6034 13.6036 13.7117 13.5357 13.845C13.4585 13.9965 13.4585 14.1949 13.4585 14.5916V19.4083C13.4585 19.805 13.4585 20.0033 13.5357 20.1548C13.6036 20.2881 13.712 20.3965 13.8453 20.4644C13.9968 20.5416 14.1951 20.5416 14.5918 20.5416ZM25.2168 31.1666H30.0335C30.4302 31.1666 30.6286 31.1666 30.7801 31.0894C30.9134 31.0215 31.0217 30.9131 31.0896 30.7798C31.1668 30.6283 31.1668 30.43 31.1668 30.0333V25.2166C31.1668 24.8199 31.1668 24.6215 31.0896 24.47C31.0217 24.3367 30.9134 24.2284 30.7801 24.1605C30.6286 24.0833 30.4302 24.0833 30.0335 24.0833H25.2168C24.8201 24.0833 24.6218 24.0833 24.4703 24.1605C24.337 24.2284 24.2286 24.3367 24.1607 24.47C24.0835 24.6215 24.0835 24.8199 24.0835 25.2166V30.0333C24.0835 30.43 24.0835 30.6283 24.1607 30.7798C24.2286 30.9131 24.337 31.0215 24.4703 31.0894C24.6218 31.1666 24.8201 31.1666 25.2168 31.1666ZM3.96683 9.91659H8.7835C9.1802 9.91659 9.37855 9.91659 9.53007 9.83938C9.66335 9.77147 9.77172 9.66311 9.83963 9.52983C9.91683 9.37831 9.91683 9.17996 9.91683 8.78325V3.96659C9.91683 3.56988 9.91683 3.37153 9.83963 3.22001C9.77172 3.08673 9.66335 2.97837 9.53007 2.91046C9.37855 2.83325 9.1802 2.83325 8.7835 2.83325H3.96683C3.57013 2.83325 3.37177 2.83325 3.22025 2.91046C3.08697 2.97837 2.97861 3.08673 2.9107 3.22001C2.8335 3.37153 2.8335 3.56988 2.8335 3.96659V8.78325C2.8335 9.17996 2.8335 9.37831 2.9107 9.52983C2.97861 9.66311 3.08697 9.77147 3.22025 9.83938C3.37177 9.91659 3.57013 9.91659 3.96683 9.91659Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[7].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[7].Description'),
        },
        {
            icon: '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5833 5.66667H11.05C8.66978 5.66667 7.47967 5.66667 6.57054 6.12989C5.77085 6.53735 5.12068 7.18752 4.71322 7.98721C4.25 8.89633 4.25 10.0864 4.25 12.4667V22.95C4.25 25.3302 4.25 26.5203 4.71322 27.4295C5.12068 28.2291 5.77085 28.8793 6.57054 29.2868C7.47967 29.75 8.66978 29.75 11.05 29.75H21.5333C23.9136 29.75 25.1037 29.75 26.0128 29.2868C26.8125 28.8793 27.4626 28.2291 27.8701 27.4295C28.3333 26.5203 28.3333 25.3302 28.3333 22.95V18.4167M18.4167 24.0833H9.91667M21.25 18.4167H9.91667M28.5052 5.4948C30.1649 7.15452 30.1649 9.84548 28.5052 11.5052C26.8455 13.1649 24.1545 13.1649 22.4948 11.5052C20.8351 9.84548 20.8351 7.15452 22.4948 5.4948C24.1545 3.83507 26.8455 3.83507 28.5052 5.4948Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 2.Cards 1[8].Title'),
            description: t('Pages.Smart Pos.Section 2.Cards 1[8].Description'),
        },
    ]

    const industries = [
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M24.9996 17C24.9996 18.0609 24.5782 19.0783 23.828 19.8284C23.0779 20.5786 22.0605 21 20.9996 21C19.9387 21 18.9213 20.5786 18.1712 19.8284C17.421 19.0783 16.9996 18.0609 16.9996 17M12.6328 16.4014L11.9328 24.8014C11.7824 26.6059 11.7072 27.5082 12.0123 28.2042C12.2803 28.8157 12.7446 29.3204 13.3318 29.6382C14.0001 30 14.9054 30 16.7162 30H25.283C27.0937 30 27.9991 30 28.6674 29.6382C29.2546 29.3204 29.7189 28.8157 29.9869 28.2042C30.2919 27.5082 30.2167 26.6059 30.0664 24.8014L29.3664 16.4014C29.237 14.8488 29.1723 14.0724 28.8285 13.4849C28.5257 12.9674 28.0748 12.5526 27.5341 12.2938C26.92 12 26.141 12 24.583 12L17.4162 12C15.8582 12 15.0792 12 14.4651 12.2938C13.9243 12.5526 13.4735 12.9674 13.1707 13.4849C12.8269 14.0724 12.7622 14.8487 12.6328 16.4014Z" stroke="#2670E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[0].Title'),
            img: '/images/smart-pos/retail.webp'
        },
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.913 11.8717C30.913 11.3754 30.657 10.8993 30.1992 10.5484C29.7429 10.1965 29.1238 9.99963 28.4782 9.99963C25.3338 9.99963 17.7095 9.99963 14.5652 9.99963C13.9196 9.99963 13.3005 10.1965 12.8441 10.5484C12.3864 10.8993 12.1304 11.3754 12.1304 11.8717C12.1304 16.2021 12.1304 32.1973 12.1304 32.1973C12.1304 32.6402 12.5978 32.9996 13.1738 32.9996H29.8695C30.4455 32.9996 30.913 32.6402 30.913 32.1973V11.8717ZM28.826 11.8717V31.395H14.2173V11.8717C14.2173 11.8011 14.2535 11.7327 14.3189 11.6824C14.3843 11.6321 14.4733 11.6043 14.5652 11.6043H28.4782C28.57 11.6043 28.6591 11.6321 28.7245 11.6824C28.7898 11.7327 28.826 11.8011 28.826 11.8717Z" fill="#2670E9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9545 33H31.0455C31.5724 33 32 32.552 32 32C32 31.448 31.5724 31 31.0455 31H11.9545C11.4276 31 11 31.448 11 32C11 32.552 11.4276 33 11.9545 33Z" fill="#2670E9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.1933 19.5318C21.8227 19.1987 21.2231 19.1987 20.8525 19.5318C20.8525 19.5318 19.8015 20.4744 18.9616 21.6818C18.3457 22.5698 17.8638 23.5953 17.8638 24.5196C17.8638 26.3353 19.503 27.8088 21.5229 27.8088C23.5428 27.8088 25.182 26.3353 25.182 24.5196C25.182 23.5953 24.7001 22.5698 24.0842 21.6818C23.2443 20.4744 22.1933 19.5318 22.1933 19.5318ZM21.5229 21.4112C21.8151 21.7284 22.1616 22.1366 22.4753 22.5857C22.899 23.1962 23.2848 23.8841 23.2848 24.5196C23.2848 25.3939 22.4955 26.1034 21.5229 26.1034C20.5503 26.1034 19.761 25.3939 19.761 24.5196C19.761 23.8841 20.1468 23.1962 20.5705 22.5857C20.8842 22.1366 21.2307 21.7284 21.5229 21.4112Z" fill="#2670E9"/><path d="M19.4346 16.0007L23.6085 16.0007" stroke="#2670E9" stroke-width="2" stroke-linecap="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[1].Title'),
            img: '/images/smart-pos/parking.webp'
        },
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M25.5991 30H12.4009C12.1793 30 12 30.2236 12 30.5C12 30.7764 12.1793 31 12.4009 31H25.5991C25.8207 31 26 30.7764 26 30.5C26 30.2236 25.8207 30 25.5991 30Z" fill="#2670E9" stroke="#2670E9"/><path d="M28.2143 14.449H27.5604C27.3576 12.2698 27.3576 12 24.6142 12L13.0012 12.0011C10.1809 12.0011 10.1809 12.2698 9.99951 15.0187V18.1447C9.99951 23.0275 13.9512 27 18.8078 27C22.2687 27 25.2681 24.982 26.7075 22.0562H28.2155C30.3012 22.0562 31.9995 20.3499 31.9995 18.252C31.9995 16.1552 30.3022 14.4478 28.2155 14.4478L28.2143 14.449ZM18.8077 25.88C14.5658 25.88 11.1135 22.4093 11.1135 18.1448V15.0188C11.1135 13.972 11.96 13.1211 13.0012 13.1211H24.6142C25.6554 13.1211 26.5018 13.9721 26.5018 15.0188V18.1448C26.5018 22.4093 23.0496 25.88 18.8077 25.88ZM28.2143 20.9362H27.1644C27.456 20.0579 27.6159 19.1194 27.6159 18.1449V15.569H28.2143C29.6863 15.569 30.8842 16.7733 30.8842 18.2531C30.8842 19.733 29.6863 20.9373 28.2143 20.9373V20.9362Z" fill="#2670E9" stroke="#2670E9"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[2].Title'),
            img: '/images/smart-pos/cafes.webp'
        },
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M17 23C17 23 18.5 25 21 25C23.5 25 25 23 25 23M26 18.24C25.605 18.725 25.065 19 24.5 19C23.935 19 23.41 18.725 23 18.24M19 18.24C18.605 18.725 18.065 19 17.5 19C16.935 19 16.41 18.725 16 18.24M31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21Z" stroke="#2670E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[3].Title'),
            img: '/images/smart-pos/beauty.webp'
        }, 
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M16.5 16H19.25M16.5 20H19.25M16.5 24H19.25M22.75 16H25.5M22.75 20H25.5M22.75 24H25.5M29 30V15.2C29 14.0799 29 13.5198 28.782 13.092C28.5903 12.7157 28.2843 12.4097 27.908 12.218C27.4802 12 26.9201 12 25.8 12H16.2C15.0799 12 14.5198 12 14.092 12.218C13.7157 12.4097 13.4097 12.7157 13.218 13.092C13 13.5198 13 14.0799 13 15.2V30M31 30H11" stroke="#2670E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[4].Title'),
            img: '/images/smart-pos/hotels.webp'
        }, 
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M21 30L20.8999 29.8499C20.2053 28.808 19.858 28.287 19.3991 27.9098C18.9929 27.5759 18.5248 27.3254 18.0216 27.1726C17.4533 27 16.8271 27 15.5748 27H14.2C13.0799 27 12.5198 27 12.092 26.782C11.7157 26.5903 11.4097 26.2843 11.218 25.908C11 25.4802 11 24.9201 11 23.8V15.2C11 14.0799 11 13.5198 11.218 13.092C11.4097 12.7157 11.7157 12.4097 12.092 12.218C12.5198 12 13.0799 12 14.2 12H14.6C16.8402 12 17.9603 12 18.816 12.436C19.5686 12.8195 20.1805 13.4314 20.564 14.184C21 15.0397 21 16.1598 21 18.4M21 30V18.4M21 30L21.1001 29.8499C21.7947 28.808 22.142 28.287 22.6009 27.9098C23.0071 27.5759 23.4752 27.3254 23.9784 27.1726C24.5467 27 25.1729 27 26.4252 27H27.8C28.9201 27 29.4802 27 29.908 26.782C30.2843 26.5903 30.5903 26.2843 30.782 25.908C31 25.4802 31 24.9201 31 23.8V15.2C31 14.0799 31 13.5198 30.782 13.092C30.5903 12.7157 30.2843 12.4097 29.908 12.218C29.4802 12 28.9201 12 27.8 12H27.4C25.1598 12 24.0397 12 23.184 12.436C22.4314 12.8195 21.8195 13.4314 21.436 14.184C21 15.0397 21 16.1598 21 18.4" stroke="#2670E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[5].Title'),
            img: '/images/smart-pos/education.webp'
        },
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M24 13.6C24 13.0399 24 12.7599 23.891 12.546C23.7951 12.3578 23.6422 12.2049 23.454 12.109C23.2401 12 22.9601 12 22.4 12H19.6C19.0399 12 18.7599 12 18.546 12.109C18.3578 12.2049 18.2049 12.3578 18.109 12.546C18 12.7599 18 13.0399 18 13.6V16.4C18 16.9601 18 17.2401 17.891 17.454C17.7951 17.6422 17.6422 17.7951 17.454 17.891C17.2401 18 16.9601 18 16.4 18H13.6C13.0399 18 12.7599 18 12.546 18.109C12.3578 18.2049 12.2049 18.3578 12.109 18.546C12 18.7599 12 19.0399 12 19.6V22.4C12 22.9601 12 23.2401 12.109 23.454C12.2049 23.6422 12.3578 23.7951 12.546 23.891C12.7599 24 13.0399 24 13.6 24H16.4C16.9601 24 17.2401 24 17.454 24.109C17.6422 24.2049 17.7951 24.3578 17.891 24.546C18 24.7599 18 25.0399 18 25.6V28.4C18 28.9601 18 29.2401 18.109 29.454C18.2049 29.6422 18.3578 29.7951 18.546 29.891C18.7599 30 19.0399 30 19.6 30H22.4C22.9601 30 23.2401 30 23.454 29.891C23.6422 29.7951 23.7951 29.6422 23.891 29.454C24 29.2401 24 28.9601 24 28.4V25.6C24 25.0399 24 24.7599 24.109 24.546C24.2049 24.3578 24.3578 24.2049 24.546 24.109C24.7599 24 25.0399 24 25.6 24H28.4C28.9601 24 29.2401 24 29.454 23.891C29.6422 23.7951 29.7951 23.6422 29.891 23.454C30 23.2401 30 22.9601 30 22.4V19.6C30 19.0399 30 18.7599 29.891 18.546C29.7951 18.3578 29.6422 18.2049 29.454 18.109C29.2401 18 28.9601 18 28.4 18L25.6 18C25.0399 18 24.7599 18 24.546 17.891C24.3578 17.7951 24.2049 17.6422 24.109 17.454C24 17.2401 24 16.9601 24 16.4V13.6Z" stroke="#2670E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[6].Title'),
            img: '/images/smart-pos/healthcare.webp'
        },
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M25.5991 30H12.4009C12.1793 30 12 30.2236 12 30.5C12 30.7764 12.1793 31 12.4009 31H25.5991C25.8207 31 26 30.7764 26 30.5C26 30.2236 25.8207 30 25.5991 30Z" fill="#2670E9" stroke="#2670E9"/><path d="M28.2143 14.449H27.5604C27.3576 12.2698 27.3576 12 24.6142 12L13.0012 12.0011C10.1809 12.0011 10.1809 12.2698 9.99951 15.0187V18.1447C9.99951 23.0275 13.9512 27 18.8078 27C22.2687 27 25.2681 24.982 26.7075 22.0562H28.2155C30.3012 22.0562 31.9995 20.3499 31.9995 18.252C31.9995 16.1552 30.3022 14.4478 28.2155 14.4478L28.2143 14.449ZM18.8077 25.88C14.5658 25.88 11.1135 22.4093 11.1135 18.1448V15.0188C11.1135 13.972 11.96 13.1211 13.0012 13.1211H24.6142C25.6554 13.1211 26.5018 13.9721 26.5018 15.0188V18.1448C26.5018 22.4093 23.0496 25.88 18.8077 25.88ZM28.2143 20.9362H27.1644C27.456 20.0579 27.6159 19.1194 27.6159 18.1449V15.569H28.2143C29.6863 15.569 30.8842 16.7733 30.8842 18.2531C30.8842 19.733 29.6863 20.9373 28.2143 20.9373V20.9362Z" fill="#2670E9" stroke="#2670E9"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[7].Title'),
            img: '/images/smart-pos/transportation.webp'
        },
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M15.0001 20H19.0001M17.0001 18V22M24.0001 21H24.0101M27.0001 19H27.0101M19.4491 14H22.5512C25.1761 14 26.4885 14 27.5187 14.4974C28.4257 14.9354 29.1793 15.6371 29.6808 16.5106C30.2503 17.5027 30.3438 18.8118 30.5309 21.43L30.7769 24.8745C30.8975 26.5634 29.5599 28 27.8667 28C27.0008 28 26.1796 27.6154 25.6253 26.9502L25.2501 26.5C24.907 26.0882 24.7354 25.8823 24.54 25.7159C24.1305 25.3672 23.6346 25.1349 23.1045 25.0436C22.8516 25 22.5836 25 22.0476 25H19.9527C19.4167 25 19.1487 25 18.8958 25.0436C18.3656 25.1349 17.8698 25.3672 17.4602 25.7159C17.2649 25.8823 17.0933 26.0882 16.7501 26.5L16.375 26.9502C15.8206 27.6154 14.9995 28 14.1336 28C12.4404 28 11.1027 26.5634 11.2234 24.8745L11.4694 21.43C11.6564 18.8118 11.7499 17.5027 12.3195 16.5106C12.821 15.6371 13.5746 14.9354 14.4816 14.4974C15.5118 14 16.8242 14 19.4491 14Z" stroke="#2670E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[8].Title'),
            img: '/images/smart-pos/entertainment.webp'
        },
        {
            icon: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#2670E9" fill-opacity="0.1"/><path d="M24.5 20.5H23.5L22 23.5L20 17.5L18.5 20.5H17.5M20.9932 14.1358C18.9938 11.7984 15.6597 11.1696 13.1547 13.31C10.6496 15.4504 10.297 19.029 12.2642 21.5604C13.7501 23.4724 17.9713 27.311 19.948 29.0749C20.3114 29.3991 20.4931 29.5613 20.7058 29.6251C20.8905 29.6805 21.0958 29.6805 21.2805 29.6251C21.4932 29.5613 21.6749 29.3991 22.0383 29.0749C24.015 27.311 28.2362 23.4724 29.7221 21.5604C31.6893 19.029 31.3797 15.4279 28.8316 13.31C26.2835 11.1922 22.9925 11.7984 20.9932 14.1358Z" stroke="#2670E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: t('Pages.Smart Pos.Section 3.Cards 1[9].Title'),
            img: '/images/smart-pos/gym.webp'
        },
         
    ]
</script>

<style lang="scss" scoped>

</style>