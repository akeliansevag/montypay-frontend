<template lang="">
    <ul>
        <NavItem :layout="layout" label="Solutions" :children="solutionSections" />
        <NavItem :layout="layout" label="Company" :children="companySections" />
        <NavItem :layout="layout" to="/global-coverage" label="Global Coverage" />
        <!-- <NavItem :layout="layout" label="Developers" :children="developerSections" /> -->
        <NavItem :layout="layout" to="/contact-us" label="Contact" />
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
                    { to: '/omnichannel-solution', label: 'Omnichannel Solution' },
                    { to: '/online-payments', label: 'Online Payments' },
                    { to: '/in-store-payments', label: 'In-store payments' },
                    { to: '/q-check', label: 'QCheck' },
                ],
            },
            {
                label: 'Digital services',
                pages: [
                    { to: '/e-commerce-services', label: 'eCommerce Services' },
                ],
            },
            {
                label: 'Tech services',
                pages: [
                    { to: '/payment-orchestration-network', label: 'Payment orchestration network' },
                    { to: '/whitelable-for-psp-acquirer', label: 'Whitelabel For PSP/Acquirer' },
                ],
            },
        ],
    },
];

const companySections = [
    {
        sections: [
            {
                pages: [
                    { to: '/about-us', label: 'About us' },
                    // { to: '/careers', label: 'Careers' },
                    { to: '/partners', label: 'Partners' },
                    { to: '/news', label: 'News' },
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
                    { to: '/api-reference', label: 'Api Reference' },
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