
<template lang="">
    <header class="absolute top-0 left-0 w-full border-b border-[#e9edf422]">
        <div class="container">
            <div class="flex justify-between items-center z-[3]">
                <AppLogo :fill="navVisible ? '#000000' : '#FFFFFF'" /> 

                <nav class="nav hidden lg:block">
                    <ul class="flex gap-8">
                        <NavItem label="Solutions" :children="solutionSections" />
                        <NavItem label="Company" :children="companySections" />
                        <NavItem to="/" label="Global Coverage" />
                        <NavItem label="Developers" :children="developerSections" />
                        <NavItem to="/" label="Contact" />
                    </ul>
                </nav>
                
                <div @click="toggleNav" class="menu-btn block lg:hidden py-5 text-white text-3xl cursor-pointer">
                    <Icon v-if="!navVisible" name="fa6-solid:bars" class="icon" />
                    <Icon v-if="navVisible" name="fa6-solid:x" class="icon" />
                </div>
            </div>
        </div>

        <div v-if="navVisible" @click="closeNav" class="block lg:hidden fixed top-0 left-0 w-screen h-screen bg-black z-[1] opacity-50"></div>

        <nav class="nav block lg:hidden absolute top-0 left-0 h-screen w-3/4 bg-white transition-transform duration-100 ease-in-out z-[2]" :class="{ '-translate-x-full': !navVisible }">
            <ul class="flex gap-8">
                <li></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    const navVisible = ref(false);

    const toggleNav = () => {
        navVisible.value = !navVisible.value;
    };

    const closeNav = () => {
        navVisible.value = false
        console.log(navVisible)
    };

    const solutionSections = [
        {
            sections: [
                {
                    label: 'Payment services',
                    pages: [
                        { to: '/online', label: 'Online' },
                        { to: '/in-store-payments', label: 'In-store payments' },
                    ],
                },
                {
                    label: 'Digital services',
                    pages: [
                        { to: '/merchant-digital-services', label: 'Merchant digital services' },
                    ],
                },
                {
                    label: 'Tech services',
                    pages: [
                        { to: '/payment-orchestration-network', label: 'Payment orchestration network' },
                        { to: '/white-label', label: 'Whitelabel For PSP/Acquirer' },
                    ],
                },
            ],
        },
    ];

    const companySections = [
        {
            sections: [
                {
                    pages: [
                        { to: '/about-us', label: 'About us' },
                        { to: '/careers', label: 'Careers' },
                        { to: '/partners', label: 'Partners' },
                    ],
                },
            ],
        },
    ];

    const developerSections = [
        {
            sections: [
                {
                    pages: [
                        { to: '/documentation', label: 'Documentation' },
                        { to: '/api-reference', label: 'Api Reference' },
                    ],
                },
            ],
        },
    ];
</script>

<style lang="">
    
</style>