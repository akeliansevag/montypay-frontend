<template lang="">
        <div>
            <img src="/images/our-offices.svg" width="3072" height="1646" />
            <div v-for="(office, index) in our_offices" :key="index" :style="{ top: `${office.top}%`, left: `${office.left}%` }" class="group absolute w-[11px] h-[11px] rounded-full bg-red-800 z-10 cursor-pointer">
                <div class="hidden group-hover:block absolute bottom-6 left-1/2 -translate-x-1/2 w-max p-4 bg-white rounded-lg shadow-md z-10">
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
    const our_offices = [
        {
            icon: 'lb',
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
            icon: 'jo',
            location: 'Amaan, Jordan',
            address: 'Office 501, Campbell Grey Living, <br /> Land Number 851, Al-Waibdeh <br /> - Al- Wastani Basin',
            top: '41.5',
            left: '58.3',
        },
        {
            icon: 'ae',
            location: 'Dubai, UAE',
            address: 'Unit 30, floor 20, <br /> Central Park Tower, DIFC',
            top: '46',
            left: '63.2',
        },
        {
            icon: 'id',
            location: 'Jakarta, Indonesia',
            address: 'Menara Prima, Bloc 6, <br /> 24th floor, Lingkar Mega Kuningan',
            top: '62',
            left: '77',
        },
        {
            icon: 'ng',
            location: 'Lagos, Nigeria',
            address: '10th Floor, Standard Chartered HQ. <br /> No.142, Ahmadu Bello Way, <br /> Victoria Island, Eti-Osa',
            top: '54.9',
            left: '49.8',
        }
    ];
</script>

<style lang="">
    
</style>