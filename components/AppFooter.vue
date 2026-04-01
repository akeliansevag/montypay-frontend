<template lang="">
    <footer class="text-primary py-12 lg:pt-24 overflow-hidden bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat">
        <div class="container">
            <div class="flex flex-col lg:flex-row gap-10 justify-between">
                <div class="lg:flex-[4]">
                    <NewsLetter />
                    <nav  aria-label="Footer" class="nav">
                        <NavItemsWrapper class="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-0 justify-between mt-14" layout="footer" />
                    </nav>
                </div>
            </div>

            <hr class="border-[#e9edf422] mt-10" />

            <div class="flex lg:flex-1 flex-col lg:flex-row justify-between lg:items-end w-full">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col lg:flex-row items-center flex-wrap gap-4 mt-10">
                        <h4 class="text-3xl font-medium">{{t('Footer.Get the app')}}</h4>
                        <CtaBoxes link="https://apps.apple.com/us/app/montypay/id1626442406" :subtitle="t('Footer.Download on the')" title="App Store" icon="fa6-brands:apple" class="py-2 px-3 flex-1 rounded-lg" />
                        <CtaBoxes link="https://play.google.com/store/search?q=montypay&c=apps" :subtitle="t('Footer.Get it on')" title="Google Play" icon="fa6-brands:google-play" class="py-2 px-3 flex-1 rounded-lg" />
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

            <p class="opacity-30 text-sm pb-20 mt-10">
                © {{ new Date().getFullYear() }} Monty Finance SAL<br/><br/>
                montypay.com provides information about payment acceptance products and services provided by Monty Finance SAL in Lebanon. It also provides information about other services offered in Lebanon and in other jurisdictions by affiliate companies, for which the relevant affiliates remain responsible.<br/><br/>
                Monty Finance SAL is registered in Lebanon (Beirut Register of Commerce No. 73215), Gefinor Center, Clemenceau St., Hamra, Beirut, Lebanon and is authorized by the Central Bank of Lebanon (“BDL”) to operate as a financial institution and payment service provider. Monty Finance SAL is listed on the BDL List of Financial Institutions under no. 23.<br/><br/>
                Information contained on montypay.com should not be construed as an offer, solicitation, advertisement, or promotion of financial products and services in any country where such offer, solicitation, advertisement, or promotion is not permitted under applicable local law.
            </p>
        </div>
    </footer>
</template>

<script setup>
     const { t, locale, setLocale } = useI18n()
    const props = defineProps(['pageName'])
</script>

<style lang="">
    
</style>