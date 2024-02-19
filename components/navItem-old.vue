<template>
    <li class="flex items-center gap-2 text-primary hover:text-tertiary h-full hover:border-b hover:border-b-tertiary py-5 group/item">
      <template v-if="!hasChildren">
          <NuxtLink :to="to" class="nav-link">{{ label }}</NuxtLink>
      </template>
      <template v-else>
          <span>{{ label }}</span>
          <Icon name="fa6-solid:angle-down" class="icon text-sm" />
      </template>
      
      <ul v-if="hasChildren" class="absolute top-full left-0 flex gap-8 w-max -translate-x-1/2 translate-y-px bg-primary p-6 rounded-b-lg invisible group/edit group-hover/item:visible">
        <li v-for="(child, index) in children" :key="index">
          <ul v-if="child.sections && child.sections.length" class="flex gap-8">
            <li v-for="(section, sectionIndex) in child.sections" :key="sectionIndex">
              <span v-if="section.pages && section.pages.length" class="text-black">{{ section.label }}</span>
              <ul v-if="section.pages && section.pages.length" :class="{ 'mt-8': section.label }" class="flex flex-col gap-4">
                <li v-for="(page, pageIndex) in section.pages" :key="pageIndex">
                  <NuxtLink :to="page.to" class="text-black hover:text-tertiary">{{ page.label }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </template>
    
  <script setup>
    import { computed } from 'vue';
  
    const props = defineProps(['to', 'label', 'children']);
    const hasChildren = computed(() => props.children && props.children.length);
  </script>
  
  <style scoped>
  
  </style>
  