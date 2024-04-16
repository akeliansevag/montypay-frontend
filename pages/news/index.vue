<template>
    <div>
        <Hero breadcrumbs="Solutions / Payment Services" title="News"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants" button="Get Started"
            image="omnichannel" />
    </div>
    <section class="py-16 lg:py-36">
        <div class="container">
            <div v-if="pending">
                Loading ...
            </div>
            <div v-else>
                <div v-for="(post, index) in posts" :key="index">
                    <h5 v-html="post.title.rendered"></h5>
                </div>
                <h2>Number of pages: {{ pages }}</h2>
            </div>
        </div>

    </section>
</template>

<script setup>
useSeoMeta({
    title: 'News',
    ogTitle: 'News',
    description: 'News description',
    ogDescription: 'News description',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const pages = ref(null);

const { pending, data: posts } = await useFetch('https://backend.montypay.com/wp-json/wp/v2/posts', {
    query: { categories: '7', per_page: '4', page: '1' },
    lazy: true,
    onResponse({ request, response, options }) {
        //console.log(response.headers.get('X-WP-TotalPages'));
        pages.value = response.headers.get('X-WP-TotalPages');
    }
});

</script>

<style lang="" scoped></style>