// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/sass/global.sass',
  ],
  ssr: true,
  nitro: {
    prerender: {
      routes: [
        '/', '/omnichannel', '/online-payments', '/smart-pos', '/soft-pos',
        '/q-check', '/about-us', '/partners', '/news', '/blogs',
        '/global-coverage', '/documentation', '/api-reference',
        '/contact-us', '/faq', '/html-sitemap'
      ]
    }
  },
  routeRules: {
    '/': { ssr: true },
    '/omnichannel': { ssr: true },
    '/online-payments': { ssr: true },
    '/smart-pos': { ssr: true },
    '/soft-pos': { ssr: true },
    '/q-check': { ssr: true },
    '/about-us': { ssr: true },
    '/partners': { ssr: true },
    '/news': { ssr: true },
    '/blogs': { ssr: true },
    '/global-coverage': { ssr: true },
    '/documentation': { ssr: true },
    '/api-reference': { ssr: true },
    '/contact-us': { ssr: true },
    '/faq': { ssr: true },
    '/html-sitemap': { ssr: true }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | MontyPay',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-64x64.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-16x16.png' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/images/apple-touch-icon-180x180.png' }
      ],
      meta: [
        { name: 'theme-color', content: '#00DFDF' }
      ],
      script: [
        {
          hid: 'gtm',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M75G7JM7');`
        },
        {
          hid: 'snap-pixel',
          innerHTML: `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
          {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
          a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
          r.src=n;var u=t.getElementsByTagName(s)[0];
          u.parentNode.insertBefore(r,u);})(window,document,
          'https://sc-static.net/scevent.min.js');

          snaptr('init', '69f3c661-d3e9-4c72-856d-b28e2d6ce2ff', {
            user_email: '__INSERT_USER_EMAIL__'
          });

          snaptr('track', 'PAGE_VIEW');`,
          type: 'text/javascript',
          charset: 'utf-8'
        },
        {
          hid: 'metricool',
          innerHTML: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
          c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,
          b.appendChild(c)}loadScript(function(){beTracker.t({hash:"414e65d87ddbb126f1541ba3cdadf48b"})});`,
          type: 'text/javascript',
          charset: 'utf-8'
        },
        {
          hid: 'google-ads-src',
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-17262217251',
          async: true
        },
        {
          hid: 'google-ads-inline',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17262217251');
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        },
        {
          hid: 'ahrefs-analytics',
          src: 'https://analytics.ahrefs.com/analytics.js',
          'data-key': 'DeLgwDhxUECTmZwzhIc7KA',
          async: true
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'snap-pixel': ['innerHTML'],
        'metricool': ['innerHTML'],
        'google-ads-inline': ['innerHTML'],
        gtm: ['innerHTML']
      }
    },
    //pageTransition: { name: 'page', mode: 'out-in' }
  },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    'nuxt-gtag',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],
  gtag: {
    id: 'G-L7YK1FPHZ1'
  },
  image: {
    // dir: 'assets/images'
  },
  googleFonts: {
    families: {
      Manrope: '400..700'
    }
  },
  devServer: {
    host: '0.0.0.0',
    https: false,
  },
  // i18n: {
	// 	legacy: false,
	// 	// baseUrl: 'http://92.205.130.62:5000',
	// 	locales: [
	// 		{
	// 			code: 'en',
	// 			iso: 'en',
	// 			region: 'Europe',
	// 			language: 'English',
	// 			icon: 'eu',
	// 			file: 'en.json',
	// 			native: true,
	// 			hideLanguages: false,
	// 		},
	// 		{
	// 			code: 'ar',
	// 			iso: 'ar',
	// 			region: 'Asia',
	// 			language: 'العربية',
	// 			icon: 'ar',
	// 			file: 'ar.json',
	// 			native: true,
	// 			hideLanguages: false,
	// 		},
	// 	],
	// 	restructureDir: './',
	// 	// lazy: true, // If false, this will show the translation not yet translate.
	// 	langDir: './locales/', // Ensure this directory exists
	// 	defaultLocale: 'en',
	// 	detectBrowserLanguage: false,
	// 	// detectBrowserLanguage: {
	// 	// 	useCookie: true,  // Store the detected locale in a cookie
	// 	// 	cookieKey: 'i18n_redirected', // Name of the cookie
	// 	// 	alwaysRedirect: true, // Always redirect to the user's browser language if not set
	// 	// 	fallbackLocale: 'en-EU'
	// 	// },
	// 	compilation: {
	// 		strictMessage: false,
	// 		// escapeHtml: true,
	// 	},
	// 	strategy: 'prefix_except_default',
	// 	// // //  {{ $t('Header.' + locale.language) }} or {{ $t('Header.Features) }}
	// },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    modules: ['effect-fade', 'pagination', 'thumbs', 'navigation', 'free-mode'], // all modules are imported by default
  }
})