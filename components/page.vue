<template lang="">
    <section class="py-16">
        <div class="container">
            <div class="post-content" v-if="post[0]">
                <h1 class="mb-10 text-center" v-html="post[0].title.rendered"></h1>
                <div v-html="post[0].content.rendered"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const {slug} = defineProps(['slug'])

    const {data: post, pending, error, refresh } = await useFetch('https://backend.montypay.com/wp-json/wp/v2/pages', {
        query: { slug: slug },
    });
 </script>

 <style lang="">
     
 </style>