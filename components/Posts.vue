<template>
   <section ref="postsSection" class="py-16 lg:py-36">
        <div class="container">
            <div v-if="pending">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div v-for="number in perPage">             
                        <div class="flex flex-col gap-4 animate-pulse">
                            <div class="rounded-md h-[350px] w-full bg-[#f2f2f2]"></div>
                            <div class="rounded-md w-1/2 h-[25px] bg-[#f2f2f2]"></div>
                            <div class="rounded-md w-3/4 h-[28px] bg-[#f2f2f2]"></div>
                            <div class="rounded-md h-[15px] bg-[#f2f2f2]"></div>
                            <div class="rounded-md h-[15px] bg-[#f2f2f2]"></div>
                            <div class="rounded-md h-[15px] bg-[#f2f2f2]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="grid grid-cols-3 gap-10">
                    <div v-for="(post, index) in posts" :key="index">        
                        <div class="flex flex-col gap-4">
                            <NuxtLink :to="`/${detailPath}/${post.slug}`">
                                <img class="rounded-lg" :src="post._embedded['wp:featuredmedia'][0].media_details.sizes?.large?.source_url" />
                            </NuxtLink>
                            <div class="flex gap-10 text-base">
                                <div>
                                    <p class="flex gap-2 items-center">
                                        <span><img src="/images/user-02.svg"/></span>
                                        <span>{{ post._embedded.author[0].name }}</span>
                                    </p>
                                </div>
                                <div>
                                    <p class="flex gap-2 items-center">
                                        <span><img src="/images/calendar-check-02.svg"/></span>
                                        <span>{{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) }}</span>
                                    </p>
                                </div>
                            </div>
                            <NuxtLink :to="`/${detailPath}/${post.slug}`">
                                <h5 v-html="post.title.rendered"></h5>
                            </NuxtLink>
                            <p class="line-clamp-3">
                                <span v-html="post.excerpt.rendered"></span>
                            </p>
                        </div>
                       
                    </div>
                </div>
                <ul class="flex gap-2 justify-center items-center py-16">
                    <li>
                        <button :class="{'cursor-default opacity-40': currentPage==1}" class="text-3xl" @click="goToPage(currentPage>1 ? currentPage-1 : 1 )"> < </button>
                    </li>
                    <li v-for="pageNumber in totalPages" :key="'page-'+pageNumber">
                        <button :class="pageNumber == currentPage ? 'cursor-default bg-black text-white' : 'bg-white text-black' " @click="goToPage(pageNumber)" class="w-[40px] h-[40px] border border-black rounded-xl flex items-center justify-center hover:bg-black hover:text-white">
                            {{ pageNumber }}
                        </button>
                    </li>
                    <li>
                        <button :class="{'cursor-default opacity-40': currentPage==totalPages}" class="text-3xl" @click="goToPage( currentPage==totalPages ? currentPage : currentPage+1 )"> > </button>
                    </li>
                </ul>
            </div>
           
        </div>
    </section>
</template>

<script setup>
    const {category,detailPath} = defineProps(['category','detailPath']);
    const goToPage = (pageNumber) => {
        currentPage.value = pageNumber;
        postsSection.value.scrollIntoView({ behavior: "smooth" });
    }
    const totalPages = ref(0);
    const currentPage = ref(1);
    const perPage = ref(6);
    const postsSection = ref(null);

    const {data: posts, pending, error, refresh } = await useFetch('https://backend.montypay.com/wp-json/wp/v2/posts', {
        query: { categories: category, per_page: perPage, page: currentPage, _embed: '1' },
        lazy: true,
        server: false,
        onResponse({ request, response, options }) {
        totalPages.value = parseInt(response.headers.get('X-WP-TotalPages'));
        }
    });
</script>

<style lang="" scoped>

</style>