<template lang="">
    <ul>
        <NavItem :header="true" :footer="true" :layout="layout" label="Solutions" :children="solutionSections" />
        <NavItem :header="true" :footer="true" :layout="layout" label="Company" :children="companySections" />
        <NavItem :header="true" :footer="true" :layout="layout" to="/global-coverage" label="Global Coverage" />
        <NavItem :header="true" :footer="true" :layout="layout" label="Developers" :children="developerSections" />
        <NavItem :header="true" :footer="true" :layout="layout" to="/contact-us" label="Contact" />
        <NavItem :header="true" :footer="true" :layout="layout" to="/faq" label="FAQ" />
        <NavItem v-if="layout=='footer'" :header="false" :footer="true" :layout="layout" label="Legal" :children="legalSections" />
    </ul>
</template>

<script setup>
const props = defineProps(['layout'])

const solutionSections = [
    {
        sections: [
            {
                label: 'Payment services',
                pages: [
                    { to: '/omnichannel', label: 'Omnichannel Solution' },
                    { to: '/online-payments', label: 'Online Payments' },
                    { to: '/smart-pos', label: 'Smart POS' },
                    { to: '/soft-pos', label: 'Soft POS' },
                    // { to: '/in-store-payments', label: 'In-store payments' },
                    { to: '/q-check', label: 'QCheck' },
                ],
                icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10H2M11 14H6M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            },
            {
                label: 'Digital services',
                pages: [
                    { to: '/ecommerce-services', label: 'eCommerce Services' },
                ],
                icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.57181 21C8.90661 20.3598 10.41 20 12 20C13.59 20 15.0934 20.3598 16.4282 21M6.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            },
            {
                label: 'Tech services',
                pages: [
                    { to: '/payment-orchestration-network', label: 'Payment Orchestration Network' },
                    { to: '/whitelable-for-psp-acquirer', label: 'Whitelabel For PSP/Acquirer' },
                ],
                icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.5H18.3C19.4201 4.5 19.9802 4.5 20.408 4.71799C20.7843 4.90973 21.0903 5.21569 21.282 5.59202C21.5 6.01984 21.5 6.57989 21.5 7.7V9C21.5 9.93188 21.5 10.3978 21.3478 10.7654C21.1448 11.2554 20.7554 11.6448 20.2654 11.8478C19.8978 12 19.4319 12 18.5 12M13 19.5H5.7C4.5799 19.5 4.01984 19.5 3.59202 19.282C3.21569 19.0903 2.90973 18.7843 2.71799 18.408C2.5 17.9802 2.5 17.4201 2.5 16.3V15C2.5 14.0681 2.5 13.6022 2.65224 13.2346C2.85523 12.7446 3.24458 12.3552 3.73463 12.1522C4.10218 12 4.56812 12 5.5 12M10.3 14.5H13.7C13.98 14.5 14.12 14.5 14.227 14.4455C14.3211 14.3976 14.3976 14.3211 14.4455 14.227C14.5 14.12 14.5 13.98 14.5 13.7V10.3C14.5 10.02 14.5 9.87996 14.4455 9.773C14.3976 9.67892 14.3211 9.60243 14.227 9.5545C14.12 9.5 13.98 9.5 13.7 9.5H10.3C10.02 9.5 9.87996 9.5 9.773 9.5545C9.67892 9.60243 9.60243 9.67892 9.5545 9.773C9.5 9.87996 9.5 10.02 9.5 10.3V13.7C9.5 13.98 9.5 14.12 9.5545 14.227C9.60243 14.3211 9.67892 14.3976 9.773 14.4455C9.87996 14.5 10.02 14.5 10.3 14.5ZM17.8 22H21.2C21.48 22 21.62 22 21.727 21.9455C21.8211 21.8976 21.8976 21.8211 21.9455 21.727C22 21.62 22 21.48 22 21.2V17.8C22 17.52 22 17.38 21.9455 17.273C21.8976 17.1789 21.8211 17.1024 21.727 17.0545C21.62 17 21.48 17 21.2 17H17.8C17.52 17 17.38 17 17.273 17.0545C17.1789 17.1024 17.1024 17.1789 17.0545 17.273C17 17.38 17 17.52 17 17.8V21.2C17 21.48 17 21.62 17.0545 21.727C17.1024 21.8211 17.1789 21.8976 17.273 21.9455C17.38 22 17.52 22 17.8 22ZM2.8 7H6.2C6.48003 7 6.62004 7 6.727 6.9455C6.82108 6.89757 6.89757 6.82108 6.9455 6.727C7 6.62004 7 6.48003 7 6.2V2.8C7 2.51997 7 2.37996 6.9455 2.273C6.89757 2.17892 6.82108 2.10243 6.727 2.0545C6.62004 2 6.48003 2 6.2 2H2.8C2.51997 2 2.37996 2 2.273 2.0545C2.17892 2.10243 2.10243 2.17892 2.0545 2.273C2 2.37996 2 2.51997 2 2.8V6.2C2 6.48003 2 6.62004 2.0545 6.727C2.10243 6.82108 2.17892 6.89757 2.273 6.9455C2.37996 7 2.51997 7 2.8 7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            },
        ],
    },
];

const companySections = [
    {
        sections: [
            {
                pages: [
                    { to: '/about-us', label: 'About Us' },
                    { to: '/careers', label: 'Careers' },
                    { to: '/partners', label: 'Partners' },
                    { to: '/news', label: 'News' },
                    { to: '/blogs', label: 'Blogs' },
                ],
            },
        ],
    },
];

const developerSections = [
    {
        sections: [
            {
                pages: [
                    { to: '/documentation', label: 'Documentation' },
                    { to: '/api-reference', label: 'API Reference' },
                ],
            },
        ],
    },
];

const legalSections = [
    {
        sections: [
            {
                pages: [
                    { to: '/terms-and-conditions', label: 'Terms & Conditions' },
                    { to: '/privacy-policy', label: 'Privacy Policy' },
                    { to: '/customer-acceptance-policy', label: 'Customer Acceptance Policy' },
                    { to: '/Data-Processing-Agreement.pdf', label: 'Data Processing Agreement' },
                    { to: '/Platform-Services-Agreement.pdf', label: 'Platform Services Agreement' },
                    { to: '/Merchant-Services-Agreement.pdf', label: 'Merchant Services Agreement' },
                ],
            },
        ],
    },
];

// const footerNavItems = [
//     { label: 'Terms & Conditions', to: '/terms-and-conditions' },
//     { label: 'Privacy Policy', to: '/privacy-policy' },
//     { label: 'Customer Acceptance Policy', to: '/customer-acceptance-policy' },
//     { label: 'Data Processing Agreement', to: '/data-processing-agreement' },
//     { label: 'Platform Services Agreement', to: '/platform-services-agreement' },
// ];
</script>

<style lang="">

</style>