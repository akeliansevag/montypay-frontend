<template lang="">
    <header :class="$route.path === '/' || $route.path === '/ar' ? 'fixed' : 'sticky'" class="top-0 start-0 w-full z-30 transition-all duration-300 ease-in-out shadow-md">
        <div class="w-full z-[3] border-b border-[#e9edf422]" :class="navVisible ? 'fixed' : ''">
            <div class="container flex justify-between items-center">
                <NuxtLinkLocale to="/" class="nav-link">
                    <AppLogo :fill="navVisible || $route.path === '/' || $route.path === '/ar' ? '#FFFFFF' : 'auto'" /> 
                </NuxtLinkLocale>  
                <div class="flex items-center gap-4 lg:gap-7">
                    <nav aria-label="Primary" class="nav hidden lg:block">
                        <NavItemsWrapper layout="header" class="flex max-xl:gap-4 xl:gap-8" />
                    </nav>
                    <div class="flex items-center gap-2">
                         <ul class="flex gap-2 max-lg:hidden">
                            <li class="flex items-center nav-link">
                                <NuxtLinkLocale class="nav-link bg-secondary rounded-lg px-4 py-2" to="https://portal.montypay.com/" target="_blank">
                                    <h5 class="nav-link">{{ t('General.Buttons.Log In')}}</h5>
                                </NuxtLinkLocale>
                            </li>
                            
                        </ul>
                        <div :class="{'text-primary': $route.path === '/' || $route.path === '/ar'}">
                            <h5
                                v-for="lang in otherLocale"
                                :key="lang"
                                @click="changeLocale(lang)"
                                class="language_switcher flex items-center px-4 py-2 hover:bg-secondary transition bg-white text-black rounded-lg nav-link cursor-pointer font-bold"
                                
                            >
                                {{ lang === 'en' ? 'EN' : 'AR' }}
                            </h5>
                        </div>
                    </div>
                   

                    <div @click="toggleNav" class="menu-btn block lg:hidden pt-1.5 pb-2.5 text-3xl cursor-pointer">
                        <Icon v-if="!navVisible" name="fa7-solid:bars" class="icon text-lg" :class="($route.path !== '/' && $route.path !=='/ar') ? 'text-black': 'text-primary'" />
                        <Icon v-if="navVisible" name="fa7-solid:x" class="icon text-lg text-primary" />
                    </div>
                </div>
            </div>
        </div>

        <!-- <div v-if="navVisible" @click="closeNav" class="block lg:hidden fixed top-0 start-0 w-screen h-screen bg-black z-[1] opacity-70"></div> -->

        <nav aria-label="Primary" class="nav block lg:hidden fixed top-0 start-0 h-screen w-full text-primary bg-quaternary transition-transform duration-300 ease-in-out z-[2]" :class="{ 'ltr:-translate-x-full rtl:translate-x-full': !navVisible }">
            <div class="container">  
                <NavItemsWrapper layout="header" class="flex flex-col gap-8 mt-20" />
            </div>
        </nav>
    </header>
</template>

<script setup>
// Initialize i18n
const { t, locale, setLocale } = useI18n()

// Computed array of the other locale
const otherLocale = computed(() => (locale.value === 'en' ? ['ar'] : ['en']))
const i18nCookie = ref('')
// Function to switch locale
const changeLocale = (localeCode) => {
    setLocale(localeCode); // Change the locale using i18n
    i18nCookie.value = localeCode;
}

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
    // if (window.innerWidth > 1023) {
        stickyNav();
    // }
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