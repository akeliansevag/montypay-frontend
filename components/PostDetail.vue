<template>
    <div class="container">
        <section class="pb-16">
            <NuxtLink :to="`/${backPath}`" class="py-10 block"> 
                <span> < </span> 
                <span>Back to {{backPath}}</span>
            </Nuxtlink>
            <div v-if="pending" class="animate-pulse">
                <div class="animate-pulse flex flex-col gap-7">
                    <div class="rounded-md h-[500px] w-full bg-[#f2f2f2]"></div>
                    <div class="rounded-md h-[20px] max-w-[300px] bg-[#f2f2f2]"></div>
                    <div class="rounded-md h-[50px] max-w-[1000px] bg-[#f2f2f2]"></div>    
                </div>
                <div class="rounded-md mt-3 h-[15px] max-w-[1000px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[700px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[800px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[650px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[300px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[1000px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[600px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[900px] bg-[#f2f2f2]"></div>
                <div class="rounded-md mt-3 h-[15px] max-w-[450px] bg-[#f2f2f2]"></div>
            </div>
            <div v-else>
                <div v-if="post">
                    <img class="rounded-lg mb-10" :src="post[0].acf.inner_image.sizes['banner-image']" />
                    <div class="flex flex-col gap-7 max-w-[1000px]">
                        <div class="flex gap-10 text-base">
                            <div>
                                <p class="flex gap-2 items-center">
                                    <span><img src="/images/user-02.svg"/></span>
                                    <span>{{ post[0]._embedded.author[0].name }}</span>
                                </p>
                            </div>
                            <div>
                                <p class="flex gap-2 items-center">
                                    <span><img src="/images/calendar-check-02.svg"/></span>
                                    <span>{{ new Date(post[0].date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) }}</span>
                                </p>
                            </div>
                        </div>
                        <h1 v-html="post[0].title.rendered"></h1>
                        <div class="post-content" v-html="post[0].content.rendered"></div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import he from 'he';
    const {backPath} = defineProps(['backPath']);
    
    const route = useRoute();
    const slug = route.params.slug;

    

    const {data: post, pending, error, refresh } = await useFetch('https://backend.montypay.com/wp-json/wp/v2/posts', {
        query: { slug: slug, _embed: '1', acf_format: 'standard' },
        lazy: true,
        server: false,
        onResponse({ request, response, options }) {
            if(response._data){
                useSeoMeta({
                    title: () => he.decode(response._data[0].title.rendered),
                    ogTitle: () => he.decode(response._data[0].title.rendered),
                    description: () => he.decode(response._data[0].excerpt.rendered).replace(/<[^>]*>/g, ''),
                    ogDescription: () => he.decode(response._data[0].excerpt.rendered).replace(/<[^>]*>/g, ''),
                    ogImage: response._data[0].acf.inner_image.sizes['banner-image'],
                    //twitterCard: 'summary_large_image',
                })
            }
        },
    });
</script>

<style lang="" scoped>

</style>