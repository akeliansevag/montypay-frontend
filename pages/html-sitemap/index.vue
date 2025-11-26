<template>
    <div class="container">
        <h1>Site Links</h1>
        <ul>
            <li v-for="l in links" :key="l.href">
                <a :href="l.href">{{ l.label }}</a>
            </li>
        </ul>
    </div>
</template>


<script setup>
    useHead({
        meta: [
            { name: "robots", content: "noindex, nofollow" }
        ]
    })

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Omnichannel', href: '/omnichannel' },
        { label: 'Online Payments', href: '/online-payments' },
        { label: 'Smart POS', href: '/smart-pos' },
        { label: 'Soft POS', href: '/soft-pos' },
        { label: 'Q-Check', href: '/q-check' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Partners', href: '/partners' },
        { label: 'News', href: '/news' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Global Coverage', href: '/global-coverage' },
        { label: 'Documentation', href: '/documentation' },
        { label: 'API Reference', href: '/api-reference' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'FAQ', href: '/faq' }
    ]
</script>
