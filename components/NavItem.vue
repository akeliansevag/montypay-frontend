<template>
  <li
    class="flex flex-col gap-5 h-full" 
    :class="{
      'lg:flex-row lg:hover:text-[#003383] group/item': layout === 'header',
      'text-primary': $route.path === '/' || $route.path === '/ar',
    }">
    
    <!-- Render NuxtLinkLocale for internal links -->
    <NuxtLinkLocale
      v-if="!isExternal(to) && !hasChildren"
      :to="to"
      exact-active-class="active"
      class="relative nav-link"
      :class="{ 'lg:py-8' : layout === 'header' }"
    >
      <div class="link-line absolute bottom-[-1px] start-0 w-full h-[3px] invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100"></div>
      <h5 class="nav-link">{{ label }}</h5>
    </NuxtLinkLocale>

    <!-- Render <a> tag for external links (like PDFs) -->
    <a
      v-else-if="isExternal(to) && !hasChildren"
      :href="to"
      target="_blank"
      rel="noopener noreferrer"
      class="relative nav-link"
      :class="{ 'lg:py-8' : layout === 'header' }"
    >
      <div class="link-line absolute bottom-[-1px] start-0 w-full h-[3px] invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100"></div>
      <h5 class="nav-link">{{ label }}</h5>
    </a>

    <div v-else class="relative flex justify-between items-center gap-2 cursor-pointer" :class="{'lg:py-8' : layout === 'header' }" @click="isMobile() ? toggleNavItems() :  null">
      <h5>{{ label }}</h5>
      <div class="link-line absolute bottom-[-1px] start-0 w-full h-[3px] invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100"></div>
      <ClientOnly>
        <Icon 
          v-if="(layout === 'header' || (layout === 'footer' && isMobile()))" 
          name="fa7-solid:angle-down"
          class="icon text-sm transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180' : navItemsVisible && isMobile() }"
        />
      </ClientOnly>
    </div>

    <!-- fallback for crawlers / no JS -->
     <ClientOnly>
      <noscript>
        <a :href="to" class="link-line absolute bottom-[-1px] start-0 w-full h-[3px] invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100">{{ label }}</a>
      </noscript>
    </ClientOnly>
    <!-- Handling child sections -->
    <ul
      v-if="hasChildren && navItemsVisible"
      class="navigation flex flex-col gap-8 shadow-md"
      :class="{ 'lg:absolute lg:top-full lg:start-0 lg:flex-row lg:w-max xl:ltr:-translate-x-1/2 rtl:translate-x-1/2 lg:translate-y-px lg:py-8 lg:px-4 ms-4 xl:rounded-b-lg lg:invisible lg:group/edit lg:group-hover/item:visible' : layout === 'header',
      '' : layout === 'footer'}"
    >
      <li v-for="(child, index) in children" :key="index">
        <ul v-if="child.sections && child.sections.length" class="flex flex-col" :class="{ 'lg:flex-row gap-6 lg:gap-8' : layout === 'header', 'gap-2.5' : layout === 'footer' }">
          <li v-for="(section, sectionIndex) in child.sections" :key="sectionIndex">
            <span v-if="(section.pages && section.pages.length) && layout === 'header'" class="link-color flex items-center gap-2 text-base" :class="{ 'px-4' : section.label }">
              <span v-html="section.icon" class="no-fill"></span>
              {{ section.label }}
            </span>
            <ul v-if="section.pages && section.pages.length" :class="{ 'mt-2 lg:mt-8': section.label && layout === 'header', 'gap-1.5 lg:gap-4' : layout === 'header', 'gap-2.5' : layout === 'footer'}" class="flex flex-col" >
              <li v-for="(page, pageIndex) in section.pages" :key="pageIndex" class="group">
                <NuxtLinkLocale
                  v-if="!isExternal(page.to)"
                  :to="page.to"
                  class="nav-link font-normal"
                  exact-active-class="active"
                  :class="{ 'nav-link-color link-color flex justify-between items-center gap-6 py-2 px-4 rounded-sm' : layout === 'header' }"
                >
                  <h6 class="nav-link font-normal">{{ page.label }}</h6>
                  <Icon v-if="layout === 'header'" name="fa7-solid:angle-right" class="icon text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 rtl:rotate-180 transition-transform" />
                </NuxtLinkLocale>
                
                <!-- Handle external links for children pages -->
                <a
                  v-else
                  :href="page.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nav-link font-normal"
                  :class="{ 'nav-link-color link-color flex justify-between items-center gap-6 py-2 px-4 rounded-sm' : layout === 'header' }"
                >
                  <h6 class="nav-link font-normal">{{ page.label }}</h6>
                  <Icon v-if="layout === 'header'" name="fa7-solid:angle-right" class="icon text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 rtl:rotate-180 transition-transform" />
                </a>
                
                <!-- fallback for crawlers / no JS -->
                <ClientOnly>
                  <noscript>
                    <a :href="page.to" class="nav-link font-normal" :class="{ 'nav-link-color link-color flex justify-between items-center gap-6 py-2 px-4 rounded-sm' : layout === 'header' }">{{ page.label }}</a>
                  </noscript>
                </ClientOnly>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script setup>
const route = useRoute()
const props = defineProps(['header', 'footer', 'to', 'label', 'children', 'layout', 'target', 'external']);
const hasChildren = computed(() => props.children && props.children.length);
const navItemsVisible = ref(false);

// Helper function to detect external links (e.g., PDFs or external URLs)
const isExternal = (link) => link && (link.startsWith('/pdf/') || link.endsWith('.pdf') || link.startsWith('http'));

// Toggle visibility of child navigation items for mobile
const toggleNavItems = () => {
  navItemsVisible.value = !navItemsVisible.value;
};

// Handle window resize to control child nav visibility
const handleResize = () => {
  if (!isMobile()) {
    navItemsVisible.value = true;
  } else {
    navItemsVisible.value = false;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

useHead(() => {
  const darkRoutes = [
    '/omnichannel',
    '/online-payments',
    '/smart-pos',
    '/soft-pos',
    '/q-check',
    '/ecommerce-services',
    '/payment-orchestration-network',
  ]

  const bodyClass = darkRoutes.includes(route.path) ? 'dark-nav' : 'light-nav'

  return {
    bodyAttrs: {
      class: bodyClass
    }
  }
})
</script>

<style lang="sass">
  body.light-nav 
    .no-fill svg path
      fill: none !important

    .active h6 
      @apply lg:text-white

    header .navigation
      @apply lg:bg-[#0C0B1D]

      svg path
        @apply lg:stroke-white

      .nav-link-color
        @apply lg:hover:bg-[#6CA4FF1A]

        &.active 
          @apply lg:bg-[#6CA4FF1A]

        &.link-color
          @apply lg:text-gray-300 lg:hover:text-white

      .link-color
        @apply lg:text-white

  body.dark-nav 
    .no-fill svg path
      fill: none !important
      
    .active h6 
      @apply lg:text-[#003383]

    header .navigation
      @apply lg:bg-white

      svg path
        @apply lg:stroke-[#003383]

      .nav-link-color
        @apply lg:hover:bg-gray-100

        &.active
          @apply lg:bg-gray-100

        &.link-color
          @apply lg:text-gray-700 lg:hover:text-black

      .link-color
        @apply lg:text-[#003383]

  @media (min-width: 1024px) 
    body.homepage
      nav
        ul
          li:hover
            color: white !important 
      
    
  
          
</style>
