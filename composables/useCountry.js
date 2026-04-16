import countriesData from '~/data/countries.json';

export const useCountry = () => {
    const selectedCountry = ref({});
    const countryIsEU = ref(false); // you can ignore or remove if not needed
    const initialCode = ref('');
    const errors = ref({ country: null });

    const router = useRouter();
    const { locale, setLocale } = useI18n();
    const i18nCookie = useCookie('i18n_redirected');

    const arabCountries = ['SA', 'JO'];

    const getLocaleFromCountry = (iso2) => {
        return arabCountries.includes(iso2) ? 'ar' : 'en';
    };

    const detectCountry = async () => {
        try {
            const response = await fetch('/api/geoip');
            const data = await response.json();
            if (!data || !data.country) {
                errors.value.country = 'No country data found';
                return;
            }

            const detectedCountry = countriesData.find(
                (country) => country.iso2 === data.country
            );

            if (!detectedCountry) {
                errors.value.country = 'Country not found in dataset';
                return;
            }

            // Set country info
            selectedCountry.value = detectedCountry;
            initialCode.value = detectedCountry.code;
            countryIsEU.value = detectedCountry.is_eu; // optional

            // Decide locale
            const newLocale = getLocaleFromCountry(detectedCountry.iso2);

            // Avoid unnecessary updates
            if (locale.value === newLocale) return;

            // Set locale + cookie
            await setLocale(newLocale);
            i18nCookie.value = newLocale;

            // Redirect to home in correct locale
            await router.push(useLocalePath()('/'));

        } catch (error) {
            errors.value.country = 'Unable to detect country';
        }
    };

    return {
        countriesData,
        selectedCountry,
        countryIsEU,
        initialCode,
        errors,
        detectCountry,
    };
};