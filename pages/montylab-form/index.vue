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
                            <select
                                ref="countrySelect"
                                :class="form.country === '' ? 'text-gray-400' : 'text-black'"
                                v-model="form.country"
                                name="country"
                                class="custom-select w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]"
                            >
                                <option value="">{{ t('General.Placeholders.Country') }}</option>
                                <option
                                    :value="country.Value"
                                    v-for="country in countries"
                                    :key="country.Value"
                                >
                                    {{ country.Label }}
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
                            <select
                                    ref="industrySelect"
                                    v-model="form.industry"
                                    name="industry"
                                    :class="form.industry === '' ? 'text-gray-400' : 'text-black'"
                                    class="custom-select w-full text-base px-4 py-2 bg-primary rounded-lg outline-none border border-[#ccc]"
                                >
                                <option value="">{{ t('General.Placeholders.Industry') }}</option>
                                <option
                                    :value="industry.Value"
                                    v-for="industry in industries"
                                    :key="industry.Value"
                                >
                                   {{ industry.Label }}
                                </option>
                            </select>
                            <div v-if="errors.industry" class="text-red-500 text-xs">{{ errors.industry }}</div>
                        </div>
                    </div>

                    <div class="flex gap-8 w-full">
                        <!-- Question -->
                        <div class="flex items-center justify-between w-full">
                            <p class="text-white text-lg">{{ t('General.Placeholders.Do you have a website?') }}</p>

                            <div class="flex gap-6">
                            <!-- Yes -->
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="yes"
                                    v-model="form.has_website"
                                    class="w-5 h-5"
                                />
                                <span class="text-white">{{ t('General.Yes') }}</span>
                            </label>

                            <!-- No -->
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="no"
                                    v-model="form.has_website"
                                    class="w-5 h-5"
                                />
                                <span class="text-white">{{ t('General.No') }}</span>
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
                            <select :class="form.revenue === '' ? 'text-gray-400' : 'text-black'"
                                v-model="form.revenue" name="revenue"
                                class="custom-select w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-none border border-[#ccc]">
                                <option value="">{{ t('General.Placeholders.Revenue') }}</option>
                                <option value="1">$0 - 10k</option>
                                <option value="2">$10k - 100k</option>
                                <option value="3">$100k - 1M</option>
                                <option value="4">$1M</option>
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

    const router = useRouter();
    const emit = defineEmits();

    const countries = ref([])
    const industries = ref([])

    onMounted(async () => {
        try {
            const [countriesRes, industriesRes] = await Promise.all([
            fetch(import.meta.env.VITE_MONTYLAB_COUNTRIES_API_URL, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 's-key': import.meta.env.VITE_MONTYLAB_COUNTRIES_API_KEY },
            }),
            fetch(import.meta.env.VITE_MONTYLAB_INDUSTRIES_API_URL, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 's-key': import.meta.env.VITE_MONTYLAB_INDUSTRIES_API_KEY },
            }),
            ])

            const [countriesJson, industriesJson] = await Promise.all([
                countriesRes.json(),
                industriesRes.json(),
            ])

            countries.value = countriesJson.data.map(c => ({
                Title: c.name, 
                Value: c.id,
                Label: t(`General.Montylab Countries.${c.name}`, c.name)
            }))
            industries.value = industriesJson.data.map(i => ({ 
                Title: i.Name, 
                Value: i.Industry,
                Label: t(`General.Montylab Industries.${i.Name}`, i.Name)
            }))

        } catch (error) {
            console.error('Failed to fetch dropdown data:', error)
        }
    })

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

                // Helper to get Label from Value for dropdowns
                const countryLabel = countries.value.find(c => c.Value === form.value.country)?.Label || form.value.country
                const industryLabel = industries.value.find(i => i.Value === form.value.industry)?.Label || form.value.industry

                const WP_API_ENDPOINT = 'https://backend.montypay.com/wp-json/contact-form-7/v1/contact-forms/9/feedback';

                // 1. WordPress — uses Labels for dropdowns
                const formData = new FormData();
                formData.append('first_name', form.value.first_name);
                formData.append('last_name', form.value.last_name);
                formData.append('country', countryLabel);        // 👈 Label
                formData.append('phone_number', form.value.mobile);
                formData.append('company_name', form.value.company);
                formData.append('work_email', form.value.email);
                formData.append('title', form.value.title);
                formData.append('industry', industryLabel);      // 👈 Label
                formData.append('has_website', form.value.has_website);
                formData.append('website', form.value.link);
                formData.append('revenue', form.value.revenue);
                formData.append('message', form.value.message);
                formData.append('_wpcf7_unit_tag', 'rte');

                const wpResponse = await fetch(WP_API_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                });

                if (!wpResponse.ok) {
                    throw new Error('WordPress submission failed');
                }

                // 2. CRM — uses GUIDs for dropdowns
                const recaptchaToken = await getRecaptchaToken();
                const apiPayload = {
                    firstName: form.value.first_name,
                    lastName: form.value.last_name,
                    country: form.value.country,               // 👈 GUID Value
                    phoneNumber: form.value.mobile,
                    companyName: form.value.company,
                    workEmail: form.value.email,
                    title: form.value.title,
                    industry: form.value.industry,             // 👈 GUID Value
                    hasWebsite: form.value.has_website === 'yes', // 👈 boolean
                    onlineRevenueBand: Number(form.value.revenue), // 👈 integer (1/2/3/4)
                    message: form.value.message,
                    'marketing source of contact': '9a7c9282-7ad6-ec11-a7b5-6045bd951f1b',
                    marketingcampaign: '',
                };

                const apiRes = await fetch(import.meta.env.VITE_MP_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...MP_API_HEADERS,
                        RecaptchaToken: recaptchaToken
                    },
                    body: JSON.stringify(apiPayload)
                });

                if (!apiRes.ok) {
                    const msg = await apiRes.text();
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