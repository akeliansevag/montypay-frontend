<template lang="">
    <div class="md:hidden mb-4 ps-7 z-20">
        <swiper-container
            :slides-per-view="1.5"
            :space-between="30"
            :grab-cursor="true"
        >
            <swiper-slide 
                v-for="(office,index) in our_offices" 
                :key="index"
                class="min-h-[200px]"
            >
            <div class="bg-white flex flex-col justify-center rounded-lg shadow-md px-2 py-5 h-full">
                <div class="flex flex-col gap-3 items-center text-center">
                    <img :src="`/images/flags/${office.icon}.svg`" :alt="office.location" width="25" height="25" />
                    <p class="font-semibold">{{ office.location }}</p>
                    <p v-html="office.address"></p>
                </div>
            </div>
            </swiper-slide>
        </swiper-container>
    </div>
    <div>
        <img class="-mt-[100px] md:mt-0" src="/images/our-offices.svg" width="3072" height="1646" />
        <div v-for="(office, index) in our_offices" :key="index" :style="{ top: `${office.top}%`, left: `${office.left}%` }" class="md:block group absolute w-[11px] h-[11px] rounded-full bg-secondary z-10 cursor-pointer">
            <div class="hidden md:group-hover:block absolute bottom-6 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 w-max p-4 bg-white rounded-lg shadow-md z-10">
                <div class="absolute bottom-0 start-1/2 translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                <div class="flex flex-col gap-3 items-center text-center">
                    <img :src="`/images/flags/${office.icon}.svg`" :alt="office.location" width="25" height="25" />
                    <p class="font-semibold">{{ office.location }}</p>
                    <p v-html="office.address"></p>
                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>
    const { t, locale, setLocale } = useI18n()
    import { register } from 'swiper/element/bundle';
    register(); 
    const our_offices = [
        {
            icon: 'LB',
            location: t('Map.Items[0].Location'),
            address: t('Map.Items[0].Address'),
            top: '39.8',
            left: '57.7',
        },
        {
            icon: 'UK',
            location: t('Map.Items[1].Location'),
            address: t('Map.Items[1].Address'),
            top: '26',
            left: '47.8',
        },
        {
            icon: 'JO',
            location: t('Map.Items[2].Location'),
            address: t('Map.Items[2].Address'),
            top: '41.5',
            left: '58.3',
        },
        {
            icon: 'AE',
            location: t('Map.Items[3].Location'),
            address: t('Map.Items[3].Address'),
            top: '46',
            left: '63.2',
        },
        {
            icon: 'ID',
            location: t('Map.Items[4].Location'),
            address: t('Map.Items[4].Address'),
            top: '62',
            left: '77',
        },
        {
            icon: 'NG',
            location: t('Map.Items[5].Location'),
            address: t('Map.Items[5].Address'),
            top: '54.9',
            left: '49.8',
        },
        {
            icon: 'SA',
            location: t('Map.Items[6].Location'),
            address: t('Map.Items[6].Address'),
            top: '50',
            left: '61',
        }
    ];
</script>

<style lang="">
    
</style>