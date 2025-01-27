<template lang="">
            <div class="md:hidden mb-4 pl-7 z-20">
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
                                <img :src="`/images/${office.icon}.svg`" :alt="office.location" width="25" height="25" />
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
                <div class="hidden md:group-hover:block absolute bottom-6 left-1/2 -translate-x-1/2 w-max p-4 bg-white rounded-lg shadow-md z-10">
                    <div class="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                    <div class="flex flex-col gap-3 items-center text-center">
                        <img :src="`/images/${office.icon}.svg`" :alt="office.location" width="25" height="25" />
                        <p class="font-semibold">{{ office.location }}</p>
                        <p v-html="office.address"></p>
                    </div>
                </div>
            </div> 
            
        </div>
</template>

<script setup>
    import { register } from 'swiper/element/bundle';
    register(); 
    const our_offices = [
        {
            icon: 'LB',
            location: 'Beirut, Lebanon',
            address: '1st floor, Bloc E,<br />Gefinor Center',
            top: '39.8',
            left: '57.7',
        },
        {
            icon: 'gb',
            location: 'London, UK',
            address: 'Beaumont Bridge House, <br /> 181 Queen Victoria Street',
            top: '26',
            left: '47.8',
        },
        {
            icon: 'JO',
            location: 'Amaan, Jordan',
            address: 'Office 501, Campbell Grey Living, <br /> Land Number 851, Al-Waibdeh <br /> - Al- Wastani Basin',
            top: '41.5',
            left: '58.3',
        },
        {
            icon: 'AE',
            location: 'Dubai, UAE',
            address: 'Unit 30, floor 20, <br /> Central Park Tower, DIFC',
            top: '46',
            left: '63.2',
        },
        {
            icon: 'id',
            location: 'Jakarta, Indonesia',
            address: '9th Floor Noble House Building, <br /> Lingkar Mega Kuningan, Kuningan, <br /> Kuningan Timur, Setiabudi, <br /> Jakarta Selatan, Jakarta 12950',
            top: '62',
            left: '77',
        },
        {
            icon: 'NG',
            location: 'Lagos, Nigeria',
            address: '10th Floor, Standard Chartered HQ. <br /> No.142, Ahmadu Bello Way, <br /> Victoria Island, Eti-Osa',
            top: '54.9',
            left: '49.8',
        }
    ];
</script>

<style lang="">
    
</style>