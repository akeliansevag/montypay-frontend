
<template lang="">
    <header :class="$route.path === '/' ? 'fixed' : 'sticky'" class="top-0 left-0 w-full z-30 transition-all duration-300 ease-in-out">
        <div class="w-full z-[3] border-b border-[#e9edf422]" :class="navVisible ? 'fixed' : ''">
            <div class="container flex justify-between items-center">
                <NuxtLink to="/" class="nav-link">
                    <AppLogo :fill="navVisible || $route.path === '/' ? '#FFFFFF' : 'auto'" /> 
                </NuxtLink>  
                <div class="flex items-center gap-4 lg:gap-7">
                    <nav class="nav hidden lg:block">
                        <NavItemsWrapper layout="header" class="flex gap-8" />
                    </nav>
                    <ul>
                        <li class="flex items-center nav-link" :class="{'text-primary': $route.path === '/'}">
                            <NuxtLink class="nav-link rounded-lg px-3 py-1 border" to="https://dashboard.montypay.com/login" target="_blank">
                                <h5 class="nav-link">Log In</h5>
                            </NuxtLink>
                        </li>
                    </ul>
                    <div @click="toggleNav" class="menu-btn block lg:hidden pt-1.5 pb-2.5 text-3xl cursor-pointer">
                        <Icon v-if="!navVisible" name="fa6-solid:bars" class="icon text-lg" :class="$route.path !== '/' ? 'text-black': 'text-primary'" />
                        <Icon v-if="navVisible" name="fa6-solid:x" class="icon text-lg text-primary" />
                    </div>
                </div>
            </div>
        </div>

        <!-- <div v-if="navVisible" @click="closeNav" class="block lg:hidden fixed top-0 left-0 w-screen h-screen bg-black z-[1] opacity-70"></div> -->

        <nav class="nav block lg:hidden fixed top-0 left-0 h-screen w-full text-primary bg-quaternary transition-transform duration-300 ease-in-out z-[2]" :class="{ '-translate-x-full': !navVisible }">
            <div class="container">  
                <NavItemsWrapper layout="header" class="flex flex-col gap-8 mt-20" />
            </div>
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
    };

    onMounted(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains('nav-link')) {
                closeNav()
            }
        });
        stickyNav();
    });

</script>

<style lang="sass">
    header
        animation: sticky 1s

    @keyframes sticky
        0% 
            top: -100px

        100% 
            top: 0
</style>