<!-- layouts/Default.vue -->

<template>
    <nav class="breadcrumbs">
        <ul>
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                <NuxtLinkLocale :to="breadcrumb.to">{{ breadcrumb.text }}</NuxtLinkLocale>
            </li>
        </ul>
    </nav>
</template>
  
<script setup>
    const router = useRouter();
    const breadcrumbs = ref([]);

    const updateBreadcrumbs = () => {
        const route = router.currentRoute.value;
        const matchedRoutes = route.matched;

        breadcrumbs.value = matchedRoutes.map(route => ({
            text: route.name,
            to: route.path,
        }));
    };

    onMounted(() => {
        updateBreadcrumbs();
    });

    watch(() => router.currentRoute.value.matched, updateBreadcrumbs);
</script>
  