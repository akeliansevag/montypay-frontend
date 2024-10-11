<template>
  <li
    class="flex flex-col gap-5 h-full" 
    :class="{
      'lg:flex-row lg:hover:text-[#09bebd] group/item': layout === 'header',
      'text-primary': $route.path === '/',
    }">
    <Blob />
    
    <!-- Render NuxtLink for internal links -->
    <NuxtLink
      v-if="!isExternal(to) && !hasChildren"
      :to="to"
      exact-active-class="active"
      class="nav-link"
      :class="{ 'lg:py-8' : layout === 'header' }"
    >
      <h5 class="nav-link">{{ label }}</h5>
    </NuxtLink>

    <!-- Render <a> tag for external links (like PDFs) -->
    <a
      v-else-if="isExternal(to) && !hasChildren"
      :href="to"
      target="_blank"
      rel="noopener noreferrer"
      class="nav-link"
      :class="{ 'lg:py-8' : layout === 'header' }"
    >
      <h5 class="nav-link">{{ label }}</h5>
    </a>

    <div v-else class="flex justify-between items-center gap-2 cursor-pointer"
         :class="{'lg:py-8' : layout === 'header' }"
         @click="isMobile() ? toggleNavItems() :  null">
      <h5>{{ label }}</h5>
      <ClientOnly>
        <Icon 
          v-if="(layout === 'header' || (layout === 'footer' && isMobile()))" 
          name="fa6-solid:angle-down"
          class="icon text-sm transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180' : navItemsVisible && isMobile() }"
        />
      </ClientOnly>
    </div>

    <!-- Handling child sections -->
    <ul
      v-if="hasChildren && navItemsVisible"
      class="flex flex-col gap-8"
      :class="{ 'lg:absolute lg:top-full lg:left-0 lg:flex-row lg:w-max lg:-translate-x-1/2 lg:translate-y-px lg:bg-primary lg:py-16 lg:px-24 ml-4 xl:rounded-b-lg lg:invisible lg:group/edit lg:group-hover/item:visible' : layout === 'header',
      '' : layout === 'footer'}"
    >
      <li v-for="(child, index) in children" :key="index">
        <ul v-if="child.sections && child.sections.length" class="flex flex-col" :class="{ 'lg:flex-row gap-6 lg:gap-32' : layout === 'header', 'gap-2.5' : layout === 'footer' }">
          <li v-for="(section, sectionIndex) in child.sections" :key="sectionIndex">
            <span v-if="(section.pages && section.pages.length) && layout === 'header'" class="lg:text-black text-base">{{ section.label }}</span>
            <ul v-if="section.pages && section.pages.length" :class="{ 'mt-2 lg:mt-8': section.label && layout === 'header', 'gap-1.5 lg:gap-4' : layout === 'header', 'gap-2.5' : layout === 'footer'}" class="flex flex-col" >
              <li v-for="(page, pageIndex) in section.pages" :key="pageIndex">
                <NuxtLink
                  v-if="!isExternal(page.to)"
                  :to="page.to"
                  class="nav-link font-normal"
                  exact-active-class="active"
                  :class="{ 'lg:text-black lg:hover:text-[#09bebd]' : layout === 'header'}"
                >
                  <h5 class="nav-link font-normal">{{ page.label }}</h5>
                </NuxtLink>
                
                <!-- Handle external links for children pages -->
                <a
                  v-else
                  :href="page.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nav-link font-normal"
                  :class="{ 'lg:text-black lg:hover:text-[#09bebd]' : layout === 'header'}"
                >
                  <h5 class="nav-link font-normal">{{ page.label }}</h5>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script setup>
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
</script>

<style scoped lang="sass">
  .active h5 
    color: #09bebd !important
  
</style>
