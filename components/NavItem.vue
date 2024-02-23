<template>
  <li class="flex flex-col gap-5 h-full" 
    :class="{'lg:flex-row lg:hover:text-tertiary lg:hover:border-b lg:hover:border-b-tertiary group/item': layout === 'header',
    'lg:fl': layout === 'footer',
    'text-primary': $route.path === '/'
  }">

    <NuxtLink v-if="!hasChildren" :to="to" class="nav-link" :class="{'lg:py-5' : layout === 'header' }"><h5>{{ label }}</h5></NuxtLink>

    <div v-else class="flex justify-between items-center gap-2 cursor-pointer" :class="{'lg:py-5' : layout === 'header' }" @click="isMobile() ? toggleNavItems() :  null">
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
    <ul 
      v-if="hasChildren && navItemsVisible" 
      class="flex flex-col gap-8"
      :class="{ 'lg:absolute lg:top-full lg:left-0 lg:flex-row lg:w-max lg:-translate-x-1/2 lg:translate-y-px lg:bg-primary lg:p-6 ml-4 xl:rounded-b-lg lg:invisible lg:group/edit lg:group-hover/item:visible' : layout === 'header',
      '' : layout === 'footer'}"
      
    >
      <li v-for="(child, index) in children" :key="index">
        <ul v-if="child.sections && child.sections.length" class="flex flex-col" :class="{ 'lg:flex-row gap-6 lg:gap-8' : layout === 'header', 'gap-2.5' : layout === 'footer' }">
          <li v-for="(section, sectionIndex) in child.sections" :key="sectionIndex">
            <span v-if="(section.pages && section.pages.length) && layout === 'header'" class="lg:text-black">{{ section.label }}</span>
            <ul v-if="section.pages && section.pages.length" :class="{ 'mt-2 lg:mt-8': section.label && layout === 'header', 'gap-1.5 lg:gap-4' : layout === 'header', 'gap-2.5' : layout === 'footer'}" class="flex flex-col" >
              <li v-for="(page, pageIndex) in section.pages" :key="pageIndex">
                <NuxtLink 
                  :to="page.to" 
                  class="font-normal"
                  :class="{ 'lg:text-black lg:hover:text-tertiary' : layout === 'header'}">{{ page.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>
  
<script setup>
  const props = defineProps(['to', 'label', 'children', 'layout']);
  const hasChildren = computed(() => props.children && props.children.length);

  const navItemsVisible = ref(false);

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

  const toggleNavItems = () => {
    navItemsVisible.value = !navItemsVisible.value;
  };

</script>

<style scoped>

</style>
