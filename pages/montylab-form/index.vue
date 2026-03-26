<template>
    
    <section class="relative max-lg:py-10 lg:py-20">
        <div class="container">
            <div class="flex max-lg:flex-col max-lg:gap-8 gap-16 lg:justify-between">
                <div class="lg:w-2/5 flex flex-col gap-4">
                    <img class="w-44" src="/images/montylab-logo.svg" />
                    <h1 class="text-3xl !leading-[1.3] lg:text-5xl lg:!leading-[1.5]">
                        {{t('Pages.MontyLab.Banner.Title')}}
                    </h1>
                    <p class="text-xl">
                        {{t('Pages.MontyLab.Banner.Description')}}
                    </p>
                    <img class="mx-auto mt-16 w-full" src="/images/build-something-great.webp" />
                </div>

                <div class="lg:w-3/5 flex flex-col gap-6 rounded-3xl bg-[#2A4187] py-12 px-8">
                    
                    <div class="flex max-lg:flex-col gap-8 w-full">
                        <div class="flex flex-col gap-1 w-full">
                            <input v-model="form.first_name" type="text" id="first_name"
                                :placeholder="t('General.Placeholders.First Name')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                            <div v-if="errors.first_name" class="text-red-500 text-xs">{{ errors.first_name }}</div>
                        </div>
                        <div class="flex flex-col gap-1 w-full">
                            <input v-model="form.last_name" type="text" id="last_name"
                                :placeholder="t('General.Placeholders.Last Name')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                            <div v-if="errors.last_name" class="text-red-500 text-xs">{{ errors.last_name }}</div>
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-8 w-full">
                        <div class="flex flex-col gap-1 w-full">
                            <select ref="countrySelect" :class="form.country === '' ? 'text-gray-400' : 'text-black'"
                                v-model="form.country" name="country"
                                class="custom-select w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                                <option value="">{{ t('General.Placeholders.Country') }}</option>
                                <option :value="rt(country.Value)" v-for="country in countries"
                                    :key="rt(country.Value)">
                                    {{
                                        rt(country.Title)
                                    }}
                                </option>
                            </select>
                            <div v-if="errors.country" class="text-red-500 text-xs">{{ errors.country }}</div>
                        </div>

                        <div class="flex flex-col gap-1 w-full">
                            <input v-model="form.mobile" type="tel" id="mobile"
                                :placeholder="t('General.Placeholders.Phone Number')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                            <div v-if="errors.mobile" class="text-red-500 text-xs">{{ errors.mobile }}</div>
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-8 w-full">
                        <div class="flex flex-col gap-1 w-full">
                            <input v-model="form.company" type="text" id="company"
                                :placeholder="t('General.Placeholders.Company Name')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                            <div v-if="errors.company" class="text-red-500 text-xs">{{ errors.company }}</div>
                        </div>

                        <div class="flex flex-col gap-1 w-full">
                            <input v-model="form.email" type="text" id="email"
                                :placeholder="t('General.Labels.Work Email')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                            <div v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</div>
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-8 w-full">
                        <div class="flex flex-col gap-1 w-full">
                            <input v-model="form.title" type="text" id="title"
                                :placeholder="t('General.Placeholders.Title')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                            <div v-if="errors.title" class="text-red-500 text-xs">{{ errors.title }}</div>
                        </div>

                        <div class="flex flex-col gap-1 w-full">
                            <select ref="industrySelect" v-model="form.industry" name="industry"
                                :class="form.industry === '' ? 'text-gray-400' : 'text-black'"
                                class="custom-select w-full text-base px-4 py-2 bg-primary rounded-lg outline-none border border-[#ccc">
                                <option value="">{{ t('General.Placeholders.Industry') }}</option>
                                <option :value="rt(industry.Value)" v-for="industry in industries"
                                    :key="rt(industry.Value)">
                                    {{
                                        rt(industry.Title)
                                    }}
                                </option>
                            </select>
                            <div v-if="errors.industry" class="text-red-500 text-xs">{{ errors.industry }}</div>
                        </div>
                    </div>

                    <div class="flex gap-8 w-full">
                        <!-- Question -->
                        <div class="flex items-center justify-between w-full">
                            <p class="text-white text-lg">Do you have a website?</p>

                            <div class="flex gap-6">
                            <!-- Yes -->
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="yes"
                                    v-model="form.has_website"
                                    class="w-5 h-5"
                                />
                                <span class="text-white">Yes</span>
                            </label>

                            <!-- No -->
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="no"
                                    v-model="form.has_website"
                                    class="w-5 h-5"
                                />
                                <span class="text-white">No</span>
                            </label>
                            </div>
                        </div>

                        
                    </div>

                    <!-- Platform input (ONLY if yes) -->
                    <div v-if="form.has_website === 'yes'" class="flex max-lg:flex-col gap-8 w-full">
                        <div class="flex flex-col gap-1 w-full">
                            <input v-model="form.link" type="text" id="link"
                                :placeholder="t('General.Placeholders.Platform')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                            <div v-if="errors.link" class="text-red-500 text-xs">{{ errors.link }}</div>
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-8 w-full">
                        <div class="flex flex-col gap-1 w-full">
                            <select ref="revenueSelect" :class="form.revenue === '' ? 'text-gray-400' : 'text-black'"
                                v-model="form.revenue" name="revenue"
                                class="custom-select w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                                <option value="">{{ t('General.Placeholders.Revenue') }}</option>
                                <option :value="rt(revenue.Value)" v-for="revenue in revenues" :key="rt(revenue.Value)">
                                    {{
                                        rt(revenue.Title)
                                    }}
                                </option>

                            </select>
                            <div v-if="errors.revenue" class="text-red-500 text-xs">{{ errors.revenue }}</div>
                        </div>
                    </div>

                    <div class="flex max-lg:flex-col gap-8 w-full">
                        <div class="flex flex-col gap-1 w-full">
                            <textarea v-model="form.message" id="message"
                                :placeholder="t('General.Placeholders.Message')"
                                class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc] resize-none"
                                rows="10"></textarea>
                            <div v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</div>
                        </div>
                    </div>

                    <div class="flex gap-8 w-full mt-8">
                        <div class="flex-col gap-3 w-full">
                            <div class="flex gap-3 w-full">
                                <input v-model="form.acknowledgment" type="checkbox" id="acknowledgment">
                                <label for="acknowledgment" class="text-white">{{ t('General.Labels.Privacy Policy 2') }}</label>
                            </div>
                            <div v-if="errors.acknowledgment" class="text-red-500 text-xs">{{ errors.acknowledgment }}
                            </div>
                        </div>
                    </div>

                    <div class="gap-8 w-full">
                        <div class="flex gap-3 w-full">
                            <input type="submit" id="submit" class="mp-button-secondary text-base text-white bg-[#0E91EE]" :value="submitting ? t('General.Buttons.Submitting') : t('General.Buttons.Submit')" @click.prevent="handleSubmit">
                        </div>
                        <div class="mt-5" v-if="submissionMessage">{{ submissionMessage }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<script setup>
    const { t, tm, rt, locale, setLocale } = useI18n()
    useSeoMeta({
        title: 'E-Commerce Payment Services for Online Businesses',
        ogTitle: 'E-Commerce Payment Services for Online Businesses',
        description: 'Empower your online store with MontyPay’s e-commerce payment services—secure checkout, global payment methods, and seamless customer experiences.',
        ogDescription: 'Empower your online store with MontyPay’s e-commerce payment services—secure checkout, global payment methods, and seamless customer experiences.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const countries = computed(() => tm('General.Countries') || []);
    const industries = computed(() => tm('General.Montylab Industries') || []);
    const revenues = computed(() => tm('General.Revenues') || []);
    const router = useRouter();
    const emit = defineEmits();

    // const RECAPTCHA_SITE_KEY = '6Le6TscrAAAAAIzSW6d0-jC_oUhqcFGAkXRb87Mc';
    // const MP_API_URL = 'https://mm-apis.montypay.com/core/api/v1/MPContactUs';
    // const MP_API_HEADERS = {
    //     Tenant: 'd2ed2d13-09ea-4311-923e-21fae0f7c063',
    //     LanguageCode: 'en'
    // };

    const submissionMessage = ref('');
    const submitting = ref(false);
    const form = ref({
        first_name: '',
        last_name: '',
        country: '',
        mobile: '',
        company: '',
        email: '',
        title: '',
        industry: '',
        has_website: null,
        link: '',
        revenue: '',
        message: '',
        acknowledgment: false,
    });

    const errors = ref({
        first_name: '',
        last_name: '',
        country: '',
        mobile: '',
        company: '',
        email: '',
        title: '',
        industry: '',
        has_website: '',
        link: '',
        revenue: '',
        message: '',
        acknowledgment: '',
    });

    const validationRules = computed(() => ({
        first_name: {
            required: t('General.Messages.Errors.Required.First Name'),
            safe: t('General.Messages.Errors.Safe')
        },
        last_name: {
            required: t('General.Messages.Errors.Required.Last Name'),
            safe: t('General.Messages.Errors.Safe')
        },
        country: {
            required: t('General.Messages.Errors.Required.Country'),
            safe: t('General.Messages.Errors.Safe')
        },
        mobile: {
            required: t('General.Messages.Errors.Required.Mobile Number'),
            numeric: t('General.Messages.Errors.Numeric'),
            length: t('General.Messages.Errors.Length'),
            safe: t('General.Messages.Errors.Safe')
        },
        company: {
            required: t('General.Messages.Errors.Required.Company Name'),
            safe: t('General.Messages.Errors.Safe')
        },
        email: {
            required: t('General.Messages.Errors.Required.Email'),
            email: t('General.Messages.Errors.Valid Email'),
            safe: t('General.Messages.Errors.Safe')
        },
        title: {
            required: t('General.Messages.Errors.Required.Title'),
            safe: t('General.Messages.Errors.Safe')
        },
        industry: {
            required: t('General.Messages.Errors.Required.Industry'),
            safe: t('General.Messages.Errors.Safe')
        },
        has_website: {
            required: t('General.Messages.Errors.Required.Has Website'),
            safe: t('General.Messages.Errors.Safe')
        },
        link: form.value.has_website === 'yes'
            ? {
                required: t('General.Messages.Errors.Required.Website'),
                url: t('General.Messages.Errors.URL'),
                safe: t('General.Messages.Errors.Safe')
            }
            : {},
        revenue: {
            required: t('General.Messages.Errors.Required.Revenue'),
            safe: t('General.Messages.Errors.Safe')
        },
        message: {
            required: t('General.Messages.Errors.Required.Message'),
            safe: t('General.Messages.Errors.Safe')
        },
        acknowledgment: {
            required: t('General.Messages.Errors.Required.Privacy Policy'),
            safe: t('General.Messages.Errors.Safe')
        },
    }));

    const countrySelect = ref(null)
    const revenueSelect = ref(null)
    const industrySelect = ref(null)

    // very small validator (feel free to swap with your existing one)

    async function getRecaptchaToken() {
        // waits until the script is ready
        await new Promise((resolve) => {
            if (window.grecaptcha && window.grecaptcha.ready) return resolve();
            const check = setInterval(() => {
                if (window.grecaptcha && window.grecaptcha.ready) {
                    clearInterval(check);
                    resolve();
                }
            }, 50);
        });
        return new Promise((resolve, reject) => {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
                    .then(resolve)
                    .catch(reject);
            });
        });
    }
    const handleSubmit = async () => {
        if (validateForm(form, errors, validationRules.value)) {
            try {
                submitting.value = true;
                const WP_API_ENDPOINT = 'https://backend.montypay.com/wp-json/contact-form-7/v1/contact-forms/9/feedback';

                // Get labels from selected options via refs
                const countryLabel = countrySelect.value.options[countrySelect.value.selectedIndex]?.text || '';
                const revenueLabel = revenueSelect.value.options[revenueSelect.value.selectedIndex]?.text || '';
                const industryLabel = industrySelect.value.options[industrySelect.value.selectedIndex]?.text || '';

                // Prepare WordPress form data
                const formData = new FormData();
                formData.append('first_name', form.value.first_name);
                formData.append('last_name', form.value.last_name);
                formData.append('country', countryLabel);
                formData.append('phone_number', form.value.mobile);
                formData.append('company_name', form.value.company);
                formData.append('work_email', form.value.email);
                formData.append('title', form.value.title);
                formData.append('industry', industryLabel);
                formData.append('has_website', form.value.has_website);
                formData.append('website', form.value.link);
                formData.append('revenue', revenueLabel);
                formData.append('message', form.value.message);
                formData.append('_wpcf7_unit_tag', 'rte');

                // 1. Submit to WordPress Headless
                const wpResponse = await fetch(WP_API_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                });

                if (!wpResponse.ok) {
                    throw new Error('WordPress submission failed');
                }

                const wpData = await wpResponse.json();
                // WordPress submission successful


                // // 2) Get reCAPTCHA token and submit to MontyPay API with IDs
                // const recaptchaToken = await getRecaptchaToken();
                // const apiPayload = {
                //     CampaignId: '',
                //     FirstName: form.value.first_name,
                //     LastName: form.value.last_name,
                //     WorkEmail: form.value.email,
                //     PhoneNumber: form.value.mobile,
                //     Country: form.value.country,     // ID value
                //     CompanyName: form.value.company,
                //     CompanySize: form.value.size,
                //     Industry: form.value.industry,   // ID value
                //     Website: form.value.link,
                //     Message: form.value.message,
                //     Product: form.value.product      // ID (or string for "Website Development")
                // };

                const apiRes = await fetch(MP_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...MP_API_HEADERS,
                        RecaptchaToken: recaptchaToken
                    },
                    body: JSON.stringify(apiPayload)
                });

                if (!apiRes.ok) {
                    const msg = await safeText(apiRes);
                    throw new Error(`MontyPay API error: ${apiRes.status} ${msg}`);
                }

                submissionMessage.value = "Thank you for your message.";
                submitting.value = false;
                resetForm();
                router.push('/thank-you');

            } catch (error) {
                console.error("Form submission error:", error);
                submissionMessage.value = "Error in submitting your message.";
                submitting.value = false;
                resetForm();
            }
        }
    };
    const resetForm = () => {
        form.value.first_name = "";
        form.value.last_name = "";
        form.value.country = "";
        form.value.mobile = "";
        form.value.company = "";
        form.value.email = "";
        form.value.title = "";
        form.value.industry = "";
        form.value.has_website = null;
        form.value.link = "";
        form.value.revenue = "";
        form.value.message = "";
    }

    watch(() => form.value.has_website, (val) => {
        if (val === 'no') {
            form.value.link = '';
            errors.value.link = '';
        }
    });
</script>

<style lang="sass" scoped>

</style>