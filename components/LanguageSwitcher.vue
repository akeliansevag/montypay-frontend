<template>
    <div class="flex items-center gap-2">
        <select
            @change="changeLanguage"
            :value="locale"
            class="border rounded-md px-2 py-1 focus:outline-none"
        >
            <option value="en">English</option>
            <option value="ar">العربية</option>
        </select>
    </div>
</template>


<script setup lang="ts">
    import { useI18n } from '#imports'

    const { locale, setLocale } = useI18n()

    function changeLanguage(event: Event) {
        const selected = (event.target as HTMLSelectElement).value
        setLocale(selected)
    }
</script>