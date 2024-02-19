<template lang="">
    <footer class="bg-quaternary text-primary py-12 lg:py-24 overflow-hidden">

        <Blob />
        
        <div class="container">
            <div class="flex flex-col lg:flex-row gap-10 justify-between">
                <div class="lg:flex-[4]">
                    <NewsLetter />

                    <nav class="nav">
                        <NavItemsWrapper class="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-20 mt-14" layout="footer" />
                    </nav>

                    <!-- <nav class="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-20 mt-14">
                        <div class="flex flex-col flex-1 gap-5">
                            <h5>Solutions</h5>
                            <ul class="flex flex-col gap-2.5">
                                <li>
                                    <h6>Online</h6>
                                </li>
                                <li>
                                    <h6>In-store payments</h6>
                                </li>
                                <li>
                                    <h6>Merchant digital services</h6>
                                </li>
                                <li>
                                    <h6>Payment orchestration network</h6>
                                </li>
                                <li>
                                    <h6>Whitelabel For PSP/Acquirer</h6>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col flex-1 gap-5">
                            <h5>Company</h5>
                            <ul class="flex flex-col gap-2.5">
                                <li>
                                    <h6>About us</h6>
                                </li>
                                <li>
                                    <h6>Contact</h6>
                                </li>
                                <li>
                                    <h6>Partners</h6>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col flex-1 gap-5">
                            <h5>Global coverage</h5>
                        </div>
                        <div class="flex flex-col flex-1 gap-5">
                            <h5>Developers</h5>
                            <ul class="flex flex-col gap-2.5">
                                <li>
                                    <h6>Documentation</h6>
                                </li>
                                <li>
                                    <h6>Api reference</h6>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col flex-1 gap-5">
                            <h5>Contact us</h5>
                        </div>
                    </nav> -->
                </div>

                <hr class="block lg:hidden border-[#e9edf422]" />
            
                <div class="flex lg:flex-1 flex-col justify-between lg:items-end w-full">
                    <div class="flex flex-col gap-4">
                        <h5 class="font-medium">Get the app</h5>

                        <div class="flex flex-row lg:flex-col flex-wrap gap-4">
                            <CtaBoxes link="https://apps.apple.com/us/app/montypay/id1626442406" subtitle="Download on the" title="App Store" icon="fa6-brands:apple" class="py-2 px-3 flex-1 rounded-lg" />
                            <CtaBoxes link="https://play.google.com/store/search?q=montypay&c=apps" subtitle="Get it on" title="Google Play" icon="fa6-brands:google-play" class="py-2 px-3 flex-1 rounded-lg" />
                        </div>
                    </div>

                    <hr class="block lg:hidden border-[#e9edf422] mt-10" />

                    <div class="flex mt-10 lg:mt-0">
                        <CtaBoxes structured="true" link="tel:+447496312110" subtitle="" title="+ 44 749 631 21 10" icon="logos:whatsapp-icon" class="py-2 px-4 mx-auto lg:mx-0 rounded-full" />
                     </div>
                </div>
            </div>

            <hr class="border-[#e9edf422] mt-10" />

            <nav class="flex flex-col lg:flex-row flex-wrap gap-2.5 lg:gap-9 mt-10">
                <NavItem to="/terms-and-conditions" label="Terms & Conditions" layout="footer" class="flex-none" />
                <NavItem to="/privacy-policy" label="Privacy Policy" layout="footer" class="flex-none" />
                <NavItem to="/customer-acceptance-policy" label="Customer Acceptance Policy" layout="footer" class="flex-none" />
                <NavItem to="/data-processing-agreement" label="Data Processing Agreement" layout="footer" class="flex-none" />
                <NavItem to="/platform-services-agreement" label="Platform Services Agreement" layout="footer" class="flex-none" />
            </nav>

            <hr class="border-[#e9edf422] mt-10" />

            <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-10">
                <p>© MontyPay 2024</p>

                <hr class="block lg:hidden border-[#e9edf422] w-full" />
                
                <SocialMedia :socialMedia="[
                    { icon: 'youtube', link: 'https://www.youtube.com/channel/UCCvgqv9D5OLIZkEETRdxw1w' },
                    { icon: 'x-twitter', link: 'https://twitter.com/MontyPay' },
                    { icon: 'facebook-f', link: 'https://www.facebook.com/Monty.pay111' },
                    { icon: 'instagram', link: 'https://www.instagram.com/monty_pay' },
                    { icon: 'linkedin-in', link: 'https://www.linkedin.com/company/montypay' }
                ]" />
            </div>
        </div>
    </footer>
</template>

<script setup>
     
</script>

<style lang="">
    
</style>