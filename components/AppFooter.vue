<template lang="">
    <footer class="text-primary py-12 lg:pt-24 overflow-hidden bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat">
        <div class="container">
            <div class="flex flex-col lg:flex-row gap-10 justify-between">
                <div class="lg:flex-[4]">
                    <NewsLetter />
                    <nav class="nav">
                        <NavItemsWrapper class="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-0 justify-between mt-14" layout="footer" />
                    </nav>
                </div>
            </div>

            <hr class="border-[#e9edf422] mt-10" />

            <div class="flex lg:flex-1 flex-col lg:flex-row justify-between lg:items-end w-full">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col lg:flex-row items-center flex-wrap gap-4 mt-10">
                        <h4 class="text-3xl font-medium">Get the app</h4>
                        <CtaBoxes link="https://apps.apple.com/us/app/montypay/id1626442406" subtitle="Download on the" title="App Store" icon="fa6-brands:apple" class="py-2 px-3 flex-1 rounded-lg" />
                        <CtaBoxes link="https://play.google.com/store/search?q=montypay&c=apps" subtitle="Get it on" title="Google Play" icon="fa6-brands:google-play" class="py-2 px-3 flex-1 rounded-lg" />
                    </div>
                </div>


                <div class="flex flex-col lg:flex-row items-center gap-10 mt-10 lg:mt-0">
                    <SocialMedia :socialMedia="[
                        { icon: 'youtube', link: 'https://www.youtube.com/channel/UCCvgqv9D5OLIZkEETRdxw1w' },
                        { icon: 'x-twitter', link: 'https://twitter.com/MontyPay' },
                        { icon: 'facebook-f', link: 'https://www.facebook.com/Monty.pay111' },
                        { icon: 'instagram', link: 'https://www.instagram.com/monty_pay' },
                        { icon: 'linkedin-in', link: 'https://www.linkedin.com/company/montypay' }
                    ]" />
                    <CtaBoxes structured="true" link="https://wa.me/message/SITW3RZUGX65H1" subtitle="" title="+ 44 749 631 21 10" icon="logos:whatsapp-icon" class="py-2 px-4 mx-auto lg:mx-0 rounded-full" />
                </div>
                
            </div>
            

            <hr class="border-[#e9edf422] mt-10" />

            <p class="text-center mt-10">© MontyPay 2025</p>
        </div>
    </footer>
</template>

<script setup>
    const props = defineProps(['pageName'])
</script>

<style lang="">
    
</style>