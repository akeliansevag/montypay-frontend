<template>
    <div>
        <Hero 
            title="FAQ"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants" button="Get Started"
            image="faq" 
            hero="88"
        />

        <section class="py-16 lg:py-36">
            <div class="container">
                <div class="flex flex-col gap-14">
                    <div v-for="(faq, index) in faqs" :key="faq.title">
                        <div>
                            <h2 class="mb-4 text-3xl">{{ faq.title }}</h2>
                            <div class="mb-4" v-for="(item, i) in faq.items" :key="item.id">
                                <div class="rounded bg-[#F9FAFB] p-5 lg:p-10">
                                    <div class="cursor-pointer flex items-center gap-4 justify-between font-bold text-xl"
                                        @click="toggle(item.id)">
                                        <h5>{{ item.question }}</h5>
                                        <span
                                            class="text-[#98A2B3] shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center border-[#98A2B3]">
                                            <Icon :name="activeItemId === item.id ? 'fa6-solid:minus' : 'fa6-solid:plus'"
                                                class="icon text-sm  bg-[#ffffff1a]" />
                                        </span>
                                    </div>

                                    <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                                        <div v-if="activeItemId === item.id" class="content">
                                            <ContentBlock :paragraph="item.answer" class="mt-5" />
                                        </div>
                                    </transition>
                                </div>
                            </div> 
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'FAQ',
        ogTitle: 'FAQ',
        description: 'FAQ',
        ogDescription: 'FAQ',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    });
    const faqs = [
        {
            title: "General",
            items: [
                {
                    id: 1,
                    question: 'Who can use MontyPay services?',
                    answer: 'MontyPay allows any registered business to sign up and receive payments through various channels like websites, pay links, and mobile apps. However, businesses engaging in certain activities or failing compliance and risk checks may not be accepted.'
                },
                {
                    id: 2,
                    question: 'Do I have to be PCI compliant to accept payments through MontyPay payment services?',
                    answer: 'No, you can still take payments using MontyPay since our platform is PCI compliant. All transaction data processed through our platform is safeguarded within our secure network.'
                },
                {
                    id: 3,
                    question: 'How can I get started with MontyPay Services?',
                    answer: 'Feel free to reach out by using the "Contact Us" section on the website or sending an email to <a href="mailto:info@montypay.com">info@montypay.com</a>. Our representatives will get in touch with you for further information.'
                },
                {
                    id: 4,
                    question: 'Do you have customer support?',
                    answer: 'Our customer support is reachable through whatsapp on +44 7496 312110 and <a href="mailto:support@montypay.com">support@montypay.com</a> or through our chat widgets available on the website and merchants dashboard/mobile app.'
                },
                {
                    id: 5,
                    question: 'What is a Dashboard and why do I need it?',
                    answer: 'A dashboard is a live screen providing a complete overview of key performance indicators (KPIs) for your business in real-time.'
                }
            ]
        },
        {
            title: "Compliance",
            items: [
                {
                    id: 6,
                    question: 'How does MontyPay ensure compliance with Anti-Money Laundering (AML) regulations?',
                    answer: 'MontyPay prioritizes AML compliance through robust procedures, including customer due diligence during onboarding, ongoing transaction monitoring, and reporting of suspicious activities to relevant authorities. Our team undergoes regular AML training, and we continuously update our policies to align with evolving regulatory requirements. By implementing strong AML measures, we strive to maintain a secure and compliant environment for financial transactions.'
                },
                {
                    id: 7,
                    question: 'How does MontyPay handle security, protect sensitive information, and ensure compliance with industry regulations and standards?',
                    answer: 'MontyPay places a high priority on security through the implementation of industry-leading measures. This includes robust encryption protocols, such as SSL, to secure data transmission, multi-layered infrastructure security, and regular security audits. In terms of compliance, we adhere to industry standards like PCI DSS and conduct regular audits to validate our compliance. We stay aligned with regulatory updates, by promptly adjusting our practices to ensure ongoing adherence to all relevant standards and regulations.'
                },
                {
                    id: 8,
                    question: 'What is MontyPay\'s Acceptable Use Policy?',
                    answer: 'MontyPay\'s Acceptable Use Policy outlines activities and products not allowed with its services, as they may appear illegal or inappropriate. If MontyPay suspects a violation of its Customer Acceptance Policy, it may take corrective action, like terminating accounts. For more details, check MontyPay\'s Customer Acceptance Policy <a href="https://montypay.com/customer-acceptance-policy/">https://montypay.com/customer-acceptance-policy/</a>'
                },
            ]
        },
        {
            title: "Onboarding and Payments",
            items: [
                {
                    id: 9,
                    question: 'What’s the next step once I have submitted the complete requirements?',
                    answer: 'After receiving all the necessary documents, we will check them against our internal policies and share the documentation with the acquiring bank. This process typically takes about 48 hours.'
                },
                {
                    id: 10,
                    question: 'How long does the acquiring bank need to review my application and grant the approval?',
                    answer: 'The application process takes about 10-15 working days when all required documents are submitted. However, in exceptional cases requiring additional risk and compliance review, it might take longer.'
                },
                {
                    id: 11,
                    question: 'Can I use MontyPay on more than one website under the same legal entity?',
                    answer: 'You can do so if the activities of the websites align with the entity\'s policies. If the websites belong to different domains, a distinct onboarding process will be applicable.'
                },
                {
                    id: 12,
                    question: 'Which E-commerce platforms does MontyPay support?',
                    answer: 'MontyPay is compatible with a variety of E-commerce platforms such as Magento, Woocommerce, Prestashop, nopCommerce, opencart, ecomz, thewebaddicts and easydigitaldownloads. Any other new platform can be assessed and developed.'
                },
                {
                    id: 13,
                    question: 'Which Mobile SDKs do MontyPay support?',
                    answer: 'Montypay supports IOS, Android, and Flutter.'
                },
                {
                    id: 14,
                    question: 'Does MontyPay support Insite/InApp payments?',
                    answer: 'Yes, both are supported when the merchant website or App are secure.'
                },
                {
                    id: 15,
                    question: 'Do you provide technical API documentation for initiating integration and testing on my sandbox account?',
                    answer: 'Documentation is available on MontyPay website through <a href="https://montypay.com/api-reference/">https://montypay.com/api-reference/</a>'
                },
                {
                    id: 16,
                    question: 'Do you accept non 3DS cards?',
                    answer: 'Acceptance of non-3DS is restricted to specific merchants and jurisdictions.'
                },
                {
                    id: 17,
                    question: 'Does MontyPay support Crypto payments?',
                    answer: 'Yes, it does.'
                },
                {
                    id: 18,
                    question: 'Does MontyPay offer multiple payment methods?',
                    answer: 'MontyPay\'s worldwide presence enables merchants to accept all local and international payment methods accessible in the country of their incorporation.'
                },
                {
                    id: 19,
                    question: 'Can I deactivate my account at any time?',
                    answer: 'The merchant can initiate an account deactivation request at any time, provided all outstanding dues are settled. The merchant will continue to be responsible for processed transactions even after the account is closed. Termination clauses are outlined in the merchant agreement.'
                },
                {
                    id: 20,
                    question: 'Does MontyPay offer the payment links service to the customers?',
                    answer: 'Yes, it does.'
                },
                {
                    id: 21,
                    question: 'Can I deactivate my account at any time?',
                    answer: 'The merchant can initiate an account deactivation request at any time, provided all outstanding dues are settled. The merchant will continue to be responsible for processed transactions even after the account is closed. Termination clauses are outlined in the merchant agreement.'
                },
                {
                    id: 22,
                    question: 'How easy is to integrate with MontyPay?',
                    answer: 'MontyPay\'s payment integration is crafted to accommodate all programming languages, and merchants can receive sample codes in their preferred language.'
                },
                {
                    id: 23,
                    question: 'Does MontyPay provide Tokenization service?',
                    answer: 'Yes, it does.'
                },
                {
                    id: 24,
                    question: 'Does MontyPay offer recurring services?',
                    answer: 'Yes, it does.'
                },
                {
                    id: 25,
                    question: 'Does MontyPay offer website development and digital services?',
                    answer: 'Yes, MontyPay offers website development, marketing, and digital services.'
                },
            ]
        },
        {
            title: "Refunds & Settlements",
            items: [
                {
                    id: 26,
                    question: 'How long is the settlement period?',
                    answer: 'The settlement period will be set depending on the acquirer bank.'
                },
                {
                    id: 27,
                    question: 'How do I know what my settlement period is?',
                    answer: 'MontyPay operates in multiple countries, and as a result, the settlement period varies from one country to another. The specific settlement period for each merchant is outlined in their initial proposal.'
                },
                {
                    id: 28,
                    question: 'How long does it take for a refund to reach the customer?',
                    answer: 'Refunds are expected to be completed within 7 to 15 working days or more depending on the Issuer/Acquirer bank responsiveness.'
                },
            ]
        },
        {
            title: "Website Development",
            items: [
                {
                    id: 29,
                    question: 'Can you develop and deliver a fully functional website?',
                    answer: 'Yes, we can.'
                },
                {
                    id: 30,
                    question: 'What does MontyPay’s website development process entail?',
                    answer: 'MontyPay\'s process for website development begins with an initial consultation to comprehend the merchant\'s requirements. It then progresses through design mock-ups, development, incorporating client feedback, and concludes with deployment, following thorough testing to guarantee a smooth user experience.'
                },
                {
                    id: 31,
                    question: 'Does MontyPay offer responsive design for mobile devices?',
                    answer: 'MontyPay’s websites are designed to be fully responsive, ensuring optimal viewing and functionality across various devices including smartphones, tablets, and desktops.'
                },
                {
                    id: 32,
                    question: 'How does MontyPay ensure the security of the website?',
                    answer: 'MontyPay prioritizes website security by implementing industry-standard security protocols, SSL certificates, regular updates, and robust measures to protect against vulnerabilities and cyber threats.'
                },
                {
                    id: 33,
                    question: 'Can MontyPay integrate e-commerce functionalities into the website?',
                    answer: 'MontyPay is specialized in e-commerce development and can integrate secure payment gateways, shopping carts, and inventory management systems tailored to your business needs.'
                },
                {
                    id: 34,
                    question: 'Does MontyPay offer support after launching the websites?',
                    answer: 'MontyPay provides comprehensive post-launch support, including training, troubleshooting, and ongoing technical assistance to ensure that the merchants’ websites function optimally.'
                },
                {
                    id: 35,
                    question: 'What sets MontyPay\'s development services apart from others?',
                    answer: 'Our team stands out in the industry due to our expertise, unwavering commitment to client satisfaction, meticulous attention to detail, and our pledge to deliver innovative, high-quality websites tailored to the unique requirements of each client.'
                },

            ]
        },
        
        
    ];

    const activeItemId = ref(null);

    function toggle(itemId) {
        // If the clicked item is already active, close it, otherwise open the clicked one.
        activeItemId.value = activeItemId.value === itemId ? null : itemId;
    }

    function beforeEnter(el) {
        el.style.height = '0';
    }

    function enter(el, done) {
        el.style.transition = 'height 0.3s ease';
        el.style.height = `${el.scrollHeight}px`;
        el.addEventListener('transitionend', done, { once: true });
    }

    function beforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`;
    }

    function leave(el, done) {
        el.style.transition = 'height 0.3s ease';
        setTimeout(() => {
            el.style.height = '0';
        });
        el.addEventListener('transitionend', done, { once: true });
    }
</script>

<style lang="scss" scoped>
    .content {
        overflow: hidden;
    }
</style>