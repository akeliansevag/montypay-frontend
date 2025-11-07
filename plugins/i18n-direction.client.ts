// plugins/i18n-direction.client.ts
import { watch } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Access the i18n instance from the app context instead of useI18n()
  const i18n = nuxtApp.$i18n

  const updateHtmlAttrs = (lang: string) => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  // Initial setup
  updateHtmlAttrs(i18n.locale.value)

  // Watch for locale changes
  watch(i18n.locale, (newLocale) => updateHtmlAttrs(newLocale))
})
